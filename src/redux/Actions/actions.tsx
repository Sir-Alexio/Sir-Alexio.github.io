import { Action, ActionWithPayload } from "../Actions/entity";

import { types } from "./types";

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

export const setLoginField = (
  inputText: string
): ActionWithPayload<string> => ({
  type: types.AUTH.LOGIN,
  payload: inputText,
});

export const setPasswordField = (
  inputText: string
): ActionWithPayload<string> => ({
  type: types.AUTH.PASSWORD,
  payload: inputText,
});

export const createNotification = (
  inputText: string
): ActionWithPayload<string> => ({
  type: types.NOTIFICATION.SUCCESS,
  payload: inputText,
});

export const resetNotification = (): Action => ({
  type: types.NOTIFICATION.RESET,
});
