import logo from "../../img/logo.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`;

const LogoImageContainer = styled.img`
  margin-right: 10px;
`;

function Logo() {
  return (
    <LogoContainer>
      <LogoImageContainer
        src={logo}
        alt="logo"
        className="logo-img"
      ></LogoImageContainer>
      <p>
        <strong>Alura </strong>Books
      </p>
    </LogoContainer>
  );
}

export default Logo;
