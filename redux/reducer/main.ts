import { combineReducers } from 'redux';
import createPost from './createPostR';
import allPosts from './allPostsR';

const reducer = combineReducers({
    createPost,
    allPosts,
});

export default reducer;
