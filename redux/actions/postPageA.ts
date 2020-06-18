import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { RETRIEVE_A_POST_URL, UPDATE_A_POST_URL, ADD_NEW_COMMENT_URL } from '../../fetching_data/fetchingUrls';

export const RETRIEVE_A_POST = 'RETRIEVE_A_POST';
export const SET_NEW_PAGE_CONTENT = 'SET_NEW_PAGE_CONTENT';
export const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT';

export const addNewCommentAC = (postId: string | number, comment: string) => (dispatch: Dispatch) => {
    axios
        .post(ADD_NEW_COMMENT_URL, { postId, body: comment })
        .then((res: AxiosResponse) => {
            return dispatch({
                type: ADD_NEW_COMMENT,
                data: res.data,
            });
        })
        .catch((error) => console.log(error));
};

export const setNewPageContentAC = (newTitle: string, newDesc: string, id: number | string) => (dispatch: Dispatch) => {
    axios
        .put(`${UPDATE_A_POST_URL}/${id}`, { title: newTitle, body: newDesc })
        .then((res: AxiosResponse) => {
            return dispatch({
                type: SET_NEW_PAGE_CONTENT,
                post: res.data,
            });
        })
        .catch((error) => console.log(error));
};

export const retrievePostAC = (postId: string) => (dispatch: Dispatch) => {
    axios
        .get(`${RETRIEVE_A_POST_URL}/${postId}?_embed=comments`)
        .then((res: AxiosResponse) => {
            return dispatch({
                type: RETRIEVE_A_POST,
                post: res.data,
            });
        })
        .catch((error) => console.log(error));
};
