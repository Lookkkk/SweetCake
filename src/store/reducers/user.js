import * as types from '../action-types'

let initState = {
    comment_count: 0,//评论
    url: "",
    create_time: "",//创建时间
    author: "",//用户昵称
    user_img: "",//用户头像
    works: [],//个人作品
    follows: [],//关注的人
    fans: [],//粉丝
    message: [],//信息
    id: '',//用户ID
    collects: [],//收藏,
    phone: '',//电话
    password: '',//密码
    draft: [],//草稿
    collections:[],
    compile:{},//编辑的草稿
};

export default function (state = initState, action) {
    switch (action.type) {
        case types.POST_WORKS:
            return {
                ...state,
                ...action.payload,
            };
        case types.POST_DRAFT:
            return {
                ...state,
                ...action.payload,
            };
        case types.GET_WORKS:

            return {
                ...state,
                ...action.payload,
            };
        case types.FETCH_USER_COLLECT:
            return {
                ...state,
                ...action.payload
            };
        case types.GET_USER:
            return {
                ...state,
                ...action.payload
            };
        case types.GET_COLLECTIONS:
            return {
                ...state,
                collections:action.payload
            };

            // return {...state,
            //     collect_img:payload.data-course.course_img,
            //     collect_title:payload.data-course.course_title,
            //     comment_counts:payload.data-comment.comment_count
            // };
        case types.COMPILE_DRAFT:
                return{
                    ...state,
                    compile:action.payload
                };
        default:
            return state;
    }
}