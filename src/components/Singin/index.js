import React from 'react'

import { 
    Container,
    FormWrap,
    Icon,
    Form, 
    Formh1,
    FormLabel,
    FormInput,
    FormButton,
    TextForgot
} from './SignInElements'

const SignIn = () => {
    return (
        <Container>
            <Icon to="/">FillBank</Icon>
            <FormWrap>
                <Form>
                    <Formh1>Sign In Your Account</Formh1>
                    <FormLabel>Email</FormLabel>
                    <FormInput type="email" required />
                    <FormLabel>Password</FormLabel>
                    <FormInput type="password" required />
                    <FormButton type="submit">Continue</FormButton>
                    <TextForgot to="/">Forgot Password ?</TextForgot>
                </Form>
            </FormWrap>
        </Container>
    )
}

export default SignIn
