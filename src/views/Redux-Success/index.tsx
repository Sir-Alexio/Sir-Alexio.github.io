import React from "react";
import { useSelector } from 'react-redux';

interface IEmailValidationState{
    emailError:string;
    passError:string;
    loginField:string;
    passwordField:string;
}
const ReduxSuccess: React.FC = ()=>{
    const login = useSelector((state:IEmailValidationState) => state.loginField)
    const password = useSelector((state:IEmailValidationState) => state.passwordField)
    return (
        <div>
            <h2>login: {login}</h2>
            <h2>password: {password}</h2>
        </div>
    )
}

export default ReduxSuccess;