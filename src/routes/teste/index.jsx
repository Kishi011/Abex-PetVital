import { useState } from "react";
import Button from "../../components/button"
import Card from "../../components/card";
import Input from "../../components/input";

export default () => {
 
  const buttonOnClick = () => {
    // aqui vai o código do evento de clique do botão
  
    alert('o botão foi clicado');
  };

  const [input, setInput] = useState("");

  return (
    <div style={{padding: 50}}>
      {/* <Button 
        name="Nome do Botão"
        type="button"
        onClick={buttonOnClick}
      />
      <Input
        type="text"
        placeholder="Aqui vai um texto"
        onInput={(value) => setInput(value)}
      /> */}
      {/* <Card>
        <span>assim q coloca coisa dentro do card</span>
      </Card> */}
    </div>
  )
}