import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { IPostPage } from '../../interfaces/interfaces';
import { retrievePostAC, setNewPageContentAC, addNewCommentAC } from '../../redux/actions/mainActions';
import Header from '../../components/Header';
import PostContent from '../../components/PostContent';

const Post: FC<IPostPage> = ({ getPostInfo, postPage, onSetNewContent, onAddNewComment }: IPostPage) => {
    const router = useRouter();
    const postId = router.query.post;
    const updateNewComment = postPage.updateWithComments;

    useEffect(() => {
        if (postId) getPostInfo(postId);
    }, [postId, updateNewComment]);

    return (
        <div>
            <Header title={'Post'} link={'Go Back'} href={'/'} />
            <PostContent
                title={postPage.title}
                id={postPage.id}
                body={postPage.body}
                comments={postPage.comments}
                isPageFull={postPage.isPageFull}
                onSetNewContent={onSetNewContent}
                onAddNewComment={onAddNewComment}
            />
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
    postPage: state.postPage,
});

const mapDispatchToProps = (dispatch: any) => ({
    getPostInfo: (postId: string) => dispatch(retrievePostAC(postId)),
    onSetNewContent: (newTitle: string, newDesc: string, id: number | string) =>
        dispatch(setNewPageContentAC(newTitle, newDesc, id)),
    onAddNewComment: (postId: string | number, comment: string) => dispatch(addNewCommentAC(postId, comment)),
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Post);
