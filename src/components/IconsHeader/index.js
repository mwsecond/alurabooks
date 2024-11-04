import perfil from "../../img/perfil.svg";
import sacola from "../../img/sacola.svg";
import styled from "styled-components";

const IconContainer = styled.li`
  margin-top: 15px;
  margin-right: 40px;
  width: 25px;
`;
const IconsHeaderContainer = styled.ul`
  display: flex;
`;
const icons = [perfil, sacola];

function IconsHeader() {
  return (
    <IconsHeaderContainer>
      {icons.map((icon) => (
        <IconContainer>
          <img src={icon} alt="icon"></img>
        </IconContainer>
      ))}
    </IconsHeaderContainer>
  );
}

export default IconsHeader;
