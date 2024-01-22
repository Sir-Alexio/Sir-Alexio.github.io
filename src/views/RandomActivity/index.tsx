import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/Actions/actions";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';



interface IRandomActivity{
  randomActivity:string;
  activityError:string;
}


const RandomActivity:React.FC = ()=>{
  const dispatch = useDispatch();
  const myRandomActivity = useSelector((state:IRandomActivity)=>state.randomActivity);
  const apiError = useSelector((state:IRandomActivity)=>state.activityError);

  useEffect(() => {
    dispatch(fetchData());
    
  }, [dispatch]);

    return (<div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white', padding: '20px', margin: '88px'}}>
      {apiError && (
        <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 9999 }}>
          <Alert variant="filled" severity="error">
            {apiError}
          </Alert>
        </div>
      )}
      <Typography variant="h5" style={{ color: 'white', marginBottom: '10px', textShadow: '0px 0px 1px white' } }>
        RANDOM ACTIVITY
        </Typography>
        <TextField
        id="standard-basic"
        label="Activity"
        variant="standard"
        multiline
        InputProps={{
          readOnly: true,
          style: {
            color: 'white',
            borderBottom: '1px solid white',
            marginBottom: '25.92px',
            width: '395.2px', 
            marginTop: '10px',
          },
        }}
        InputLabelProps={{
          style: { color: 'white', background: 'black' },
        }}
        value={myRandomActivity}
      />
      </div>
    </div>
    )
}

export default RandomActivity;