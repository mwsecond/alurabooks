import styled from "styled-components";
import Input from "../Input";
import { useState } from "react";
import { books } from "./dataSearch";

const SearchContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Result = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  p {
    width: 200px;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

export default function Search() {
  const [booksSearched, setBooksSearched] = useState([]);

  return (
    <SearchContainer>
      <Title>Já sabe por onde começar?</Title>
      <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
      <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={(e) => {
          const text = e.target.value;
          const searchResult = books.filter((book) => book.name.includes(text));
          setBooksSearched(searchResult);
        }}
      />
      {booksSearched.map((book) => (
        <Result>
          <img src={book.src} alt="book" />
          <p>{book.name}</p>
        </Result>
      ))}
    </SearchContainer>
  );
}
