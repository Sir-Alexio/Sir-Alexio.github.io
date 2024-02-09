import { types } from "../Actions/types";
import { ActionWithPayload } from "../Actions/types";

interface IEmailValidationState {
  emailError: string;
  passError: string;
  loginField: string;
  passwordField: string;
  notification: string;
}

const EmailValidationInitialState: IEmailValidationState = {
  emailError: "",
  passError: "",
  loginField: "",
  passwordField: "",
  notification: "",
};

const ValidationReducer = (
  state: IEmailValidationState = EmailValidationInitialState,
  action: ActionWithPayload<string>
) => {
  switch (action.type) {
    case types.AUTH.EMAIL_VALIDATION.ERROR:
      return state ? { ...state, emailError: "Invalid email format." } : state;

    case types.AUTH.EMAIL_VALIDATION.SUCCESS:
      return state ? { ...state, emailError: "" } : state;

    case types.AUTH.PASSWORD_VALIDATION.ERROR:
      return state ? { ...state, passError: "Less then 6 characters." } : state;

    case types.AUTH.PASSWORD_VALIDATION.SUCCESS:
      return state ? { ...state, passError: "" } : state;

    case types.AUTH.LOGIN:
      return state ? { ...state, loginField: action.payload } : state;

    case types.AUTH.PASSWORD:
      return state ? { ...state, passwordField: action.payload } : state;

    case types.NOTIFICATION.SUCCESS:
      return state ? { ...state, notification: action.payload } : state;

    case types.ERRORS.RESET:
      return state ? { ...state, emailError: "", passError: "" } : state;

    case types.NOTIFICATION.RESET:
      return state ? { ...state, notification: "" } : state;

    case types.AUTH.DATA.RESET:
      return state ? { ...state, loginField: "", passwordField: "" } : state;

    case types.ACTIVITY.SUCCESS:
      return state
        ? {
            ...state,
            randomActivity: action.payload,
            activityError: "",
          }
        : state;

    case types.ACTIVITY.ERROR:
      return state ? { ...state, activityError: action.payload } : state;

    default:
      return state || EmailValidationInitialState;
  }
};
export default ValidationReducer;
