import React, { FunctionComponent } from 'react';
import { AppProps } from 'next/app';

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default MyApp;
