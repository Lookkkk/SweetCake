import {post} from './index';
export function getOthers(data){
    return post('/getOthers',data);
}