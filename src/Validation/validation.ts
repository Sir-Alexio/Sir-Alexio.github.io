export const isEmailValid = (email: string) => {
  let regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

  if (email.match(regex) && email.length >= 1) {
    return true;
  }

  return false;
};

export const isPasswordValid = (password: string) => {
  if (password.length > 6) {
    return true;
  }
  return false;
};
