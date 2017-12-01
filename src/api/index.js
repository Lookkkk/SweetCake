const HOST = 'http://localhost:3000';
const FOOD = 'http://120.77.17.44';


export function get (url) {
    //浏览器原生支持fetch方法，它的用法类似于 $.ajax
    return fetch(HOST + url, {
        method: 'GET',//请求的方法名
        //客户跨域请求服务器的要携带cookie
        credentials: "include",
        headers: {//请求头
            //需要服务器返回JSON格式的数据
            "Accept": "application/json"
        }
        //res是一个响应对象，调用json方法可获取JSON格式的响应体
    }).then(res =>(res.json()));
}
export function post(url, data) {
    //console.log(data);
    return fetch(HOST + url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            "Accept": 'application/json',
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)

    }).then(res => res.json());
}
export function postFood(url,data) {
    return fetch(FOOD + url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            "Accept": 'application/json',
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }).then(res => res.json());
}