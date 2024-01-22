import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/Actions/actions";



interface IRandomActivity{
  randomActivity:string;
  activityError:string;
}


const RandomActivity:React.FC = ()=>{
  const dispatch = useDispatch();
  const myrandomActivity = useSelector((state:IRandomActivity)=>state.randomActivity);
  const apiError = useSelector((state:IRandomActivity)=>state.activityError);

  useEffect(() => {
    dispatch(fetchData());
    
  }, [dispatch]);

    return (<div>
        <h3>random activity</h3>
        {{myrandomActivity} && (<h3>activity:{myrandomActivity}</h3>)}
        {{apiError} && (<h3>error:{apiError}</h3>)}
    </div>)
}

export default RandomActivity;