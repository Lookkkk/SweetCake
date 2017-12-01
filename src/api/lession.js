import {get} from './index';
export function fetchLesson(){
    return get('/lesson');
}


export function fetchLessonPrefer(){
    return get('/lessonPrefer')
}
