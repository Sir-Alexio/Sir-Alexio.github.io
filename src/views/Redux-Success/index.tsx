import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Image from "./image.png";
import Alert from "@mui/material/Alert";
import { useCallback } from "react";

import {
  createNotification,
  resetNotification,
} from "../../redux/Actions/actions";

interface IEmailValidationState {
  emailError: string;
  passError: string;
  loginField: string;
  passwordField: string;
  notification: string;
}
const ReduxSuccess: React.FC = () => {
  const login = useSelector((state: IEmailValidationState) => state.loginField);
  const password = useSelector(
    (state: IEmailValidationState) => state.passwordField
  );
  const notification = useSelector(
    (state: IEmailValidationState) => state.notification
  );
  const dispatch = useDispatch();

  const successNotification = useCallback(() => {
    dispatch(createNotification("Account has been successfuly created"));

    setTimeout(() => {
      dispatch(resetNotification());
    }, 3000);
  }, []);

  const displaySuccessNotification = useCallback(() => {
    if (login && password) {
      successNotification();
    }
  }, []);

  useEffect(() => {
    displaySuccessNotification();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        padding: "28.8px",
        margin: "144px",
      }}
    >
      {notification && (
        <div style={{ position: "fixed", top: 20, right: 20, zIndex: 9999 }}>
          <Alert variant="filled" severity="success">
            {notification}
          </Alert>
        </div>
      )}
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar
          alt="Remy Sharp"
          src={Image}
          sx={{ width: "207.36px", height: "207.36px", marginRight: "51.84px" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            id="standard-basic"
            label="Login"
            variant="standard"
            InputProps={{
              readOnly: true,
              style: {
                color: "white",
                borderBottom: "1px solid white",
                marginBottom: "25.92px",
                width: "259.2px",
              },
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
              style: {
                color: "white",
                borderBottom: "1px solid white",
                marginBottom: "17.28px",
                width: "259.2px",
              },
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

export default ReduxSuccess;
