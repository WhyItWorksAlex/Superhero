import React, { useState, useEffect } from "react";
import HeroCard from "../../ui/hero-card/hero-card";
import { getRandomInteger } from "../../../utils";


function ClashPage( ) {
  const [hero1, setHero1] = useState([]);
  const [hero2, setHero2] = useState([]);


  const getApiData = async (id, heroNum) => {
    const response = await fetch(
      `https://superheroapi.com/api.php/8c5c7cad236740defc0bb7b95c4e81e6/${id}`
    )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(`Could not fetch ${url}, status: ${response.status}`);
    });

    // Обновим состояние
    if(heroNum === 1) {
      setHero1(response);
    } else {
      setHero2(response);
    }

  };

  useEffect(() => {
    getApiData(getRandomInteger(1, 730), 1)
    getApiData(getRandomInteger(1, 730), 2)
  }, []);

  console.log(hero1)

  return (
    <>
      {(Boolean(hero1.name) && Boolean(hero2.name)) ? (
        <>
          <HeroCard name='hero1' getApiData={getApiData} hero={hero1}/>
          <HeroCard name='hero2' getApiData={getApiData} hero={hero2}/>
        </>
      ) : (
        <>
          <p>ТУТ ПОКА ПУСТО</p>
        </>
      )}
    </>
  );
}

export default ClashPage;