import axios, { AxiosResponse } from 'axios';
import { GET_ALL_POSTS_URL } from '../../fetching_data/fetchingUrls';
import { Dispatch } from 'redux';

export const GET_ALL_POSTS = 'GET_ALL_POSTS';

export const fetchAllPosts = () => (dispatch: Dispatch): void => {
    axios.get(GET_ALL_POSTS_URL).then((res: AxiosResponse) => {
        return dispatch({
            type: GET_ALL_POSTS,
            data: res.data,
        });
    });
};
