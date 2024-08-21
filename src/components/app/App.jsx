import React, { useState } from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import { GlobalStyle } from "./styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "/src/components/ui/scroll-to-top/scroll-to-top";
import { AppRoute } from "/src/const";
import ClashPage from "/src/components/pages/clash-page/clash-page";
import HistoryPage from "/src/components/pages/history-page/history-page";
import BiographyPage from "/src/components/pages/biography-page/biography-page";
import { getRandomInteger } from "/src/utils";


function App () {
  // State history list

  const [historyFightsList, sethistoryFightsList] = useState([]);

  // State with information about heroes

  const [hero1, setHero1] = useState([]);
  const [hero2, setHero2] = useState([]);

  // State with information about biography heroe

  const [biographyHero, setBiographyHero] = useState([]);

  // // Function get hero data (on async/await)

  // const getApiData = async (id, num = 0) => {
  //   const response = await fetch(
  //     `https://superheroapi.com/api.php/8c5c7cad236740defc0bb7b95c4e81e6/${id}`
  //   )
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error(`Could not fetch ${url}, status: ${response.status}`);
  //     }
  //     return response.json();
  //   })
  //   .catch(() => {
  //     throw new Error(`Could not fetch, status: ${response.status}`);
  //   });

  //   if (num === 0) {
  //     return response
  //   } else if(num === 1) {
  //     if (response.name === hero2.name || response.name === hero1.name) {
  //       getApiData(getRandomInteger(1, qtyHeroes), 1)
  //     } else {
  //       setHero1(response);
  //       return response
  //     }
  //   } else if (num === 2) {
  //     if (response.name === hero2.name || response.name === hero1.name) {
  //       getApiData(getRandomInteger(1, qtyHeroes), 2)
  //     } else {
  //       setHero2(response);
  //       return response
  //     }
  //   } else if (num === 3) {
  //     setBiographyHero(response);
  //     return response;
  //   }
  // };

  // Function get hero data (on Promises)

  const getApiData = (id, num = 0) => {
    return fetch(`https://superheroapi.com/api.php/8c5c7cad236740defc0bb7b95c4e81e6/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }
        return response.json();
      })
      .then((response) => {
        if (num === 0) {
          return response;
        } else if (num === 1) {
          if (response.name === hero2.name || response.name === hero1.name) {
            return getApiData(getRandomInteger(1, qtyHeroes), 1);
          } else {
            setHero1(response);
            return response;
          }
        } else if (num === 2) {
          if (response.name === hero2.name || response.name === hero1.name) {
            return getApiData(getRandomInteger(1, qtyHeroes), 2);
          } else {
            setHero2(response);
            return response;
          }
        } else if (num === 3) {
          setBiographyHero(response);
          return response;
        }
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
        throw error;
      });
  };

  // Function create array with hero stats

  const getStats = (hero) => {
    return [
      {
        title: "Combat",
        content: validateStat(hero.powerstats.combat),
        image: "https://i.ibb.co/6nskgZ6/1.png",
        coefficient: 0.25,
      },
      {
        title: "Power",
        content: validateStat(hero.powerstats.power),
        image: "https://i.ibb.co/Jtp2HW5/2.png",
        coefficient: 0.20,
      },
      {
        title: "Durability",
        content: validateStat(hero.powerstats.durability),
        image: "https://i.ibb.co/LdH2Sby/3.png",
        coefficient: 0.15,
      },
      {
        title: "Strength",
        content: validateStat(hero.powerstats.strength),
        image: "https://i.ibb.co/PY9pSDw/4.png",
        coefficient: 0.15,
      },
      {
        title: "Intelligence",
        content: validateStat(hero.powerstats.intelligence),
        image: "https://i.ibb.co/xHCLyJx/5.png",
        coefficient: 0.15,
      },
      {
        title: "Speed",
        content: validateStat(hero.powerstats.speed),
        image: "https://i.ibb.co/DPF2WNZ/6.png",
        coefficient: 0.10,
      },
    ];
  }

  // Function validation hero stats

  function validateStat (value) {
    if (value === 'null') {
      return getRandomInteger(5, 100);
    } else if (value > 100) {
      return 100;
    } else if (value === 0) {
      return 1;
    }else {
      return value
    }
  }

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<ClashPage sethistoryFightsList={sethistoryFightsList} historyFightsList={historyFightsList} hero1={hero1} hero2={hero2} getApiData={getApiData} getStats={getStats}/>} />
            <Route
              exact
              path={AppRoute.HISTORY}
              element={<HistoryPage historyFightsList={historyFightsList} getStats={getStats} />}
            />
            <Route
              exact
              path={AppRoute.INFO}
              element={<BiographyPage biographyHero={biographyHero} setBiographyHero={setBiographyHero} getApiData={getApiData} getStats={getStats}/>}
            />
            <Route
              path="*"
              element={<h1 style={{color: 'white'}}>Ошибка 404. Страница не существует.</h1>}
            />
          </Route>
        </Routes>        
      </BrowserRouter>  
    </>
  );
};

export default App;
