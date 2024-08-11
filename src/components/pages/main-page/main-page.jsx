import React, { useEffect } from "react";
import { StyledButton, StyledColor } from "./styles";

function MainPage( {getRandomInteger, getApiData, hero} ) {
  useEffect (() => {}, [hero])

  if(hero.length !== 0) {
    console.log(hero)

    const handle = () => {
      const randomId = getRandomInteger(1, 730)
      console.log(randomId)
      getApiData(randomId)
    }

    let isGood = true;

    if (hero.biography.alignment !== "good") {
      isGood = false
    }
  

    return (
      <>
        <p>{hero.id}</p>
        <p>имя его {hero.name}</p>
        <div style={{position: 'relative'}}> 
          <img src={hero.image.url} />
          <StyledButton style={{position: 'absolute', left: 0}} type='button' onClick={handle}>Сменить</StyledButton>
        </div>
        
        <div>
          <ul>Боевые характеристики:</ul>
            <li key={hero.id + 1}>{hero.powerstats.combat !== 'null' ? hero.powerstats.combat : 25}</li>
            <li key={hero.id + 2}>{hero.powerstats.durability}</li>
            <li key={hero.id + 3}>{hero.powerstats.intelligence}</li>
            <li key={hero.id + 4}>{hero.powerstats.power}</li>
            <li key={hero.id + 5}>{hero.powerstats.speed}</li>
            <li key={hero.id + 6}>{hero.powerstats.strength}</li>
        </div>

        <StyledColor $isGood={isGood}></StyledColor>
        
        <StyledButton type='button' onClick={handle}>Сменить</StyledButton>
      </>
    );
  }

}

export default MainPage;