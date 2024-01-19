
type EmailValidationAction = { type: 'EMAIL_ERROR' };
type EmailValidationSuccess = { type: 'EMAIL_SUCCESS' };

type PasswordValidationAction = { type: 'PASS_ERROR' };
type PasswordValidationSuccess = { type: 'PASS_SUCCESS' };
type ResetErrors = { type: 'RESET_ERRORS' };
type ResetData = { type: 'RESET_DATA' };

type LoginField = { type: 'LOGIN', payload: {
  email:string,
}};
type PassField = { type: 'PASSWORD', payload: {
  password:string,
}};

export const validateEmail = (): EmailValidationAction => ({
  type: 'EMAIL_ERROR',
});

export const successEmail = (): EmailValidationSuccess =>({
  type: 'EMAIL_SUCCESS',
})

export const validatePassword = (): PasswordValidationAction => ({
  type: 'PASS_ERROR',
});

export const successPassword = (): PasswordValidationSuccess =>({
  type: 'PASS_SUCCESS',
})

export const resetErrors = (): ResetErrors => ({
  type: 'RESET_ERRORS',
});

export const resetData = (): ResetData => ({
  type: 'RESET_DATA',
});

export const loginField = (inputText:string): LoginField => ({
  type: 'LOGIN',
  payload: {
    email:inputText
  }
});

export const passwordField = (inputText:string): PassField =>({
  type: 'PASSWORD',
  payload: {
    password:inputText,
  }
})

