import * as types from '../action-types'
import {fetchLesson, fetchLessonPrefer} from '../../api/lession'
export default {
    //获取后台教程列表数据
    getLessons(){
        //调用fetch方法获取后台返回的数据。then里面放着成功的回调，成功的回调里里参数是列表数据,然后把此数据派发给仓库
        return dispatch => {
            fetchLesson().then(value => {
                dispatch({
                    type: types.FETCH_LESSONS,
                    payload: value
                })
            })
        }
    },
    refresh(){
        return (dispatch, getState) => {
            //派发一个对象,这个对象的payload是一个方法调用的返回值,这个返回值是一个promise,会等待promise完成,完成后会自动再次派发action.这个action的payload值会成为promise的resolve的值
            let {loading, hasMore, offset, limit} = getState();
            //只有目前不是加载中,并且的确有更多数据的话才会加载新的一页数据
            if (!loading) {
                //派发一个action,把状态改为加载中
                dispatch({
                    type: types.FETCH_LESSONS
                });
                dispatch({
                    type: types.FETCH_LESSONS_REFRESH,
                    payload: fetchLesson()
                })
            }

        }
    },
    getLessonPrefer(){
        return dispatch => {
            fetchLessonPrefer().then(value => {
                dispatch({
                    type: types.FETCH_LESSON_PREFER,
                    payload: value
                })
            })
        }
    }
}
