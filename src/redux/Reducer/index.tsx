
import React from "react";
interface IEmailValidationState{
    emailError:string;
    passError:string;
    loginField:string;
    passwordField:string;
}

const EmailValidationInitialState:IEmailValidationState = {
    emailError: '',
    passError:'',
    loginField:'',
    passwordField:'',
}


type ErrorAction = { type: 'EMAIL_ERROR'} | 
                    { type: 'EMAIL_SUCCESS'} | 
                    { type: 'PASS_ERROR'} | 
                    { type: 'PASS_SUCCESS'}|
                    { type: 'LOGIN',
                        payload: {
                        email:string,
                      }}|  
                    { type: 'PASSWORD',
                        payload: {
                        password:string,
                      }};

const ValidationReducer = (state:IEmailValidationState = EmailValidationInitialState, action:ErrorAction)=>{
    switch (action.type) {
        case 'EMAIL_ERROR':
            return state ? { ...state, emailError: 'Invalid email format.' } : state;

        case 'EMAIL_SUCCESS':
            return state ? { ...state, emailError: '' } : state;

        case 'PASS_ERROR':
            return state ? { ...state, passError: 'Less then 6 characters.' } : state;

        case 'PASS_SUCCESS':
            return state ? { ...state, passError: '' } : state;

        case 'LOGIN':
            return state ? { ...state, loginField: action.payload.email } : state;

        case 'PASSWORD':
            return state ? { ...state, passwordField: action.payload.password } : state;

        default:
            return state || EmailValidationInitialState;
    }
}
export default ValidationReducer;