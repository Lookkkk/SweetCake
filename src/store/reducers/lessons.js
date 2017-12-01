import * as types from '../action-types';

/**每个页面对应于一个reducer*/
let initState = {
    //存放着列表页的内容
    loading: '',//加载状态 加载中
    lessons: [],  //存放着每一项li的信息
    hasMore: true,//后面是否有更多
    offset: 0, //偏移量
    limit: 5, //每页的条数
    prefer: [],
};
export default function (state = initState, action) {
    //每个action必须把携带的数据放在payload里，而且必须是一个对象。
    switch (action.type) {//判断动作的类型
        case types.FETCH_LESSONS://当lesson数据取回来后
            return {
                ...state,
                ...action.payload
            };
        case types.FETCH_LESSONS_REFRESH:
            return {
                ...state,
                lessons: [...state.lessons, ...action.payload.lessons],
            };
        case types.FETCH_LESSON_PREFER:
            return {
                ...state,
                lessons: [...state.lessons, ...action.payload.lessons],
                prefer: [...state.prefer, ...action.payload.prefer]
            };
        default:
            return state;
    }
}