'use client'; // Necessário no App Router para indicar que este é um componente Client-Side

import { useState } from 'react';
import Mensagem from '../components/Mensagem';
import StyledButton from '../components/Botao';


export default function Contador() {
  const [count, setCount] = useState(0);

  const incrementar = () => setCount(count + 1);
  const decrementar = () => setCount(count - 1);

  return (
    <div>
        <Mensagem texto={"Ola Mundo"}></Mensagem>
        <StyledButton/>

      <h1>Contador: {count}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
}
