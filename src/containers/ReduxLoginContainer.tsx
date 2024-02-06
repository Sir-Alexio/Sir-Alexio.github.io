import React from "react";
import LoginRedux from "../views/LoginRedux/index";
import { useLoginFormState } from "../services/ValidationService";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

//функциональный компонент для стандартного логина
const LoginReduxContainer: React.FC = () => {
  const { emailError, passError, inputLogin, inputPassword } =
    useLoginFormState();

  const navigate = useNavigate();

  const onFormSubmit = useCallback(() => {
    //Проверям, введены ли корректные данные
    if (!passError && !emailError && inputLogin && inputPassword) {
      navigate("/login-redux/success");
    }
  }, [passError, emailError]);

  return <LoginRedux onFormSubmit={onFormSubmit} />;
};

export default LoginReduxContainer;
