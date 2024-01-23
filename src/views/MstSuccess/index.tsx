import React, { useEffect } from "react";
import { userStore } from "../../mobx/store";
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Image from './mobx.png';

const MstSuccess : React.FC = ()=>{

    useEffect(()=>{
        if(userStore.user.login && userStore.user.password){
          userStore.resetUser();
        }
      },[])

    return (<div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white', padding: '28.8px', margin: '144px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar alt="Remy Sharp" src={Image} sx={{ width: '207.36px', height: '207.36px', marginRight: '51.84px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TextField
              id="standard-basic"
              label="Login"
              variant="standard"
              InputProps={{
                readOnly: true,
                style: { color: 'white', borderBottom: '1px solid white', marginBottom: '25.92px', width: '259.2px' },
              }}
              InputLabelProps={{
                style: { color: 'white', background: 'black' },
              }}
              value={userStore.user.login}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="standard"
              InputProps={{
                readOnly: true,
                style: { color: 'white', borderBottom: '1px solid white', marginBottom: '17.28px', width: '259.2px' },
              }}
              InputLabelProps={{
                style: { color: 'white', background: 'black' },
              }}
              value={userStore.user.password}
            />
          </div>
        </div>
        </div>
    </div>)
}

export default MstSuccess;