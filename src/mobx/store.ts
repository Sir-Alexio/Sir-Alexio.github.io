import { types } from "mobx-state-tree";
import { isEmailValid, isPasswordValid } from "Validation/validation";

const UserInfo = types.model({
  login: types.string,
  password: types.string,
});

const EnteredInfo = types.model({
  enteredLogin: types.string,
  enteredPassword: types.string,
});

const ValidationInfo = types.model({
  loginValidation: types.string,
  passwordValidation: types.string,
});

const UserStore = types
  .model({
    user: types.optional(UserInfo, { login: "", password: "" }),
    entered: types.optional(EnteredInfo, {
      enteredLogin: "",
      enteredPassword: "",
    }),
    validation: types.optional(ValidationInfo, {
      loginValidation: "",
      passwordValidation: "",
    }),
  })
  .actions((self) => ({
    submit: () => {
      self.user.login = self.entered.enteredLogin;
      self.user.password = self.entered.enteredPassword;
    },
    updateLogin: (newLogin: string) => {
      self.entered.enteredLogin = newLogin;

      self.validation.loginValidation = "Invalid email address";

      if (isEmailValid(newLogin)) {
        self.validation.loginValidation = "";
      }
    },

    updatePassword: (newPassword: string) => {
      self.entered.enteredPassword = newPassword;

      self.validation.passwordValidation = "At least 6 characters";

      if (isPasswordValid(newPassword)) {
        self.validation.passwordValidation = "";
      }
    },

    resetUser: () => {
      self.user = { login: "", password: "" };
    },
  }))
  .views((self) => ({
    get validateEmail() {
      return isEmailValid(self.entered.enteredLogin);
    },
    get validatePassword() {
      return isPasswordValid(self.entered.enteredPassword);
    },
  }));

export const userStore = UserStore.create();
