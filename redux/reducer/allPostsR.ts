import { GET_ALL_POSTS, DELETE_POST } from '../actions/mainActions';

const reducer = (state: any = {}, action: any) => {
    switch (action.type) {
        case DELETE_POST:
            return {
                ...state,
                deleted: !state.deleted,
            };

        case GET_ALL_POSTS:
            return {
                ...state,
                data: action.data,
            };

        default:
            return { ...state };
    }
};

export default reducer;
