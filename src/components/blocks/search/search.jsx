import React, { useState, useEffect, useMemo } from "react";
import { Ul, StyledPaginationBtn , Content, UlHeroes, HeroBtn, NextPageBtn, PrevPageBtn } from "./styles";
// import { heroes } from "/src/const";
import {ALPHABET, MAXVISIBLENAMES} from '../../../const'
import useStore from "../../../store/biography-store";

import { loadHeroesList } from "../../../utils";

function Search ( ) {

  // State with information about heroes from Zustand

  const {
          biographyHero, 
          setBiographyHero,
          curPage,
          setCurPage,
          changeCurPage,
          curLetter, 
          setCurLetter
        } = useStore(({
          biographyHero, 
          setBiographyHero,
          curPage,
          setCurPage,
          changeCurPage,
          curLetter, 
          setCurLetter
        }) => ({
          biographyHero, 
          setBiographyHero,
          curPage,
          setCurPage,
          changeCurPage,
          curLetter, 
          setCurLetter
        }))

  const [pages, setPages] = useState();
  const [filtredHeroes, setfiltredHeroes] = useState([]);
  const [heroesList, setHeroesList] = useState([]);

  // Get hero from json file

  const getHeroes = useMemo(async () => {
    return await loadHeroesList()
  }, [])

  // Fultred heroes array with first letter

  function filterByFirstLetter(arr, letter = curLetter) {
    let filtredArray = arr.filter(obj => obj.name.startsWith(letter.toUpperCase()));
    setfiltredHeroes(filtredArray);
    setPages(Math.ceil(filtredArray.length / MAXVISIBLENAMES));
  };

  useEffect(() => {
    getHeroes
    .then(res => {
      setHeroesList(res)
      return res;
    })
    .then(res => filterByFirstLetter(res))
  }, [])

  return (
    <>
      <Ul>
        {ALPHABET.split('').map((letter, index) => (
          <li key={index}>
            <StyledPaginationBtn 
              $isActive={(curLetter === letter)}  
              onClick={() => {
                setCurLetter(letter);
                filterByFirstLetter(heroesList, letter);
                setCurPage(1);
              }}>
              {letter.toUpperCase()}
            </StyledPaginationBtn>
          </li>
        ))}
      </Ul>
      <Content>
        <UlHeroes>
          {filtredHeroes.map((hero, index) => (
            <React.Fragment key={index}>
              {index < MAXVISIBLENAMES * curPage && index >= (curPage === 1 ? 0 : MAXVISIBLENAMES * (curPage - 1)) && (
                <li key={index}>
                  <HeroBtn 
                    $isActive={(+biographyHero.id === hero.id)}  
                    onClick={() => {setBiographyHero(hero.id)}}                    
                  >
                    {hero.name}
                  </HeroBtn>
                </li>
              )}
            </React.Fragment>
          ))}
        </UlHeroes>
          {curPage > 1 && (
            <PrevPageBtn onClick={() => changeCurPage(-1)}></PrevPageBtn>
          )}
          {pages !== 1 && curPage < pages && (
            <NextPageBtn onClick={() => changeCurPage(1)}></NextPageBtn>
          )}

      </Content>
    </>
  );
}

export default Search;