import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/Actions/actions";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import "./styles.css";

interface IRandomActivity {
  randomActivity: string;
  activityError: string;
}

const RandomActivity: React.FC = () => {
  const dispatch = useDispatch();
  const myRandomActivity = useSelector(
    (state: IRandomActivity) => state.randomActivity
  );
  const apiError = useSelector((state: IRandomActivity) => state.activityError);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="container">
      {apiError && (
        <div className="alertContainer">
          <Alert variant="filled" severity="error">
            {apiError}
          </Alert>
        </div>
      )}
      <Typography variant="h5" className="title">
        RANDOM ACTIVITY
      </Typography>
      <TextField
        id="standard-basic"
        label="Activity"
        variant="standard"
        multiline
        InputProps={{
          readOnly: true,
          className: "activityInput",
          style: { color: "white" },
        }}
        InputLabelProps={{
          style: { color: "white", background: "black" },
        }}
        value={myRandomActivity}
      />
    </div>
  );
};

export default RandomActivity;
