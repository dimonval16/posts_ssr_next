import { GET_ALL_POSTS } from '../actions/mainActions';

const reducer = (state = {}, action: any) => {
    switch (action.type) {
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
