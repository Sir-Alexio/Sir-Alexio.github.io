import React, { KeyboardEvent, useCallback, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { useLoginFormState } from "../../Services/ValidationService";
import "./styles.css";

interface InformationProps {
  notification: string;
  onEnterPress: (event: KeyboardEvent<HTMLInputElement>) => void;
  onButtonClick: () => void;
}

const Login: React.FC<InformationProps> = (props) => {
  //Используем общую логику валидации и отображения введенных данных
  const {
    emailError,
    passError,
    onEmailChange,
    onPasswordChange,
    inputLogin,
    inputPassword,
    reset,
  } = useLoginFormState();

  //Удаляем все введенные данные, если обновили страницу
  useEffect(() => {
    reset();
  }, []);

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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        padding: "20px",
        margin: "100px",
      }}
    >
      {props.notification && (
        <div style={{ position: "fixed", top: 20, right: 20, zIndex: 9999 }}>
          <Alert variant="filled" severity="success">
            {props.notification}
          </Alert>
        </div>
      )}
      <TextField
        id="outlined-basic"
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
        onKeyDown={props.onEnterPress}
        value={inputLogin}
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
        onChange={LoginPasswordChange}
        error={Boolean(passError)}
        helperText={passError}
        type="password"
        onKeyDown={props.onEnterPress}
        value={inputPassword}
      />
      <Button
        variant="outlined"
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
        <div style={{ color: "white", fontSize: "16px", margin: "10px" }}>
          Current email: {inputLogin}
        </div>
        <div style={{ color: "white", fontSize: "16px", margin: "10px" }}>
          Current password: {inputPassword}
        </div>
      </div>
    </div>
  );
};

export default Login;
