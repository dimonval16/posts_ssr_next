import React, { FC } from 'react';
import styled from 'styled-components';
import { IHeaderProps } from '../interfaces/interfaces';
import Link from 'next/link';

const Header: FC<IHeaderProps> = ({ title, link, href }: IHeaderProps) => {
    return (
        <StyledHeader>
            <StyledTitle>{title}</StyledTitle>
            <Link href={href}>
                <StyledCreateLink>{link}</StyledCreateLink>
            </Link>
        </StyledHeader>
    );
};

const StyledCreateLink = styled.a`
    margin-right: 5%;
    cursor: pointer;
`;

const StyledHeader = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    background-color: #333;
    color: white;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledTitle = styled.span`
    font-size: 1.8rem;
    font-weight: bold;
    margin-left: 5%;
`;

export default Header;
