import Button from "../../components/button"
import Input from "../../components/input";

export default () => {
 
  const buttonOnClick = () => {
    // aqui vai o código do evento de clique do botão
  
    alert('o botão foi clicado');
  };

  return (
    <div>
      {/* <Button 
        name="Nome do Botão"
        type="button"
        onClick={buttonOnClick}
      /> */}
      {/* <Input
        type="text"
        value="Aqui vai um texto"
      /> */}
    </div>
  )
}