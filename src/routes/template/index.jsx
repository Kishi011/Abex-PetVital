import logo from '../../logo.svg';
import './index.css';

export default () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Isso aqui é uma página de template. Para criar uma outra tela, copie a pasta template em <i>"src/routes/template"</i> e altere o arquivo "index.jsx".
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentação do React
        </a>
      </header>
    </div>
  );
}
