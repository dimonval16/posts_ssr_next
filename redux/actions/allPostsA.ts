import axios, { AxiosResponse } from 'axios';
import { GET_ALL_POSTS_URL, ADD_NEW_POST_URL, DELETE_POST_URL } from '../../fetching_data/fetchingUrls';
import { Dispatch } from 'redux';

export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const CREATE_NEW_POST = 'CREATE_NEW_POST';
export const DELETE_POST = 'DELETE_POST';

export const deletePostAC = (id: string | number) => (dispatch: Dispatch) => {
    axios
        .delete(`${DELETE_POST_URL}/${id}`)
        .then((res: AxiosResponse) => {
            return dispatch({
                type: DELETE_POST,
            });
        })
        .catch((error) => console.log(error));
};

export const addNewPostAC = (title: string, description: string, update: boolean) => (dispatch: Dispatch) => {
    axios
        .post(ADD_NEW_POST_URL, { title, body: description })
        .then((res: AxiosResponse) => {
            return dispatch({
                type: CREATE_NEW_POST,
                newPost: res.data,
                update,
            });
        })
        .catch((error) => console.log(error));
};

export const fetchAllPosts = () => (dispatch: Dispatch) => {
    axios
        .get(GET_ALL_POSTS_URL)
        .then((res: AxiosResponse) => {
            return dispatch({
                type: GET_ALL_POSTS,
                data: res.data,
            });
        })
        .catch((error) => console.log(error));
};
