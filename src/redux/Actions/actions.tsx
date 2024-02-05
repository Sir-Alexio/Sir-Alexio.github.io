import {
  EmailValidationSuccess,
  EmailValidationAction,
  PasswordValidationAction,
  PasswordValidationSuccess,
  ResetErrors,
  ResetData,
  LoginField,
  PassField,
  SuccessNotification,
  ResetNotification,
  FetchData,
} from "./actionTypes";

import { types } from "./types";

export const fetchData = (): FetchData => ({ type: types.ACTIVITY.DATA });

export const validateEmail = (): EmailValidationAction => ({
  type: types.AUTH.EMAIL_VALIDATION.ERROR,
});

export const successEmail = (): EmailValidationSuccess => ({
  type: types.AUTH.EMAIL_VALIDATION.SUCCESS,
});

export const validatePassword = (): PasswordValidationAction => ({
  type: types.AUTH.PASSWORD_VALIDATION.ERROR,
});

export const successPassword = (): PasswordValidationSuccess => ({
  type: types.AUTH.PASSWORD_VALIDATION.SUCCESS,
});

export const resetErrors = (): ResetErrors => ({
  type: types.ERRORS.RESET,
});

export const resetData = (): ResetData => ({
  type: types.AUTH.DATA.RESET,
});

export const loginField = (inputText: string): LoginField => ({
  type: types.AUTH.LOGIN,
  payload: {
    email: inputText,
  },
});

export const passwordField = (inputText: string): PassField => ({
  type: types.AUTH.PASSWORD,
  payload: {
    password: inputText,
  },
});

export const createNotification = (inputText: string): SuccessNotification => ({
  type: types.NOTIFICATION.SUCCESS,
  payload: {
    text: inputText,
  },
});

export const resetNotification = (): ResetNotification => ({
  type: types.NOTIFICATION.RESET,
});
