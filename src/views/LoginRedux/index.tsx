import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate,Routes,Route } from 'react-router-dom';
import ReduxSuccess from '../Redux-Success/index';
import {validateEmail, successEmail, validatePassword,successPassword, loginField,passwordField} from 'D:/work/React/my-react-app/src/redux/Actions/actions';

interface IEmailValidationState{
    emailError:string;
    passError:string;
    loginField:string;
    passwordField:string;
}

const LoginRedux:React.FC =()=>{

  const dispatch = useDispatch();
  
  const emailError = useSelector((state:IEmailValidationState) => state.emailError);
  const passError = useSelector((state:IEmailValidationState) => state.passError);
  const inputLogin = useSelector((state:IEmailValidationState) => state.loginField);
  const inputPassword = useSelector((state:IEmailValidationState) => state.passwordField);
  const navigate = useNavigate();

  const  onEmailChange = (event: React.ChangeEvent<HTMLInputElement>)=>{    
    //Определим регулярное выражение
    let regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    //Получаем почту
    let email = event.target.value;

    dispatch(loginField(email));

    //Используем хук для проверки почты по регулярному выражению
    if (!email.match(regex)) {
      dispatch(validateEmail());
    }
    else{
      dispatch(successEmail());
    }
  } 

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    let password = event.target.value;
    
    dispatch(passwordField(password));

    if (password.length <= 6) {
      dispatch(validatePassword());
    }
    else{
      dispatch(successPassword());
    }
  }

  const onButtonClick = ()=>{
    if (!emailError && !passError && inputLogin && inputPassword) {
      console.log("Прошли капчу");
      
      navigate('/login-redux/success');
    }
  }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white', padding: '20px', margin: '100px' }}>
        <TextField
        id="standard-basic"
        label="Login"
        variant="standard"
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
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="standard"
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
      />
      <Button
        variant="contained"
        sx={{ fontSize: '1.15rem' }}
        style={{ margin: '10px' }}
        onClick={onButtonClick}>
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

export default LoginRedux;