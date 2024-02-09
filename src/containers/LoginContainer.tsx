import React, { useCallback, useState } from "react";
import Login from "../views/Login/index";
import { ILoginData } from "../types/types";

//функциональный компонент для стандартного логина
const LoginContainer: React.FC = () => {
  //хуки для отслеживания состояний
  //Отслеживает ошибку для пароля
  const [passError, setPassError] = useState("");

  //Отслеживает ошибку для почты
  const [emailError, setEmailError] = useState("");

  //Хранит информацию о текущем пароле и почте
  const [data, setData] = useState<ILoginData>({ email: "", password: "" });

  //Отслеживает уведомление
  const [notification, setNotification] = useState("");

  //функция для изменения поля почты
  const onEmailChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      //Определим регулярное выражение
      let regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

      //Получаем почту
      let email = event.target.value;

      //Используем хук для изменения почты
      setData((prevData) => {
        return { ...prevData, email: email };
      });

      //Используем хук для проверки почты по регулярному выражению
      if (!email.match(regex)) {
        setEmailError("Wrong email format.");
      } else {
        setEmailError("");
      }
    },
    [data]
  );

  //Функция для изменения поля пароля
  const onPasswordFieldChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      let password = event.target.value;
      setData((prevData) => {
        return { ...prevData, password: password };
      });

      //Валидация 6 символов
      if (password.length <= 6) {
        setPassError("Less, then 6 characters.");
      } else {
        setPassError("");
      }
    },
    [data]
  );

  //Обработчик нажатия на кнопку Enter
  const onFormSubmit = useCallback(() => {
    if (!passError && !emailError && data.email && data.password) {
      //выводим их в консоль
      console.log("Email: ", data.email);
      console.log("Password: ", data.password);

      //Сбрасываем значения
      setData({ email: "", password: "" });

      //Выводим уведомление, что удачно вошли
      setNotification("Your account has been successfuly created!");

      //Удаляем уведомление через 3 секунды
      setTimeout(() => {
        setNotification("");
      }, 3000);
    }
  }, [data, setData]);

  return (
    <Login
      notification={notification}
      emailError={emailError}
      passError={passError}
      data={data}
      onEmailChange={onEmailChange}
      onPasswordFieldChange={onPasswordFieldChange}
      onFormSubmit={onFormSubmit}
    />
  );
};

export default LoginContainer;
