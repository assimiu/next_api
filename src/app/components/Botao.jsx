// Em 'components/StyledButton.js'
import styled from 'styled-components';

const Botao = styled.button`
  background-color: #0070f3;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #005bb5;
  }
`;

export default function StyledButton() {
  return <Botao>Clique em mim</Botao>;
}
