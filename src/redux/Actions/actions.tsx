
type EmailValidationAction = { type: 'EMAIL_ERROR' };
type EmailValidationSuccess = { type: 'EMAIL_SUCCESS' };

type PasswordValidationAction = { type: 'PASS_ERROR' };
type PasswordValidationSuccess = { type: 'PASS_SUCCESS' };
type ResetErrors = { type: 'RESET_ERRORS' };
type ResetData = { type: 'RESET_DATA' };
type RandomActivity = {type:'FETCH_TASKS_SUCCESS' ,payload:{
  activity:string;
}};

type LoginField = { type: 'LOGIN', payload: {
  email:string,
}};
type PassField = { type: 'PASSWORD', payload: {
  password:string,
}};

type Notification = { type: 'NOTIFICATION', payload: {
  text:string,
}};

type ResetNotification = { type: 'RESET_NOTIFICATION' };

export const randomActivity = (inputActivity:string): RandomActivity => ({
  type: 'FETCH_TASKS_SUCCESS' ,
  payload: {
    activity:inputActivity
  }
});

export const randomActivityError = ()  => ({
  type: 'FETCH_TASKS_FAILURE' ,
});

export const fetchData = () => ({ type: 'FETCH_DATA' });

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

export const creteNotification = (inputText:string): Notification => ({
  type: 'NOTIFICATION',
  payload: {
    text:inputText
  }
});

export const resetNotification = (): ResetNotification => ({
  type: 'RESET_NOTIFICATION',
});

