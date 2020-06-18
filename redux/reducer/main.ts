import { combineReducers } from 'redux';
import createPost from './createPostR';
import allPosts from './allPostsR';
import postPage from './postPageR';

const reducer = combineReducers({
    createPost,
    allPosts,
    postPage,
});

export default reducer;
