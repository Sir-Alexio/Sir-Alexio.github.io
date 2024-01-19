import React from 'react';

const Homepage : React.FC = ()=>{
    return (
        <div style={{ maxWidth: '800px', margin: 'auto', color: 'white', textAlign: 'center', paddingTop: '50px' }}>
          <h1 style={{ fontSize: '36px', marginBottom: '20px' }}>О тестовом задании</h1>
          <p style={{ fontSize: '20px' }}>
            Этот проект создан в рамках тестового задания, и автор посвятил значительное количество времени и усилий,
            чтобы разработать функциональное и стильное веб-приложение.
          </p>
          <p style={{ fontSize: '20px', marginTop: '20px' }}>
            Надеюсь, вам понравится здесь и вы сможете похвалить автора за проделанную работу 😊
          </p>
        </div>
      );

}
export default Homepage;