let express = require("express");
let bodyParser = require('body-parser');
let session = require('express-session');
let app = express();
app.use(bodyParser.json());
app.use(session({
    resave: true,//每次访问都重新保存session
    saveUninitialized: true,//保存未初始化的session
    secret: 'zfpx'//密钥
}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    //允许的来源
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    //允许客户端请求的方法
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE');
    //允许客户端发送的请求头
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    //允许客户端发送Cookie
    res.header('Access-Control-Allow-Credentials', "true");
    //当客户端发向服务器发post跨域的时候，会先发送OPTIONS请求。如果服务器返回的响应头Access-Control-Allow-Methods里有POST的话，才会再次发送POST请求
    if (req.method == 'OPTIONS') {
        res.end();
    } else {
        next();
    }
});
//获取首页 列表 && 轮播图
let HList = require("./mock/HList");
// console.log(HList);
//获取星级食物列表
let food = require("./mock/food.json");
//获取搜索选项
let search = require("./mock/search.json");

let friend = require("./mock/friend.json");

//获取搜索列表
let foodList = require("./mock/foodList.json");

app.get("/hlist", function (req, res) {
    res.json(HList);
});
app.get('/star', function (req, res) {
    res.json(food[req.query.index]);
});
app.get('/search', function (req, res) {
    res.json(search);
});
app.get('/friend', function (req, res) {
    res.json(friend);
});

let Lesson = require("./mock/Lesson");

//获取列表页课程数据
app.get('/lesson', function (req, res) {
    res.json(Lesson);

});

app.post('/search', function (req, res) {
    let searchList = [];
    let find = req.body;
    let reg = new RegExp(find.searchFood, 'i');
    foodList.forEach(item => {
        searchList = [...searchList, ...item.data.find_recipe.filter(item => {
            return reg.test(item.recipe_name) || reg.test(item.recipe_info)
        })]
    });
    res.json({
        searchList: searchList.slice(0, find.limit),
        isLoading: false,
        limit: find.limit,
        keyword: find.searchFood
    });
});
app.post('/searchIndex', function (req, res) {
    let find = req.body;
    res.json(foodList[find.index]);
});

//注册用户信息
let users = require('./mock/users.json');


app.post('/register', function (req, res) {
    let user = req.body;

    let oldUser = users.find(item => item.phone == user.phone);
    if (oldUser) {  //有值就说明此用户已被注册了
        res.json({code: 1, error: '手机号已经被注册过 了！'})
    } else {
        user.id = users.length + 1;
        user.petname = user.phone;
        user = {
            comment_count: 0,//评论
            url: "",
            create_time: "",//创建时间
            author: "",//用户昵称
            user_img: "http://beile.bakelulu.com.cn//Flh_vGEnT0qfGmX2mieNHpA4jCeg",//用户头像
            works: [],//个人作品
            follows: [],//关注的人
            fans: [],//粉丝
            message: [],//信息
            id: '',//用户ID
            collects: [],//收藏,
            phone: '',//电话
            password: '',//密码
            draft: [],//草稿
            collections: [], ...user
        };
        users.push(user);
        res.json({code: 0, success: '用户注册成功！', user})
    }


});

//登录
app.post('/login', function (req, res) {
    let user = req.body;
    let oldUser = users.find(item => item.phone == user.phone && item.password == user.password);
    if (oldUser) {
        res.json({code: 0, success: '登录成功！', oldUser});
    } else {
        res.json({code: 1, error: '手机号或密码错误！'})
    }

});

//验证登录态，如果已经登录则返回登录的用户并存放在仓库里
app.get('/validate', function (req, res) {
    if (req.session.user) {
        res.json({
            code: 0, user: req.session.user
        })
    } else {
        res.json({code: 1});
    }
});

//退出登录 退出时code为1 并且跳转到首页
app.get('/signout', function (req, res) {
    req.session.user = '';
    res.json({code: 1});
});


//获取课程包优选课程列表数据
let lessonsPrefer = require('./mock/lessons-prefer');
app.get('/lessonPrefer', function (req, res) {
    res.json(lessonsPrefer);
});


//获取教程列表详情页数据

let detailList = require('./mock/detailList.json');
app.post('/detail', function (req, res) {

    let newDetailList = detailList['detailList'].find((item, index) => {
        return item.id === req.body.index + 1;
    });
    res.json(newDetailList);

});
app.post('/works', function (req, res) {
    let user = users.find((item) => {
        return item.id == req.body.id
    });
    console.log(req.body);
    user.works.push(req.body);
    res.json(user);
});
app.post('/draft', function (req, res) {
    let user = users.find((item) => {
        return item.id == req.body.id
    });
    user.draft.push(req.body);
    res.json(user);
});
//获取用户信息
app.get('/works', function (req, res) {
    let user = users.find(item => item.id == req.query.id);
    res.json(user);
});

//获取其他用户的信息
app.post('/getOthers', function (req, res) {
    let user = req.body;
    let current = users.find(item => item.id === user.id);
    if (current) {
        res.json(current);
    } else {
        res.json({});
    }

});



//登录成功后获取当前用户的收藏详情
app.post('/getCollections', function (req, res) {
    // let curId=req.body.userId;
    // console.log(req.body);
    let otherId = req.body.otherId;
    let collection = [];
    let user = users.find(item => item.id == otherId);
    detailList.detailList.filter(item => {
        if(user){
            if (user.collects.indexOf(item.id-1) >= 0) {
                return collection.push(item);
            }
        }

    });
    if (collection) {
        res.json(collection);
    } else {
        res.json({});
    }

});


//返回用户收藏数


app.post('/collect',function (req, res) {
    let id = req.body.id;
    let user = req.body.user;
    let collectItem = users.find((item, index) => item.id == user);
    if (collectItem) {
        collectItem.collects.push(id);
        res.json(collectItem);
    }
});




//删除用户评论
app.post('/delete', function (req, res) {
    let detailId = req.body.detailId;//当前大的对象的id
    let commentId = req.body.commentId;//当前大对象下每一项评论的id
    let detailItem = detailList['detailList'].find((item, index) => item.id == detailId + 1);
    let list = detailItem.dataComment.commentList.filter((item, index) => index != commentId);
    detailList['detailList'][detailId] = {...detailItem, dataComment: {...detailItem.dataComment, "commentList": list}};
    res.json({...detailItem, dataComment: {...detailItem.dataComment, "commentList": list}});
});

//增加用户评论
app.post('/add', function (req, res) {
    let detailId = req.body.detailId;//当前大的对象的id
    let comment = req.body.comment;//当前大对象下每一项的评论
    let detailItem = detailList['detailList'].find((item, index) => item.id == detailId + 1);
    detailItem.dataComment.commentList.push(comment);
    res.json(detailItem);
});



app.listen(3000, function () {
    console.log("端口 3000")
});