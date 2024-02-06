import React, { useCallback, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useLoginFormState } from "../../services/ValidationService";
import Typography from "@mui/material/Typography";
import "./styles.css";

interface LoginReduxProps {
  onFormSubmit: () => void;
}

const LoginRedux: React.FC<LoginReduxProps> = (props) => {
  const {
    emailError,
    passError,
    onEmailChange,
    onPasswordChange,
    inputLogin,
    inputPassword,
    reset,
  } = useLoginFormState();

  const LoginEmailChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onEmailChange(event.target.value);
    },
    [onEmailChange]
  );

  const LoginPasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onPasswordChange(event.target.value);
    },
    [onPasswordChange]
  );

  const onEnterClick = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        props.onFormSubmit();
      }
    },
    [props.onFormSubmit]
  );

  useEffect(() => {
    reset();
  }, []);

  return (
    <div className="container">
      <Typography
        variant="h5"
        style={{
          color: "white",
          marginBottom: "10px",
          textShadow: "0px 0px 1px white",
        }}
      >
        REDUX
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
        onKeyDown={onEnterClick}
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
        onKeyDown={onEnterClick}
      />
      <Button
        variant="contained"
        sx={{ fontSize: "1.15rem" }}
        style={{ margin: "10px" }}
        onClick={props.onFormSubmit}
      >
        Enter
      </Button>
      <div className="counter-block">
        <div className="info">Current email: {inputLogin}</div>
        <div className="info">Current password: {inputPassword}</div>
      </div>
    </div>
  );
};

export default LoginRedux;
