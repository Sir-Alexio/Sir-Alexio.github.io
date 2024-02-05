import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useLoginFormState } from "../../Services/ValidationService";
import Typography from "@mui/material/Typography";
import "./styles.css";

interface ILoginRedux {
  onButtonClick: () => void;
  onEnterClick: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const LoginRedux: React.FC<ILoginRedux> = (props) => {
  const {
    emailError,
    passError,
    onEmailChange,
    onPasswordChange,
    inputLogin,
    inputPassword,
    reset,
  } = useLoginFormState();

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
        onChange={onEmailChange}
        error={Boolean(emailError)}
        helperText={emailError}
        onKeyDown={props.onEnterClick}
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
        onChange={onPasswordChange}
        error={Boolean(passError)}
        helperText={passError}
        onKeyDown={props.onEnterClick}
      />
      <Button
        variant="contained"
        sx={{ fontSize: "1.15rem" }}
        style={{ margin: "10px" }}
        onClick={props.onButtonClick}
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
