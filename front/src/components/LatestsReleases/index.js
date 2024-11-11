import { books } from "./lastestRealesesData";
import styled from "styled-components";
import { Title } from "../Title";
import RecommendationCard from "../RecommendationCard";
import book2 from "../../img/livro2.png";

const LastestsReleasesContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NewBooks = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

function LastestsReleases() {
  return (
    <LastestsReleasesContainer>
      <Title colorText={"#EB9B00"} fontSize={"36px"}>
        ULTIMOS LANCAMENTOS
      </Title>
      <NewBooks>
        {books.map((book) => (
          <img src={book.src} alt="books" />
        ))}
      </NewBooks>
      <RecommendationCard
        title="Talvez você se interesse por"
        subtitle="Angular 11"
        description="Construindo uma aplicação com a plataforma Google"
        img={book2}
      />
    </LastestsReleasesContainer>
  );
}

export default LastestsReleases;
