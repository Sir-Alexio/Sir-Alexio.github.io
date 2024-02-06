import { Action, ActionWithPayload } from "./types/types";

export type EmailValidationAction = Action;
export type EmailValidationSuccess = Action;

export type PasswordValidationAction = Action;
export type PasswordValidationSuccess = Action;
export type FetchData = Action;

export type ResetErrors = Action;
export type ResetData = Action;

export type LoginField = ActionWithPayload<{ email: string }>;
export type PassField = ActionWithPayload<{ password: string }>;

export type SuccessNotification = ActionWithPayload<{ text: string }>;
export type ResetNotification = Action;
