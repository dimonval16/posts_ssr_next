import React, { FC } from 'react';
import { IInput } from '../interfaces/interfaces';
import styled from 'styled-components';

const Input: FC<IInput> = ({ title }: IInput) => {
    return (
        <StyledLabel>
            <StyledTitle>{title}</StyledTitle>
            <StyledInput id={'title'} type={'text'} />
        </StyledLabel>
    );
};

const StyledTitle = styled.div`
    font-size: 1.1rem;
`;

const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 2px solid #333;
    border-radius: 0;
    outline: none;
    font-size: 1.1rem;
    @media (max-width: 700px) {
        width: 95%;
    }
    &:focus {
        border-bottom: 2px solid #195ecf;
    }
`;

const StyledLabel = styled.label`
    margin: 15px 0;
`;

export default Input;
