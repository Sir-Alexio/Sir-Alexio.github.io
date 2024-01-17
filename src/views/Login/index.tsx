import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import './styles.css'

const Login: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white', padding: '20px' }}>
          <TextField 
            id="outlined-basic" 
            label="Login" 
            variant="outlined" 
            inputProps={{ 
              style: { color: 'white', border: '1px solid white', borderRadius: '4px' }
            }} 
            InputLabelProps={{
                style: { color: 'white' }
              }}
            placeholder="Enter your login" 
            style={{ margin: '10px' }} 
          />
          <TextField 
            id="outlined-basic" 
            label="Password" 
            variant="outlined" 
            inputProps={{ 
              style: { color: 'white', border: '1px solid white', borderRadius: '4px' }
            }} 
            InputLabelProps={{
              style: { color: 'white' }
            }}
            placeholder="Enter your password" 
            style={{ margin: '10px' }} 
          />
          <Button variant="outlined" sx={{ fontSize: '1.15rem' }}style={{ margin: '10px' }} >Enter</Button>
        </div>
      );
  };

export default Login