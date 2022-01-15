import React from 'react'
import styled from 'styled-components'

export default function Header() {
    return (
        <Container>
            <Icon />
            <Name>
                Ben Burns
            </Name>
            <DivNavigation>
                <Text color='#393B3F' dangerouslySetInnerHTML={{ __html: 'Select date & time' }} />
                <IconArrow src='./static/img/arrow.svg' />
                <Text dangerouslySetInnerHTML={{ __html: 'Payment' }} />
            </DivNavigation>
        </Container>
    )
}

const Container = styled.div`
    background: #101011;
    padding: 50px 0 24px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
`;
const Icon = styled.div`
    width: 70px;
    height: 70px;
    background: #38383D;
    border-radius: 20px;
    margin-bottom: 12px;
    border: 3.5px solid #191919;
    box-sizing: border-box;
`;
const Name = styled.div`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 24px;
`;
const DivNavigation = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
`;
const Text = styled.div`
    color: ${props => props.color || "#BEC2C9"};
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
`;
const IconArrow = styled.img`
    max-width: 15px;
    margin: 0 12px;
`;