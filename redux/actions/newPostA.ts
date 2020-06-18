import { IInputAction } from '../../interfaces/interfaces';

export const CHANGE_TITLE_INPUT = 'CHANGE_TITLE_INPUT';
export const CHANGE_DESCRIPTION_INPUT = 'CHANGE_DESCRIPTION_INPUT';

export const changeTitleAC = (value: string): IInputAction => {
    return {
        type: CHANGE_TITLE_INPUT,
        value,
    };
};

export const changeDescriptionAC = (value: string): IInputAction => {
    return {
        type: CHANGE_DESCRIPTION_INPUT,
        value,
    };
};
