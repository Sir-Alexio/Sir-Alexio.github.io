import { Action } from "./types";
import { LoginField, PassField, SuccessNotification } from "./actionTypes";

import { types } from "./types";

export const fetchData = (): Action => ({ type: types.ACTIVITY.DATA });

export const setErrorEmailValidation = (): Action => ({
  type: types.AUTH.EMAIL_VALIDATION.ERROR,
});

export const setSuccessEmailValidation = (): Action => ({
  type: types.AUTH.EMAIL_VALIDATION.SUCCESS,
});

export const setErrorPasswordValidation = (): Action => ({
  type: types.AUTH.PASSWORD_VALIDATION.ERROR,
});

export const setSuccessPasswordValidation = (): Action => ({
  type: types.AUTH.PASSWORD_VALIDATION.SUCCESS,
});

export const resetErrors = (): Action => ({
  type: types.ERRORS.RESET,
});

export const resetData = (): Action => ({
  type: types.AUTH.DATA.RESET,
});

export const setLoginField = (inputText: string): LoginField => ({
  type: types.AUTH.LOGIN,
  payload: inputText,
});

export const setPasswordField = (inputText: string): PassField => ({
  type: types.AUTH.PASSWORD,
  payload: inputText,
});

export const createNotification = (inputText: string): SuccessNotification => ({
  type: types.NOTIFICATION.SUCCESS,
  payload: inputText,
});

export const resetNotification = (): Action => ({
  type: types.NOTIFICATION.RESET,
});
