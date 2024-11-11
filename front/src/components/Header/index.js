import Logo from "../Logo";
import OptionsHeader from "../OptionsHeader";
import IconsHeader from "../IconsHeader";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: space-around;
`;

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <OptionsHeader />
      <IconsHeader />
    </HeaderContainer>
  );
}

export default Header;
