import React from 'react'
import styled from 'styled-components'

export default function Header() {
    return (
        <Container>
            <Icon />
            <Name>
                Ben Burns
            </Name>
        </Container>
    )
}

const Container = styled.div`
    background: #101011;
    padding: 50px 0 24px;
    width: 100%;
    box-sizing: border-box;
`;
const Icon = styled.div`
    width: 63px;
    height: 63px;
    background: #38383D;
    border-radius: 20px;
    margin-bottom: 12px;
`;
const Name = styled.div`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #FFFFFF;
`;