import React, { useState } from "react";
import Login from '../views/Login/index';

//Определяем тип данных для data
interface IData {
    email:string,
    password:string
  }

//функциональный компонент для стандартного логина
const LoginContainer : React.FC = () =>{

    //хуки для отслеживания состояний
    //Отслеживает ошибку для пароля
    const [passError, setPassError] = useState('');

    //Отслеживает ошибку для почты
    const [emailError, setEmailError] = useState('');

    //Хранит информацию о текущем пароле и почте
    const [data,setData] = useState<IData>({ email: '', password: '' });

    //Отслеживает уведомление
    const [notification, setNotification] = useState('');

    //функция для изменения поля почты
    const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
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
          setEmailError('Wrong email format.');
        }
        else{
          setEmailError('');
        }
  }

  //Функция для изменения поля пароля
  const onPasswordFieldChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    let password = event.target.value;
    setData((prevData) => {
      return { ...prevData, password: password };
    });

    //Валидация 6 символов
    if (password.length <= 6) {
      setPassError('Less, then 6 characters.')
    }
    else{
      setPassError('');
    }
  }

  //Обработчик нажатия на кнопку Enter
  const onButtonClick = ()=>{
    //Проверям, введены ли корректные данные
    if (!passError && !emailError && data.email && data.password) {
        //выводим их в консоль
        console.log('Email: ', data.email);
        console.log('Password: ', data.password);
        
        //Сбрасываем значения
        setData({ email: '', password: '' });

        //Выводим уведомление, что удачно вошли
        setNotification('Your account has been succesfuly created!');

        //Удаляем уведомление через 3 секунды
        setTimeout(()=>{
          setNotification('');
        },3000)
    }
  }

  //Проверка нажатия на клавишу Enter
  const onEnterPress = (event: React.KeyboardEvent<HTMLInputElement>)=>{
    if (event.key === "Enter") {
      onButtonClick();
    }
  }
    return (
        <Login notification={notification}
        emailError={emailError}
        passError={passError}
        data={data}
        onEmailChange={onEmailChange}
        onEnterPress={onEnterPress}
        onPasswordFieldChange={onPasswordFieldChange}
        onButtonClick={onButtonClick}
        />
    )
}

export default LoginContainer;