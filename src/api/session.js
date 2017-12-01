import {post, get} from './index';


//注册
export function register(data) {
    return post('/register', data);
}

//登录
export function login(data) {
    return post('/login', data);
}

export function validate() {
    return get('/validate');
}

export function signout() {
    console.log('/signout');
    return get('/signout');
}
export function getCollections(data) {
    return post('/getCollections',data);
}