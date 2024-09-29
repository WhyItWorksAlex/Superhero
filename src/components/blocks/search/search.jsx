import React, { useState, useEffect, useMemo } from "react";
import { Ul, StyledPaginationBtn , Content, UlHeroes, Li, HeroBtn, NextPageBtn, PrevPageBtn } from "./styles";
import {ALPHABET, MAXVISIBLENAMES, MAXVISIBLENAMESTABLET, MAXVISIBLENAMESMOBILE, DEFAULTBIOGRAPHYHEROID, DEFAULTBIOGRAPHYHERONAME} from '../../../const'
import useBiographyStore from "../../../store/biography-store";
import SearchInput from "../../ui/search-input/search-input";
import useMediaService from "../../../services/MediaService";

import { loadHeroesList } from "../../../utils";

function Search ( ) {

  const {isTablet, isMobile} = useMediaService()

  const quantityVisibleNames = isMobile ? MAXVISIBLENAMESMOBILE : (isTablet ? MAXVISIBLENAMESTABLET : MAXVISIBLENAMES);

  // State with information about heroes from Zustand

  const {
          biographyHero, 
          setBiographyHero,
          curPage,
          setCurPage,
          changeCurPage,
          curLetter, 
          setCurLetter
        } = useBiographyStore(({
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

  // Filtred heroes array with first letter

  function filterByFirstLetter(arr, letter = curLetter) {
    let filtredArray = arr.filter(obj => obj.name.startsWith(letter.toUpperCase()));
    setfiltredHeroes(filtredArray);
    setPages(Math.ceil(filtredArray.length / quantityVisibleNames));
  };

  // Find position choosen hero

  function findPositionByName(id, name, arr = heroesList) {
    const filtredArray = arr.filter(obj => obj.name.startsWith(name[0].toUpperCase()));
    const index = filtredArray.findIndex((el) => el.id === +id);
    if (index !== -1) {
      setfiltredHeroes(filtredArray);
      setPages(Math.ceil(filtredArray.length / quantityVisibleNames));
      setCurLetter(name[0].toLowerCase())
      setCurPage(Math.ceil((index + 1) / quantityVisibleNames))
    } else {
      return
    }
  };

  useEffect(() => {
    getHeroes
    .then(res => {
      setHeroesList(res)
      return res;
    })
    .then(res => {
      filterByFirstLetter(res)
    })  
  }, [])

  useEffect(() => {
    if (!curPage) {
      findPositionByName(DEFAULTBIOGRAPHYHEROID, DEFAULTBIOGRAPHYHERONAME) 
    }
  }, [heroesList])

  return (
    <>
      <SearchInput findPositionByName={findPositionByName}/>
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
              {index < quantityVisibleNames * curPage && index >= (curPage === 1 ? 0 : quantityVisibleNames * (curPage - 1)) && (
                <Li key={index}>
                  <HeroBtn 
                    $isActive={(+biographyHero.id === hero.id)}  
                    onClick={() => {setBiographyHero(hero.id)}}                
                  >
                    {hero.name}
                  </HeroBtn>
                </Li>
              )}
            </React.Fragment>
          ))}
        </UlHeroes>
          {curPage > 1 && (
            <PrevPageBtn onClick={() => changeCurPage(-1)}></PrevPageBtn>
          )}
          {curPage < pages && (
            <NextPageBtn onClick={() => changeCurPage(1)}></NextPageBtn>
          )}
      </Content>
    </>
  );
}

export default Search;