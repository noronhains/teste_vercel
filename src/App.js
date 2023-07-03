import logo from './logo.svg';
import './App.css';
import { MINHA_CHAVE } from './minhaKey';

function App() {
  const getName = () => {
    console.log('Chave?', process.env.REACT_APP_MINHA_KEY)
    if (process.env.REACT_APP_MINHA_KEY){
      console.log(process.env.REACT_APP_MINHA_KEY)
      return process.env.REACT_APP_MINHA_KEY
    }
    else{
      console.log(MINHA_CHAVE)
      return MINHA_CHAVE
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {getName()}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {`${process.env.REACT_APP_MINHA_KEY}`}
        </a>
      </header>
    </div>
  );
}

export default App;
