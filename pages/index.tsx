import React, { FC } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { GET_ALL_POSTS } from '../fetching_data/fetchingUrls';
import axios, { AxiosResponse } from 'axios';
import { IAllPosts } from '../interfaces/interfaces';
import Header from '../components/Header';
import AllPosts from '../components/AllPosts';

const IndexPage: FC<IAllPosts> = ({ data }: IAllPosts) => {
    return (
        <div>
            <Head>
                <title>Posts Page</title>
            </Head>

            <main>
                <Header title={'My Posts'} link={'New Post'} href={'/posts/new'} />
                <AllPosts data={data} />
            </main>
            <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
                        Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                    color: #333;
                }
            `}</style>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const data = await axios.get(GET_ALL_POSTS).then((res: AxiosResponse) => res.data);

    return {
        props: {
            data,
        },
    };
};

export default IndexPage;
