import { types } from "mobx-state-tree";

const UserInfo = types.model({
    login: types.string,
    password: types.string
  });
  
  const UserStore = types
    .model({
      user: types.optional(UserInfo, { login: "", password: "" })
    })
    .actions((self) => ({
      updateLogin: (newLogin: string) => {
        self.user.login = newLogin;
      },
  
      updatePassword: (newPassword: string) => {
        self.user.password = newPassword;
      },
  
      resetUser: () => {
        self.user = { login: "", password: "" }
      },
    }));
  
  export const userStore = UserStore.create();