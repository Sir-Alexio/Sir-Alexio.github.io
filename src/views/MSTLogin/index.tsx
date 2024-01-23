import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {ValidationContainer} from '../../Services/ValidationService';
import Typography from '@mui/material/Typography';

interface IMstLogin{
  onButtonClick:()=>void;
}

const MstLogin:React.FC <IMstLogin>= (props)=>{

    const { emailError, passError, onEmailChange, onPasswordChange, inputLogin,inputPassword, reset } = ValidationContainer();  

  useEffect(() => {
    reset();
  }, []);
    return(
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white', padding: '20px', margin: '58px' }}>
      <Typography variant="h5" style={{ color: 'white', marginBottom: '10px', textShadow: '0px 0px 1px white' }}>
        MST
      </Typography>
      <TextField
        id="standard-basic"
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
        onChange={onEmailChange}
        error={Boolean(emailError)}
        helperText={emailError}
        // onKeyDown={props.onEnterClick}
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
        type="password"
        onChange={onPasswordChange}
        error={Boolean(passError)}
        helperText={passError}
        // onKeyDown={props.onEnterClick}
      />
      <Button
        variant="contained"
        sx={{ fontSize: '1.15rem' }}
        style={{ margin: '10px' }}
        onClick={props.onButtonClick}
      >
        Enter
      </Button>
      <div className="counter-block" style={{ marginTop: '20px', fontSize: '18px', color: 'white', margin: '70px' }}>
        <div style={{ color: 'white', fontSize: '16px', margin: '10px' }}>
          Current email: {inputLogin}
        </div>
        <div style={{ color: 'white', fontSize: '16px', margin: '10px' }}>
          Current password: {inputPassword}
        </div>
      </div>
    </div>
    )
}

export default MstLogin;