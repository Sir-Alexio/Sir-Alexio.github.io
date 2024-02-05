import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import "./styles.css";
import { ILoginData } from "../../types/types";

interface LoginProps {
  notification: string;
  emailError: string;
  passError: string;
  data: ILoginData;
  onEmailChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onPasswordFieldChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onFormSubmit: () => void;
}

const Login: React.FC<LoginProps> = (props) => {
  //Флажок для нажатия на кнопку enter
  const [isEnterInputEnable, setIsEnterInputEnable] = useState(true);

  //Проверка нажатия на клавишу Enter
  const onEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && isEnterInputEnable) {
      props.onFormSubmit();
    }
  };

  const changeEnterSubmit = () => {
    setIsEnterInputEnable((prev) => !prev);
  };
  return (
    <div className="login-container">
      {props.notification && (
        <div className="notification-container">
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
        onChange={props.onEmailChange}
        error={Boolean(props.emailError)}
        helperText={props.emailError}
        value={props.data.email}
        onKeyDown={onEnterPress}
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
        onChange={props.onPasswordFieldChange}
        error={Boolean(props.passError)}
        helperText={props.passError}
        type="password"
        value={props.data.password}
        onKeyDown={onEnterPress}
      />
      <Button
        variant="outlined"
        sx={{ fontSize: "1.15rem" }}
        style={{ margin: "10px" }}
        onClick={props.onFormSubmit}
      >
        Enter
      </Button>
      <div className="counter-block">
        <div className="email-info">Current email: {props.data.email}</div>
        <div className="password-info">
          Current password: {props.data.password}
        </div>
      </div>
    </div>
  );
};

export default Login;
