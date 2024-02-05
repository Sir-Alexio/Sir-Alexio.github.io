import React, { useState } from "react";
import Login from "../views/Login/index";
import { useLoginFormState } from "../Services/ValidationService";

//функциональный компонент для стандартного логина
const LoginContainer: React.FC = () => {
  const { emailError, passError, inputLogin, inputPassword, reset } =
    useLoginFormState();
  //Отслеживает уведомление
  const [notification, setNotification] = useState("");

  //Обработчик нажатия на кнопку Enter
  const onButtonClick = () => {
    //Проверям, введены ли корректные данные
    if (!passError && !emailError && inputLogin && inputPassword) {
      //выводим их в консоль
      console.log("Email: ", inputLogin);
      console.log("Password: ", inputPassword);

      //Сбрасываем значения
      reset();

      //Выводим уведомление, что удачно вошли
      setNotification("Your account has been succesfuly created!");

      //Удаляем уведомление через 3 секунды
      setTimeout(() => {
        setNotification("");
      }, 3000);
    }
  };

  //Проверка нажатия на клавишу Enter
  const onEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onButtonClick();
    }
  };
  return (
    <Login
      notification={notification}
      onEnterPress={onEnterPress}
      onButtonClick={onButtonClick}
    />
  );
};

export default LoginContainer;
