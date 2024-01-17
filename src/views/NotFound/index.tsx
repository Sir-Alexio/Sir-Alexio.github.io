const NotFound : React.FC = ()=>{
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '70vh', color: 'white', fontSize: '36px' }}>
          <div>
            <div style={{ fontSize: '100px', marginBottom: '20px' }}>404</div>
            <p>Извините, страница не найдена 😟</p>
          </div>
        </div>
      );
}

export default NotFound;