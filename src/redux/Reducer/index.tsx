
import React from "react";
interface IState{
    emailError:string;
    passError:string;
    loginField:string;
    passwordField:string;
    notification:string;
    randomActivity:string;
    activityError:string;
}

const InitialState:IState = {
    emailError: '',
    passError:'',
    loginField:'',
    passwordField:'',
    notification:'',
    randomActivity:'',
    activityError:'',
}


type Action = { type: 'EMAIL_ERROR'} | 
                    { type: 'EMAIL_SUCCESS'} |  
                    { type: 'PASS_ERROR'} | 
                    { type: 'FETCH_DATA'} | 
                    { type: 'PASS_SUCCESS'}|
                    { type: 'RESET_ERRORS'} |
                    { type: 'RESET_DATA'} |
                    { type: 'RESET_NOTIFICATION'} |
                    { type: 'FETCH_TASKS_FAILURE',payload: {
                        error:string,
                      }} |
                    { type: 'FETCH_TASKS_SUCCESS' ,payload: {
                        activity:string,
                      }} |
                    { type: 'LOGIN',
                        payload: {
                        email:string,
                      }}| 
                    { type: 'NOTIFICATION',
                      payload: {
                      text:string,
                    }}| 
                    { type: 'PASSWORD',
                        payload: {
                        password:string,
                      }};

const ValidationReducer = (state:IState = InitialState, action:Action)=>{
    switch (action.type) {
        case 'EMAIL_ERROR':
            return state ? { ...state, emailError: 'Invalid email format.' } : state;

        case 'EMAIL_SUCCESS':
            return state ? { ...state, emailError: '' } : state;

        case 'PASS_ERROR':
            return state ? { ...state, passError: 'Less then 6 characters.' } : state;

        case 'PASS_SUCCESS':
            return state ? { ...state, passError: '' } : state;

        case 'FETCH_TASKS_SUCCESS':
            return state ? { ...state, randomActivity: action.payload.activity } : state;

        case 'FETCH_TASKS_FAILURE':
            return state ? { ...state, activityError:action.payload.error  } : state;

        case 'LOGIN':
            return state ? { ...state, loginField: action.payload.email } : state;

        case 'PASSWORD':
            return state ? { ...state, passwordField: action.payload.password } : state;

        case 'NOTIFICATION':
            return state ? { ...state, notification: action.payload.text } : state;

        case 'RESET_ERRORS':
            return state ? { ...state, emailError:'',passError:''} : state;

        case 'RESET_NOTIFICATION':
            return state ? { ...state, notification:''} : state;

        case 'RESET_DATA':
            return state ? { ...state, loginField:'',passwordField:''} : state;

        default:
            return state || InitialState;
    }
}
export default ValidationReducer;