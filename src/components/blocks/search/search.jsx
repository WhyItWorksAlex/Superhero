import React, { useState, useEffect } from "react";
import { Ul, StyledPaginationBtn , Content, UlHeroes, HeroBtn, NextPageBtn, PrevPageBtn } from "./styles";
import { heroes } from "../../../const";

function Search ( {getApiData} ) {

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const [pages, setPages] = useState();
  const [arrayHeroes, setArrayHeroes] = useState([]);
  const [curPage, setCurPage] = useState(1);

  function filterByFirstLetter(arr, letter) {
    let filtredArray = arr.filter(obj => obj.name.startsWith(letter.toUpperCase()));
    setArrayHeroes(filtredArray);
    setPages(Math.ceil(filtredArray.length / 18));
  };

  useEffect(() => {
    filterByFirstLetter(heroes, "a")
  }, [])

  return (
    <>
      <Ul>
        {alphabet.split('').map((letter, index) => (
          <li key={index}>
            <StyledPaginationBtn  
              onClick={() => {
                filterByFirstLetter(heroes, letter);
                setCurPage(1);
              }}>
              {letter.toUpperCase()}
            </StyledPaginationBtn>
          </li>
        ))}
      </Ul>
      <Content>
        <UlHeroes>
          {arrayHeroes.map((name, index) => (
            <React.Fragment key={index}>
              {index < 18 * curPage && index >= (curPage === 1 ? 0 : 18 * (curPage - 1)) && (
                <li key={index}>
                  <HeroBtn onClick={() => {getApiData(name.id, 3)}}>{name.name}</HeroBtn>
                </li>
              )}
            </React.Fragment>
          ))}
        </UlHeroes>
          {curPage > 1 && (
            <PrevPageBtn onClick={() => setCurPage((prev) => prev - 1)}></PrevPageBtn>
          )}
          {pages !== 1 && curPage < pages && (
            <NextPageBtn onClick={() => setCurPage((prev) => prev + 1)}></NextPageBtn>
          )}

      </Content>
    </>
  );
}

export default Search;