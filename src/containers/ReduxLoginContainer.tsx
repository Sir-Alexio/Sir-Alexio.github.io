import React from "react";
import LoginRedux from "../views/LoginRedux/index";
import { useLoginFormState } from "../Services/ValidationService";
import { useNavigate } from "react-router-dom";

//функциональный компонент для стандартного логина
const LoginReduxContainer: React.FC = () => {
  const { emailError, passError, inputLogin, inputPassword } =
    useLoginFormState();

  const navigate = useNavigate();

  const onButtonClick = () => {
    //Проверям, введены ли корректные данные
    if (!passError && !emailError && inputLogin && inputPassword) {
      navigate("/login-redux/success");
    }
  };

  //Проверка нажатия на клавишу Enter
  const onEnterClick = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onButtonClick();
    }
  };

  return (
    <LoginRedux onEnterClick={onEnterClick} onButtonClick={onButtonClick} />
  );
};

export default LoginReduxContainer;
