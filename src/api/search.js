import {post, get, postFood} from './index';


export function getFood(index) {
    return get(`/star?index=${index}`);
}

export function getSearch() {
    return get(`/search`);
}

export function searchFood(data) {
    return post(`/search`, data);
}
export function searchIndex(index) {
    return post('/searchIndex',index)
}


//'/api/v1/search_one_by_level'
//get  //post