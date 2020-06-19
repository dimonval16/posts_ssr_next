import React, { FC } from 'react';
import styled from 'styled-components';

const MyButton: FC = () => {
    return <StyledButton>Create</StyledButton>;
};

const StyledButton = styled.button`
    background-color: #195ecf;
    border: none;
    border-radius: 5px;
    width: 50%;
    max-width: 600px;
    height: 50px;
    color white;
    text-transform: uppercase;
    outline: none;
    cursor: pointer;
    margin-top: 30px;
    @media (max-width: 700px) {
        width: 96%;
        height: 70px;
        font-size: 1.1rem;
    }
`;

export default MyButton;
