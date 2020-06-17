import React, { FC } from 'react';
import { IAllPosts, IOnePost } from '../interfaces/interfaces';
import styled from 'styled-components';

const AllPosts: FC<IAllPosts> = ({ data }: IAllPosts) => {
    return (
        <PostsWrapper>
            {data.map((e: IOnePost) => (
                <PostWrapper key={e.id}>
                    <PostTitle>{e.title}</PostTitle>
                    <PostText>{e.body}</PostText>
                </PostWrapper>
            ))}
        </PostsWrapper>
    );
};

const PostText = styled.div`
    margin-top: 10px;
    color: #616161;
`;

const PostTitle = styled.div`
    font-size: 1.3rem;
    font-weight: bold;
`;

const PostsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 120px;
    @media (max-width: 700px) {
        flex-direction: column;
        align-items: center;
        margin-top: 90px;
    }
`;

const PostWrapper = styled.div`
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);
    padding: 30px;
    margin: 0 15px 30px 15px;
    width: 30%;
    cursor: pointer;
    max-height: 250px;
    overflow-y: auto;
    @media (max-width: 700px) {
        width: 80%;
        margin: 0 0 30px 0;
    }
`;

export default AllPosts;
