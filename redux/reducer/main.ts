import { combineReducers } from 'redux';
import createPost from './createPostR';

const reducer = combineReducers({
    createPost,
});

export default reducer;
