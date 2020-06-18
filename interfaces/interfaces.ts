export interface IOnePost {
    title: string;
    body: string;
    id: number;
}

export interface IAllPosts {
    data: Array<IOnePost>;
    update?: boolean;
    getAllPosts?: () => void;
    onPostDelete: (id: string | number) => void;
    deleted?: boolean;
}

export interface IHeaderProps {
    title: string;
    link?: string;
    href: string;
}

export interface IInput {
    title: string;
    value: string;
    onInputChange: (value: string) => void;
}

export interface INewPostPage {
    title: string;
    description: string;
    update?: boolean;
    onTitleChange: (value: string) => void;
    onDescriptionChange: (value: string) => void;
    onAddNewPost: (title: string, description: string, update: undefined | boolean) => void;
}

export interface IInputAction {
    type: string;
    value?: string;
}

export interface IPostPageData {
    title: string;
    body: string;
    id: string | number;
    comments: Array<any>;
    isPageFull: boolean;
    updateWithComments?: boolean;
    onSetNewContent: (newTitle: string, newDesc: string, id: number | string) => void;
    onAddNewComment: (postId: string | number, comment: string) => void;
}

export interface IPostPage {
    getPostInfo: (postId: string | string[] | undefined) => void;
    postPage: IPostPageData;
    onSetNewContent: (newTitle: string, newDesc: string, id: number | string) => void;
    onAddNewComment: (postId: string | number, comment: string) => void;
}

export interface IComments {
    comments: Array<any>;
    postId: number | string;
    onAddNewComment: (postId: string | number, comment: string) => void;
}
