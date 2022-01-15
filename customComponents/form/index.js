import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const CustomInput = (props) => {

    return (
        <Margin margin={props.margin} className={props.label}>
            <Text size="14px" height="17px" color="#BEC2C9" dangerouslySetInnerHTML={{ __html: props.label }} />
            <Margin margin={0.5} />
            <StyledInput type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
        </Margin>
    )

}

export default function Form() {
    const [values, setValues] = useState({ firstName: '', lastName: '', email: '' })
    const [select, setSelect] = useState("card");

    const handleSelectChange = event => {
        const value = event.target.value;
        setSelect(value);
    };

    return (
        <Container>
            <ContainerForm>
                <Text weight='bold' dangerouslySetInnerHTML={{ __html: 'Your info' }} />
                <Margin margin={2} />
                <CustomInput label='Name' placeholder='Enter your name' margin={2.5} type="text" value={values.firstName} onChange={(e) => setValues({ ...values, firstName: e.target.value })} />
                <CustomInput label='Last name' placeholder='Enter your last name' margin={2.5} type="text" value={values.lastName} onChange={(e) => setValues({ ...values, lastName: e.target.value })} />
                <CustomInput label='Email' placeholder='Enter your email' margin={4} type="email" value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} />

                <Text weight='bold' dangerouslySetInnerHTML={{ __html: 'Select payment' }} />
                <Item>
                    <RadioButton
                        type="radio"
                        name="radio"
                        value="card"
                        checked={select === "card"}
                        onChange={event => handleSelectChange(event)}
                    />
                    <RadioButtonLabel />
                    <Text weight='bold' dangerouslySetInnerHTML={{ __html: 'Custom card component' }} />
                </Item>
                <Item>
                    <RadioButton
                        type="radio"
                        name="radio"
                        value="paypal"
                        checked={select === "paypal"}
                        onChange={event => handleSelectChange(event)}
                    />
                    <RadioButtonLabel />
                    <Text weight='bold' dangerouslySetInnerHTML={{ __html: 'Paypal' }} />
                </Item>
                <Text size='12px' height='20px' color='#999CA0' dangerouslySetInnerHTML={{ __html: 'By pledging, you agree with Lynq <a>Terms of Use, Privacy Policy</a> and <a>Cookie Policy</a>' }} />
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
    max-width: 100%;
    width: 345px;
`;
const Text = styled.div`
    font-size: ${props => props.size || "18px"};
    line-height: ${props => props.height || "22px"};
    color: ${props => props.color || "#FFFFFF"};
    font-weight: ${props => props.weight || "normal"};
    font-family: 'Inter', sans-serif;
    a{
        color: #BEC2C9;
        :hover{
            cursor: pointer;
        }
    }
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
    font-family: 'Inter', sans-serif;
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
const Item = styled.div`
    display: flex;
    align-items: center;
    height: 48px;
    position: relative;
    box-sizing: border-box;
    margin-bottom: 26px;
`;
const RadioButtonLabel = styled.label`
    position: absolute;
    top: 25%;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid #393B3F;
    box-sizing: border-box;
    transition: all 0.4s ease-in-out;
    color: #fff;
`;
const RadioButton = styled.input`
    opacity: 0;
    z-index: 1;
    cursor: pointer;
    width: 24px;
    height: 24px;
    margin-right: 10px;
    transition: all 0.4s ease-in-out;
     &:hover ~ ${RadioButtonLabel} {
        background: transparent;
        transition: all 0.4s ease-in-out;
        &::after {
            content: "";
            display: block;
            border-radius: 50%;
            width: 14px;
            height: 14px;
            margin: 4px;
            background-color: #4CC9F0;
            transition: all 0.4s ease-in-out;
        }
    }
    &:checked + ${RadioButtonLabel} {
        &::after {
            content: "";
            display: block;
            border-radius: 50%;
            width: 14px;
            height: 14px;
            margin: 4px;
            background-color: #4CC9F0;
        }
    }
`;