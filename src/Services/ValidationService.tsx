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

import { isEmailValid, isPasswordValid } from "Validation/validation";

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
      dispatch(loginField(email));

      if (isEmailValid(email)) {
        dispatch(successEmail());
      } else {
        dispatch(validateEmail());
      }
    },
    [loginField]
  );

  const onPasswordChange = useCallback(
    (password: string) => {
      dispatch(passwordField(password));

      if (isPasswordValid(password)) {
        dispatch(successPassword());
      } else {
        dispatch(validatePassword());
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
