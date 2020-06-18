import React, { FC, useEffect } from 'react';
import Head from 'next/head';
import { IAllPosts } from '../interfaces/interfaces';
import Header from '../components/Header';
import AllPosts from '../components/AllPosts';
import { connect } from 'react-redux';
import { fetchAllPosts } from '../redux/actions/mainActions';

const IndexPage: FC<IAllPosts> = ({ data, getAllPosts }: IAllPosts) => {
    useEffect(() => {
        if (getAllPosts) getAllPosts();
    }, []);

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

const mapStateToProps = (state: any) => ({
    data: state.allPosts.data,
});

const mapDispatchToProps = (dispatch: any) => ({
    getAllPosts: () => dispatch(fetchAllPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
