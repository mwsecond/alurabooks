import styled from "styled-components";

const OptionsContainer = styled.ul`
  display: flex;
`;
const OptionContainer = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`;

const textOptions = ["CATEGORIAS", "MINHA ESTANTE", "FAVORITOS"];

export default function OptionsHeader() {
  return (
    <OptionsContainer>
      {textOptions.map((text) => (
        <OptionContainer>
          <p>{text}</p>
        </OptionContainer>
      ))}
    </OptionsContainer>
  );
}
