import React, { FC } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Header from '../../components/Header';
import Input from '../../components/Input';
import MyButton from '../../components/MyButton';

const NewPostPage: FC = () => {
    return (
        <div>
            <Head>
                <title>Create Post</title>
            </Head>
            <main>
                <Header title={'Create Post'} link={'Go Back'} href={'/'} />
                <ContentBlock>
                    <ContentTitle>Field this form for creating new post:</ContentTitle>
                    <StyledForm>
                        <Input title={'Title'} />
                        <Input title={'Description'} />
                        <MyButton />
                    </StyledForm>
                </ContentBlock>
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

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

const ContentTitle = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
`;

const ContentBlock = styled.div`
    margin-top: 90px;
    margin-left: 5%;
    margin-right: 5%;
`;

export default NewPostPage;
