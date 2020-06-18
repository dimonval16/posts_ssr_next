import { RETRIEVE_A_POST, SET_NEW_PAGE_CONTENT, ADD_NEW_COMMENT } from '../actions/mainActions';

const reducer = (state: any = {}, action: any) => {
    switch (action.type) {
        case ADD_NEW_COMMENT:
            return {
                ...state,
                updateWithComments: !state.updateWithComments,
            };

        case SET_NEW_PAGE_CONTENT:
            return {
                ...state,
                title: action.post.title,
                body: action.post.body,
            };

        case RETRIEVE_A_POST:
            return {
                ...state,
                title: action.post.title,
                body: action.post.body,
                id: action.post.id,
                comments: action.post.comments,
                isPageFull: true,
            };

        default:
            return { ...state };
    }
};

export default reducer;
