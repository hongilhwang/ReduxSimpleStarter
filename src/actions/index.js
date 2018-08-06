import axios from 'axios';
import {SubmissionError} from "redux-form";

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=alsdjflasdjkflakjsdfl';

export function fetchPosts(){

    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return request;
}

export function createPost(props){

    if( !props.title ){

        throw new SubmissionError({
            title: 'Enter a username.',
            _error: 'Submit Failed'
        });
    }

    if( !props.categories ){
        throw new SubmissionError({
            categories: 'Enter a categories.',
            _error: 'Submit Failed'
        });
    }

    if( !props.content ){
        throw new SubmissionError({
            content: 'Enter a content.',
            _error: 'Submit Failed'
        });
    }



    const request = axios.post( `${ROOT_URL}/posts${API_KEY}`, props);

    return {
        type: CREATE_POST,
        payload: request
    };
}


export function fetchPost( id ){
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    }
}

export function deletePost(id){
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: DELETE_POST,
        payload: request
    }
}