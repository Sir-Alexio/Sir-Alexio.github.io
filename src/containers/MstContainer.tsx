import React from "react";
import MstLogin from "../views/MSTLogin";
import {userStore} from '../mobx/store'
import {ValidationContainer} from '../Services/ValidationService';
import {useNavigate} from 'react-router-dom';

const MstContainer:React.FC = ()=>{

    const { emailError, passError, inputLogin,inputPassword} = ValidationContainer(); 
    const navigate = useNavigate();

    const onButtonClick=()=>{
        console.log("Мы нажали на кнопку!!!");
        
        if (!emailError && !passError && inputLogin && inputPassword) {
            userStore.updateLogin(inputLogin);
            userStore.updatePassword(inputPassword);
            navigate('/login-mst/success');
        }
    }

    return (
        <MstLogin onButtonClick={onButtonClick}/>
    )
}
export default MstContainer;