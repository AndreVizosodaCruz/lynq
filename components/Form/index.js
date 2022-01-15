import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const CustomInput = (props) => {

    return (
        <Margin margin={props.margin}>
            <Text size="14px" height="17px" color="#BEC2C9" dangerouslySetInnerHTML={{ __html: props.label }} />
            <Margin margin={0.5} />
            <StyledInput type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
        </Margin>
    )

}

export default function Form() {

    const [values, setValues] = useState({ firstName: '', lastName: '', email: '' })
    return (
        <Container>
            <ContainerForm>
                <Text dangerouslySetInnerHTML={{ __html: 'Your info' }} />
                <Margin margin={2} />
                <CustomInput label='Name' placeholder='Enter your name' margin={2.5} type="text" value={values.firstName} onChange={(e) => setValues({ ...values, firstName: e.target.value })} />
                <CustomInput label='Last name' placeholder='Enter your last name' margin={2.5} type="text" value={values.lastName} onChange={(e) => setValues({ ...values, lastName: e.target.value })} />
                <CustomInput label='Email' placeholder='Enter your email' margin={2.5} type="email" value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} />
            </ContainerForm>
        </Container>
    )
}

const Margin = styled.div`
    margin-bottom: ${({ margin }) => margin ? margin * 8 : 8}px;
`;
const Container = styled.div`
    flex: 1;
    width: 100%;
    box-sizing: border-box;
    padding: 24px 0;
    box-sizing: border-box;
    overflow-y: auto;
    display: flex;
    flex-flow: column;
    align-items: center;
`;
const ContainerForm = styled.div`
    display: flex;
    flex-flow: column;
`;
const Text = styled.div`
    font-size: ${props => props.size || "18px"};
    line-height: ${props => props.height || "22px"};
    color: ${props => props.color || "#FFFFFF"};
    font-weight: ${props => props.weight || "normal"};
`;
const StyledInput = styled.input`
    width: 345px;
    height: 50px;
    background: #393B3F;
    border: 1px solid #393B3F;
    outline: none;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 16px;
    box-sizing: border-box;
    transition: all 0.4s ease-in-out;
    ::placeholder{
        font-size: 16px;
        line-height: 19px;
        color: #999CA0;
    }
    :focus{
        background: #FFFFFF;
        border: 1px solid #4CC9F0;
        box-sizing: border-box;
        box-shadow: 0px 0px 20px rgba(76, 201, 240, 0.3);
    }
    ${({ value }) => value !== '' && css`
        background: #BEC2C9;
        border: 1px solid #393B3F;
        box-sizing: border-box;
        border-radius: 5px;
    `}
`;