import { REGEX } from "../constants";

export const isEmailValid = (email: string) => {
  return email.match(REGEX) && email.length >= 1;
};

export const isPasswordValid = (password: string) => {
  return password.length > 6;
};
