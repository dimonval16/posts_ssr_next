import React, { FC, FormEvent } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Input from '../../components/Input';
import MyButton from '../../components/MyButton';
import { INewPostPage } from '../../interfaces/interfaces';
import { changeTitleAC, changeDescriptionAC, addNewPostAC } from '../../redux/actions/mainActions';

const NewPostPage: FC<INewPostPage> = ({
    title,
    description,
    update,
    onTitleChange,
    onDescriptionChange,
    onAddNewPost,
}: INewPostPage) => {
    const router = useRouter();

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (title && description) {
            onAddNewPost(title, description, update);
            router.push('/');
        }
    };

    return (
        <div>
            <Head>
                <title>Create Post</title>
            </Head>
            <main>
                <Header title={'Create Post'} link={'Go Back'} href={'/'} />
                <ContentBlock>
                    <ContentTitle>Field this form for creating new post:</ContentTitle>
                    <StyledForm onSubmit={handleFormSubmit}>
                        <Input title={'Title'} value={title} onInputChange={onTitleChange} />
                        <Input title={'Description'} value={description} onInputChange={onDescriptionChange} />
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

const mapStateToProps = (state: any) => ({
    title: state.createPost.title,
    description: state.createPost.description,
    update: state.createPost.update,
});

const mapDispatchToProps = (dispatch: any) => ({
    onTitleChange: (value: string) => dispatch(changeTitleAC(value)),
    onDescriptionChange: (value: string) => dispatch(changeDescriptionAC(value)),
    onAddNewPost: (title: string, description: string, update: boolean) =>
        dispatch(addNewPostAC(title, description, update)),
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(NewPostPage);
