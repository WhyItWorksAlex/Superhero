import React, { useState, useEffect } from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import { GlobalStyle } from "./styles";

const App = () => {

  const getRandomInteger = (min, max) => {
    const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
    const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
    const result = Math.random() * (upper - lower + 1) + lower;
  
    return Math.floor(result);
  };

  const [hero, setHero] = useState([]);


  const getApiData = async (id) => {
    const response = await fetch(
      `https://superheroapi.com/api.php/8c5c7cad236740defc0bb7b95c4e81e6/${id}`
    ).then((response) => response.json());
  
    // Обновим состояние
    setHero(response);
  };

  useEffect(() => {
    const randomId = getRandomInteger(1, 730)
    console.log(randomId)
    getApiData(randomId)
  }, []);


  return (
    <>
      <GlobalStyle />
      <PageWrapper getRandomInteger={getRandomInteger} getApiData={getApiData} hero={hero}/>
    </>
  );
};

export default App;
