import * as types from '../action-types';
import {getOthers} from '../../api/getOthers';

export default {
    getOthers(data) {//获取其他用户的信息
        return dispatch => {
            getOthers(data).then( payload=> {
                console.log(payload,'获取到其他用户的信息');
                dispatch({
                    type: types.GET_OTHERS,
                    payload
                });
            });
        }
    },
}