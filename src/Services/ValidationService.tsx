import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 
{validateEmail,
successEmail, 
validatePassword,
successPassword, 
loginField,
passwordField,
resetData,
resetErrors} 
from 'D:/work/React/my-react-app/src/redux/Actions/actions';

interface IEmailValidationState {
    emailError: string;
    passError: string;
    loginField:string;
    passwordField:string;
  }
  
  export const ValidationContainer = () => {

    const emailError = useSelector((state: IEmailValidationState) => state.emailError);
    const passError = useSelector((state: IEmailValidationState) => state.passError);

    const inputLogin = useSelector((state:IEmailValidationState) => state.loginField);
    const inputPassword = useSelector((state:IEmailValidationState) => state.passwordField);

    const dispatch = useDispatch();
  
    const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
      let regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      let email = event.target.value;

      dispatch(loginField(email));
  
      if (!email.match(regex) && email.length >=1) {
        dispatch(validateEmail());
      } else {
        dispatch(successEmail());
      }
    };
  
    const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      let password = event.target.value;
  
      dispatch(passwordField(password));
      
      if (password.length <= 6 && password.length>=1) {
        dispatch(validatePassword());
      } else {
        dispatch(successPassword());
      }
    };

    const reset =()=>{
        dispatch(resetErrors());
        dispatch(resetData());
    }
  
    return { emailError, passError, onEmailChange, onPasswordChange, inputLogin,inputPassword, reset };
  };



