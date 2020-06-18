import React, { FC } from 'react';
import { IAllPosts, IOnePost } from '../interfaces/interfaces';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const AllPosts: FC<IAllPosts> = ({ data, onPostDelete }: IAllPosts) => {
    const router = useRouter();

    const handlePostClick = (id: number) => {
        router.push('/posts/[post]', `/posts/${id}`);
    };

    return (
        <PostsWrapper>
            {data.map((e: IOnePost) => (
                <PostWrapper key={e.id}>
                    <div onClick={() => handlePostClick(e.id)}>
                        <PostTitle>{e.title}</PostTitle>
                        <PostText>{e.body}</PostText>
                    </div>
                    <DeleteButton onClick={() => onPostDelete(e.id)}>Delete</DeleteButton>
                </PostWrapper>
            ))}
        </PostsWrapper>
    );
};

const DeleteButton = styled.div`
    background: #195ecf;
    color: white;
    text-transform: uppercase;
    padding: 5px;
    align-self: flex-end;
    border-radius: 10px;
    margin-top: 20px;
    cursor: pointer;
`;

const PostText = styled.div`
    margin-top: 10px;
    color: #616161;
    cursor: pointer;
`;

const PostTitle = styled.div`
    font-size: 1.3rem;
    font-weight: bold;
    cursor: pointer;
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
    max-height: 250px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 700px) {
        width: 80%;
        margin: 0 0 30px 0;
    }
`;

export default AllPosts;
