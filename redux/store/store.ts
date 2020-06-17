import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer/main';
import initialState from '../state/state';

const store = createStore(reducer, initialState, applyMiddleware(thunk));

/*const makeStore = (initialState: any) => {
    return createStore(reducer, initialState, applyMiddleware(thunk));
};*/

export default store;
