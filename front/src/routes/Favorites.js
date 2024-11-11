import Search from "../components/Search";
import styled from "styled-components";

const AppConteiner = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
`;

function Favorites() {
  return (
    <AppConteiner>
      <Search />
    </AppConteiner>
  );
}

export default Favorites;
