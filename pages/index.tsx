import React, { FC, useEffect } from 'react';
import Head from 'next/head';
import { IAllPosts } from '../interfaces/interfaces';
import Header from '../components/Header';
import AllPosts from '../components/AllPosts';
import { connect } from 'react-redux';
import { fetchAllPosts, deletePostAC } from '../redux/actions/mainActions';

const IndexPage: FC<IAllPosts> = ({ data, getAllPosts, update, onPostDelete, deleted }: IAllPosts) => {
    useEffect(() => {
        if (getAllPosts) getAllPosts();
    }, [update, deleted]);

    return (
        <div>
            <Head>
                <title>Posts Page</title>
            </Head>
            <main>
                <Header title={'My Posts'} link={'New Post'} href={'/posts/new'} />
                <AllPosts data={data} onPostDelete={onPostDelete} />
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
    update: state.createPost.update,
    deleted: state.allPosts.deleted,
});

const mapDispatchToProps = (dispatch: any) => ({
    getAllPosts: () => dispatch(fetchAllPosts()),
    onPostDelete: (id: string | number) => dispatch(deletePostAC(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
