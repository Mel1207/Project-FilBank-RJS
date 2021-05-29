import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    background: #0db9a1;
    height: 100vh;
    width: 100%;
    position: relative;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Icon = styled(Link)`
    font-size: 40px;
    color: #fff;
    font-weight: bold;
    padding-bottom: 30px;
    cursor: pointer;
    text-decoration: none;

`

export const FormWrap = styled.div`
    background: #010106;
    height: auto;
    padding: 50px 20px;
    border-radius: 10px;
    max-width: 350px;
`

export const Form = styled.form`
    width: 300px;
    height: auto;
`

export const Formh1 = styled.h1`
    color: #fff;
    font-size: 20px;
    text-align: center;
    margin-bottom: 50px;
`

export const FormLabel = styled.p`
    font-size: 15px;
    color: #fff;
    margin-bottom: 10px;
`

export const FormInput = styled.input`
    width: 100%;
    background: #fff;
    border-radius: 2px;
    margin-bottom: 20px;
    height: 40px;
    outline: none;
    border: none;
`

export const FormButton = styled.button`
    color: #fff;
    border-radius: 2px;
    width: 100%;
    height: 40px;
    background: #0db9a1;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 15px;
`

export const TextForgot = styled.p`
    color: #1f9bf3;
    margin-top: 20px;
    text-align: right;
    cursor: pointer;
    font-size: 15px;
`

