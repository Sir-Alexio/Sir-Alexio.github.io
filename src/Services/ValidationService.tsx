import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  validateEmail,
  successEmail,
  validatePassword,
  successPassword,
  loginField,
  passwordField,
  resetData,
  resetErrors,
} from "../redux/Actions/actions";
//} from "@redux/Actions";

interface IEmailValidationState {
  emailError: string;
  passError: string;
  loginField: string;
  passwordField: string;
}

export const useLoginFormState = () => {
  const emailError = useSelector(
    (state: IEmailValidationState) => state.emailError
  );
  const passError = useSelector(
    (state: IEmailValidationState) => state.passError
  );

  const inputLogin = useSelector(
    (state: IEmailValidationState) => state.loginField
  );
  const inputPassword = useSelector(
    (state: IEmailValidationState) => state.passwordField
  );

  const dispatch = useDispatch();

  const onEmailChange = useCallback(
    (email: string) => {
      let regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      // let email = event.target.value;

      dispatch(loginField(email));

      if (!email.match(regex) && email.length >= 1) {
        dispatch(validateEmail());
      } else {
        dispatch(successEmail());
      }
    },
    [loginField]
  );

  const onPasswordChange = useCallback(
    (password: string) => {
      //let password = event.target.value;

      dispatch(passwordField(password));

      if (password.length <= 6 && password.length >= 1) {
        dispatch(validatePassword());
      } else {
        dispatch(successPassword());
      }
    },
    [passwordField]
  );

  const reset = useCallback(() => {
    dispatch(resetErrors());
    dispatch(resetData());
  }, [resetErrors, resetData]);

  return {
    emailError,
    passError,
    onEmailChange,
    onPasswordChange,
    inputLogin,
    inputPassword,
    reset,
  };
};
