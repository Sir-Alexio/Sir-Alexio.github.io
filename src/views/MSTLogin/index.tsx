import React, { useCallback, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import { userStore } from "mobx/store";

import { observer } from "mobx-react";

interface MstLoginProps {
  onButtonClick: () => void;
}

const MstLogin: React.FC<MstLoginProps> = observer((props) => {
  const emailError = userStore.validation.loginValidation;
  const passError = userStore.validation.passwordValidation;
  const inputPassword = userStore.entered.enteredPassword;
  const inputLogin = userStore.entered.enteredLogin;

  const LoginEmailChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      userStore.updateLogin(event.target.value);
    },
    []
  );

  const LoginPasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      userStore.updatePassword(event.target.value);
    },
    []
  );

  useEffect(() => {
    userStore.resetUser();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        padding: "20px",
        margin: "58px",
      }}
    >
      <Typography
        variant="h5"
        style={{
          color: "white",
          marginBottom: "10px",
          textShadow: "0px 0px 1px white",
        }}
      >
        MST
      </Typography>
      <TextField
        id="standard-basic"
        label="Login"
        variant="outlined"
        inputProps={{
          style: {
            color: "white",
            border: "1px solid white",
            borderRadius: "4px",
          },
        }}
        InputLabelProps={{
          style: { color: "white", background: "black" },
        }}
        placeholder="Enter your login"
        style={{ margin: "10px" }}
        onChange={LoginEmailChange}
        error={Boolean(emailError)}
        helperText={emailError}
        // onKeyDown={props.onEnterClick}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        inputProps={{
          style: {
            color: "white",
            border: "1px solid white",
            borderRadius: "4px",
          },
        }}
        InputLabelProps={{
          style: { color: "white", background: "black" },
        }}
        placeholder="Enter your password"
        style={{ margin: "10px" }}
        type="password"
        onChange={LoginPasswordChange}
        error={Boolean(passError)}
        helperText={passError}
        // onKeyDown={props.onEnterClick}
      />
      <Button
        variant="contained"
        sx={{ fontSize: "1.15rem" }}
        style={{ margin: "10px" }}
        onClick={props.onButtonClick}
      >
        Enter
      </Button>
      <div
        className="counter-block"
        style={{
          marginTop: "20px",
          fontSize: "18px",
          color: "white",
          margin: "70px",
        }}
      >
        <div className="email-info">Current email: {inputLogin}</div>
        <div className="password-info">Current password: {inputPassword}</div>
      </div>
    </div>
  );
});

export default MstLogin;
