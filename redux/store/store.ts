import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer/main';
import initialState from '../state/state';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

/*const makeStore = (initialState: any) => {
    return createStore(reducer, initialState, applyMiddleware(thunk));
};*/

export default store;
