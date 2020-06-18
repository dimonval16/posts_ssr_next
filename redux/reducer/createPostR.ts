import { CHANGE_TITLE_INPUT, CHANGE_DESCRIPTION_INPUT, CREATE_NEW_POST } from '../actions/mainActions';

const reducer = (state = {}, action: any) => {
    switch (action.type) {
        case CHANGE_TITLE_INPUT:
            return {
                ...state,
                title: action.value,
            };

        case CHANGE_DESCRIPTION_INPUT:
            return {
                ...state,
                description: action.value,
            };

        case CREATE_NEW_POST:
            return {
                ...state,
                title: '',
                description: '',
                update: !action.update,
            };

        default:
            return { ...state };
    }
};

export default reducer;
