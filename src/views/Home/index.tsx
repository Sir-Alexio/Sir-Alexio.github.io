import React from "react";
import "./styles.css";

const Homepage: React.FC = () => {
  return (
    <div className="homepage-style">
      <h1 className="title">О тестовом задании</h1>
      <p className="info">
        Этот проект создан в рамках тестового задания, и автор посвятил
        значительное количество времени и усилий, чтобы разработать
        функциональное и стильное веб-приложение.
      </p>
      <p className="conclusion">
        Надеюсь вам понравится здесь и вы сможете похвалить автора за
        проделанную работу 😊
      </p>
    </div>
  );
};
export default Homepage;
