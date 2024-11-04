import Header from "./components/Header";
import Search from "./components/Search";
import styled from "styled-components";
import LastestsReleases from "./components/LatestsReleases";

const AppConteiner = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
`;

function App() {
  return (
    <AppConteiner>
      <Header />
      <Search />
      <LastestsReleases />
    </AppConteiner>
  );
}

export default App;
