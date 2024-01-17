import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import './styles.css'

interface IData {
  email: string;
  password: string;
}

interface InformationProps {
  notification: string;
  emailError: string;
  passError: string;
  data: IData;
  onEmailChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onEnterPress: (event: KeyboardEvent<HTMLInputElement>) => void;
  onPasswordFieldChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onButtonClick: () => void;
}

const Login: React.FC<InformationProps> = (props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white', padding: '20px', margin: '100px' }}>
      {props.notification && (
        <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 9999 }}>
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
          style: { color: 'white', border: '1px solid white', borderRadius: '4px' },
        }}
        InputLabelProps={{
          style: { color: 'white', background: 'black' },
        }}
        placeholder="Enter your login"
        style={{ margin: '10px' }}
        onChange={props.onEmailChange}
        error={Boolean(props.emailError)}
        helperText={props.emailError}
        value={props.data.email}
        onKeyDown={props.onEnterPress}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        inputProps={{
          style: { color: 'white', border: '1px solid white', borderRadius: '4px' },
        }}
        InputLabelProps={{
          style: { color: 'white', background: 'black' },
        }}
        placeholder="Enter your password"
        style={{ margin: '10px' }}
        onChange={props.onPasswordFieldChange}
        error={Boolean(props.passError)}
        helperText={props.passError}
        type="password"
        value={props.data.password}
        onKeyDown={props.onEnterPress}
      />
      <Button
        variant="outlined"
        sx={{ fontSize: '1.15rem' }}
        style={{ margin: '10px' }}
        onClick={props.onButtonClick}>
        Enter
      </Button>
      <div className="counter-block" style={{ marginTop: '20px', fontSize: '18px', color: 'white', margin: '70px' }}>
        <div style={{ color: 'white', fontSize: '16px', margin: '10px' }}>
          Current email: {props.data.email}
        </div>
        <div style={{ color: 'white', fontSize: '16px', margin: '10px' }}>
          Current password: {props.data.password}
        </div>
      </div>
    </div>
  );
};

export default Login;
