import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import './styles.css'

interface IData {
  email:string,
  password:string
}

const Login: React.FC = () => {

  const [passError, setPassError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [data,setData] = useState<IData>({ email: '', password: '' });
  const [notification, setNotification] = useState('');

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    let regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    let email = event.target.value;

    setData((prevData) => {
      return { ...prevData, email: email };
    });

    if (!email.match(regex)) {
      setEmailError('Wrong email format.');
    }
    else{
      setEmailError('');
    }
  }

  const onPasswordFieldChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    let password = event.target.value;
    setData((prevData) => {
      return { ...prevData, password: password };
    });


    if (password.length <= 6) {
      setPassError('Less, then 6 characters.')
    }
    else{
      setPassError('');
    }
  }

  const onButtonClick = ()=>{
    if (!passError && !emailError && data.email && data.password) {
      console.log('Email: ', data.email);
      console.log('Password: ', data.password);
      
      setData({ email: '', password: '' });

      setNotification('Your account succesfuly created!');

      setTimeout(()=>{
        setNotification('');
      },3000)
    }
  }

  const onEnterPress = (event: React.KeyboardEvent<HTMLInputElement>)=>{
    if (event.key === "Enter") {
      onButtonClick();
    }
  }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white', padding: '20px', margin: '100px'}}>
          <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 9999 }}>
            {notification && (<Alert variant="filled" severity="success">
                  {notification}
            </Alert>)}
         </div>
          <TextField 
            id="outlined-basic" 
            label="Login" 
            variant="outlined" 
            inputProps={{ 
              style: { color: 'white', border: '1px solid white', borderRadius: '4px' }
            }} 
            InputLabelProps={{
                style: { color: 'white',background: 'black'  }
              }}
            placeholder="Enter your login" 
            style={{ margin: '10px' }} 
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
              style: { color: 'white', border: '1px solid white', borderRadius: '4px' }
            }} 
            InputLabelProps={{
              style: { color: 'white' ,background: 'black' }
            }}
            placeholder="Enter your password" 
            style={{ margin: '10px' }} 
            onChange={onPasswordFieldChange}
            error={Boolean(passError)}
            helperText={passError}
            type="password"
            value={data.password}
            onKeyDown={onEnterPress}
          />
          <Button 
            variant="outlined" 
            sx={{ fontSize: '1.15rem' }}
            style={{ margin: '10px' }} 
            onClick={()=>onButtonClick()}>
            Enter
          </Button>
          <div className="counter-block" style={{ marginTop: '20px', fontSize: '18px', color: 'white', margin: '70px' }}>
            <div style={{ color: 'white', fontSize: '16px', margin: '10px' }}>
              Current email: {data.email}
            </div>
            <div style={{ color: 'white', fontSize: '16px', margin: '10px' }}>
              Current password: {data.password}
            </div>
          </div>
        </div>
        
      );
  };

export default Login