import './App.scss';
import Countdown from './components/countdown';

function App() {
  return (
    <>

      <header>
        <img src='top-image.svg' alt=''></img>
      </header>

      <body>
        <main>
          <div className='container'>
            <h3> READY TO LAUNCH IN... </h3>
            <div className='timestamps'>
              <p>Dias</p>
              <p>Horas</p>
              <p>Minutos</p>
              <p>Segundos</p>
            </div>
            <div className='countdown'>
              <Countdown />
            </div>
            <div className='desc'> Inscreva-se para saber mais sobre o lançamento </div>
            <button> Inscreva-se </button>
          </div>
          <img src="rocket.svg" alt="" />
        </main>
      </body>

      <footer>
        <img src='bottom-image.svg' alt=''></img>
      </footer>

    </>
  );
}

export default App;
