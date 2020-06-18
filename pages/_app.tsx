import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store/store';
import { createWrapper } from 'next-redux-wrapper';

const MyApp = ({ Component, pageProps }: any) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
};

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
