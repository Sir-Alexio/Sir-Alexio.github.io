import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setErrorEmailValidation,
  setSuccessEmailValidation,
  setErrorPasswordValidation,
  setSuccessPasswordValidation,
  setLoginField,
  setPasswordField,
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

  const onEmailChange = useCallback((email: string) => {
    dispatch(setLoginField(email));

    if (isEmailValid(email)) {
      dispatch(setSuccessEmailValidation());
    } else {
      dispatch(setErrorEmailValidation());
    }
  }, []);

  const onPasswordChange = useCallback((password: string) => {
    dispatch(setPasswordField(password));

    if (isPasswordValid(password)) {
      dispatch(setSuccessPasswordValidation());
    } else {
      dispatch(setErrorPasswordValidation());
    }
  }, []);

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
