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
        <p>
          Quando criar uma nova tela, mude o nome da pasta para o nome da tela que será criada.
          <br />
          Para adicionar a tela dentro do router, acesse o arquivo dentro de <i>"src/index.jsx"</i> e adicione o seguinte comando.
        </p>
        <p>
          <i>import {"<"}NomeDaTela{">"} from './routes/{"<"}NomeDaPasta{">"}'</i>
          <br />
          <br />
          Dentro de <b>const router:</b>
          <br />
          <i>
            {"{"}path: '{"<"}NomeDaRota{">"}', element: {"<"}NomeDoComponente{">"}{"}"}</i>
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
