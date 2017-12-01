import * as types from '../action-types';
let initState = {
    //存放着搜索发现页的内容
    isLoading: '',//加载状态 加载中
    keyword:'',//搜索关键字
    limit: 3 ,  //每页的条数
    searchList: [],  //存放着每一次搜索的信息数组
    line:'',
    star: {},
};
export default function (state = initState, action) {
    //每个action必须把携带的数据放在payload里，而且必须是一个对象。
    switch (action.type) {//判断动作的类型
        case types.FETCH_SEARCH://当lesson数据取回来后
            return {
                ...state,
                ...action.payload,
            };
        case types.FETCH_CLASSIFY:
            return {
                ...state,
                searchList:[...action.payload.data.find_recipe],
            };
        case types.GET_STARFOOD:
            console.log(action.payload);
            return{
                ...state,
                star: {...action.payload}
            };
        default:
            return state;
    }
}