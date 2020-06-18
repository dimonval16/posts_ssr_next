import React, { ChangeEvent, FC, useState } from 'react';
import { IComments } from '../interfaces/interfaces';
import styled from 'styled-components';

const CommentsBlock: FC<IComments> = ({ comments, postId, onAddNewComment }: IComments) => {
    const [newComment, setNewComment] = useState('');

    const handleButtonClick = () => {
        if (newComment) {
            onAddNewComment(postId, newComment);
            setNewComment('');
        }
    };

    const handleCommentInput = (e: ChangeEvent<HTMLInputElement>) => {
        setNewComment(e.target.value);
    };

    return (
        <>
            <CommentsTitle>Comments:</CommentsTitle>
            <CommentForm onSubmit={(e) => e.preventDefault()}>
                <CommentInput
                    defaultValue={newComment}
                    placeholder={'Add new comment...'}
                    onChange={handleCommentInput}
                />
                <CommentButton onClick={handleButtonClick}>ADD</CommentButton>
            </CommentForm>
            <CommentsList>
                {comments.length > 0
                    ? comments.map((i) => (
                          <OneComment key={i.id}>
                              <CommentText>{i.body}</CommentText>
                          </OneComment>
                      ))
                    : null}
            </CommentsList>
        </>
    );
};

const CommentButton = styled.div`
    padding: 10px;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    background-color: #195ecf;
    color: white;
    outline: none;
    font-size: 1rem;
`;

const CommentForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const CommentInput = styled.input`
    margin-top: 10px;
    height: 60px;
    padding-left: 20px;
    border: none;
    border-radius: 0;
    border-bottom: 2px solid black;
    outline: none;
    font-size: 1rem;
    flex-grow: 1;
    margin-right: 10px;
`;

const CommentText = styled.span`
    align-self: center;
`;

const OneComment = styled.div`
    height: 60px;
    background: #e6e6e6;
    margin-bottom: 20px;
    border-radius: 10px;
    padding-left: 30px;
    display: flex;
`;

const CommentsTitle = styled.div`
    font-weight: bold;
`;

const CommentsList = styled.div`
    margin-top: 20px;
`;

export default CommentsBlock;
