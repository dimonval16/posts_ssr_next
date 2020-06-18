const state = {
    createPost: {
        title: '',
        description: '',
        update: false,
    },
    allPosts: {
        data: [],
        deleted: false,
    },
    postPage: {
        isPageFull: false,
        title: '',
        body: '',
        id: '',
        comments: [],
        updateWithComments: false,
    },
};

export default state;
