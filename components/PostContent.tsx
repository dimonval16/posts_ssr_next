import React, { FC, useState, ChangeEvent } from 'react';
import { IPostPageData } from '../interfaces/interfaces';
import styled from 'styled-components';
import CommentsBlock from './Comments';

const PostContent: FC<IPostPageData> = ({
    title,
    body,
    id,
    comments,
    onSetNewContent,
    onAddNewComment
}: IPostPageData) => {
    const [isEdit, setIsEdit] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newDesc, setNewDesc] = useState('');

    const handleDescChange = (e: ChangeEvent<HTMLInputElement>) => {
        const desc = e.target.value;

        setNewDesc(desc);
    };

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value;

        setNewTitle(title);
    };

    const handleClick = () => {
        if (!isEdit) {
            setIsEdit(true);
        } else {
            const sendTitle = newTitle ? newTitle : title;
            const sendDesc = newDesc ? newDesc : body;

            onSetNewContent(sendTitle, sendDesc, id);
            setIsEdit(false);
            setNewTitle('');
            setNewDesc('');
        }
    };

    return (
        <PostWrapper>
            <EditButton onClick={handleClick}>{isEdit ? 'Save...' : 'Edit...'}</EditButton>
            {isEdit ? (
                <>
                    <EditWrapper>
                        <EditInput defaultValue={title} onChange={handleTitleChange} />
                        <EditInput defaultValue={body} onChange={handleDescChange} />
                    </EditWrapper>
                </>
            ) : (
                <>
                    <StyledTitle>{title}</StyledTitle>
                    <StyledBody>{body}</StyledBody>
                </>
            )}
            <CommentsWrapper>
                <CommentsBlock
                    comments={comments}
                    postId={id}
                    onAddNewComment={onAddNewComment}
                />
            </CommentsWrapper>
        </PostWrapper>
    );
};

const EditInput = styled.input`
    height: 40px;
    border: none;
    border-bottom: 2px solid #333;
    border-radius: 0;
    outline: none;
    font-size: 1.1rem;
    margin-bottom: 30px;
    &:focus {
        border-bottom: 2px solid #195ecf;
    }
`;

const EditWrapper = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
`;

const EditButton = styled.button`
    position: fixed;
    top: 90px;
    right: 5%;
    padding: 10px;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.3);
    background-color: #195ecf;
    color: white;
    outline: none;
    font-size: 1rem;
    text-transform: uppercase;
`;

const CommentsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    margin-top: 50px;
`;

const StyledBody = styled.div`
    width: 95%;
    margin-top: 40px;
    font-size: 1.3rem;
`;

const StyledTitle = styled.div`
    font-size: 2rem;
    font-weight: bold;
`;

const PostWrapper = styled.div`
    margin-top: 120px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export default PostContent;
