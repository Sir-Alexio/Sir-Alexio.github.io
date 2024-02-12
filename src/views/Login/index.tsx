import React, {
  useState,
  ChangeEvent,
  KeyboardEvent,
  useCallback,
} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import "./styles.css";
import { ILoginData } from "../../types/types";

interface ILoginProps {
  notification: string;
  emailError: string;
  passError: string;
  data: ILoginData;
  onEmailChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onPasswordFieldChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onFormSubmit: () => void;
}

const Login: React.FC<ILoginProps> = ({
  notification,
  emailError,
  passError,
  data,
  onEmailChange,
  onPasswordFieldChange,
  onFormSubmit,
}) => {
  //Флажок для нажатия на кнопку enter
  const [isEnterInputEnable, setIsEnterInputEnable] = useState(true);

  //Проверка нажатия на клавишу Enter
  const onEnterPress = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter" && isEnterInputEnable) {
        onFormSubmit();
      }
    },
    []
  );

  return (
    <div className="login-container">
      {notification && (
        <div className="notification-container">
          <Alert variant="filled" severity="success">
            {notification}
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
        onChange={onEmailChange}
        error={Boolean(emailError)}
        helperText={emailError}
        value={data.email}
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
        onChange={onPasswordFieldChange}
        error={Boolean(passError)}
        helperText={passError}
        type="password"
        value={data.password}
        onKeyDown={onEnterPress}
      />
      <Button
        variant="outlined"
        sx={{ fontSize: "1.15rem" }}
        style={{ margin: "10px" }}
        onClick={onFormSubmit}
      >
        Enter
      </Button>
      <div className="counter-block">
        <div className="email-info">Current email: {data.email}</div>
        <div className="password-info">Current password: {data.password}</div>
      </div>
    </div>
  );
};

export default Login;
