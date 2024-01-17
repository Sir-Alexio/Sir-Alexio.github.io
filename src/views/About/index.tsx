// Ваш компонент About.js
import React from 'react';
import Image from './image.jpg';

const About: React.FC = () => {
    return (
      <div style={{ display: 'flex', alignItems: 'flex-start', padding: '22px 20px 20px', maxWidth: '1200px', margin: 'auto', color: 'white' }}>
        <div style={{ flex: 1, marginRight: '20px', alignSelf: 'flex-start', marginTop: '2cm' }}>
          {/* Левая часть - изображение */}
          <img src={Image} alt="Company Image" style={{ width: '140%', height: 'auto', borderRadius: '8px', marginLeft: '-3cm', marginBottom: '1cm' }} />
        </div>
        <div style={{ flex: 2, paddingLeft: '80px', marginTop: '2cm' }}>
          {/* Правая часть - текст */}
          <h2 style={{ fontSize: '28px', marginTop: 0 }}>О нас</h2>
          <p style={{ fontSize: '20px' }}>
            Компания ИНТЕРМЕХ основана в 1990 году.
          </p>
          <p style={{ fontSize: '20px' }}>
            Основной вид деятельности - разработка и внедрение систем автоматизации процессов
            конструкторской и технологической подготовки производства на машиностроительных,
            приборостроительных предприятиях, а также информационная поддержка проектирования
            в промышленном и гражданском строительстве.
          </p>
          <p style={{ fontSize: '20px' }}>
            Применение наших решений позволяет предприятиям значительно повысить эффективность,
            сократить сроки и стоимость технической подготовки производства.
          </p>
          <p style={{ fontSize: '20px' }}>
            Мы предлагаем полный спектр решений по автоматизации технической подготовки производства,
            комплексно решая задачи организации единого информационного пространства предприятия.
          </p>
          <p style={{ fontSize: '20px' }}>
            Наши продукты зарегистрированы в едином реестре программных продуктов ЕАЭС и
            сертифицированы во ФСТЭК по системе защиты информации.
          </p>
        </div>
      </div>
    );
  };
  
  export default About;
