import React from 'react'
import styled from 'styled-components'

export default function Footer() {
    return (
        <Container>
            <Button>
                Pay $75
            </Button>
        </Container>
    )
}

const Container = styled.div`
    background: #101011;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.75);
    padding: 25px 0;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Button = styled.div`
    background: #4CC9F0;
    border-radius: 100px;
    width: 280px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #1A1B1C;
    :hover{
        cursor: pointer;
    }
`;