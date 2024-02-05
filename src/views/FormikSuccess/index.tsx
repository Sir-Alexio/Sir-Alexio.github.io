import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Image from "./formik.jpg";
import Alert from "@mui/material/Alert";
import "./styles.css";
import { width } from "@mui/system";

interface IEmailValidationState {
  emailError: string;
  passError: string;
  loginField: string;
  passwordField: string;
  notification: string;
}

const FormicSuccess: React.FC = () => {
  const login = useSelector((state: IEmailValidationState) => state.loginField);
  const password = useSelector(
    (state: IEmailValidationState) => state.passwordField
  );
  const notification = useSelector(
    (state: IEmailValidationState) => state.notification
  );
  const dispatch = useDispatch();

  return (
    <div className="container">
      {notification && (
        <div className="notification">
          <Alert variant="filled" severity="success">
            {notification}
          </Alert>
        </div>
      )}
      <div className="userDetails">
        <Avatar
          className="avatar"
          alt="Remy Sharp"
          src={Image}
          style={{ width: "40%", height: "40%" }}
        />
        <div className="textFields">
          <TextField
            id="standard-basic"
            label="Login"
            variant="standard"
            InputProps={{
              readOnly: true,
              style: { color: "white" },
              className: "readOnlyInput",
            }}
            InputLabelProps={{
              style: { color: "white", background: "black" },
            }}
            value={login}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="standard"
            InputProps={{
              readOnly: true,
              style: { color: "white" },
              className: "readOnlyInput",
            }}
            InputLabelProps={{
              style: { color: "white", background: "black" },
            }}
            value={password}
          />
        </div>
      </div>
    </div>
  );
};

export default FormicSuccess;
