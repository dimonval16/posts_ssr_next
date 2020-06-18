export interface IOnePost {
    title: string;
    body: string;
    id: number;
}

export interface IAllPosts {
    data: Array<IOnePost>;
    getAllPosts?: () => void;
}

export interface IHeaderProps {
    title: string;
    link?: string;
    href: string;
}

export interface IInput {
    title: string;
}
