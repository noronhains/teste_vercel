import logo from './logo.svg';
import './App.css';
import { MINHA_CHAVE } from './minhaKey';

function App() {
  const getName = () => {
    if (process.env.MINHA_KEY){
      console.log(process.env.MINHA_KEY)
      return process.env.MINHA_KEY
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
