import React, { useState } from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import { GlobalStyle } from "./styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "/src/components/ui/scroll-to-top/scroll-to-top";
import { AppRoute, qtyHeroes } from "/src/const";
import ClashPage from "/src/components/pages/clash-page/clash-page";
import HistoryPage from "/src/components/pages/history-page/history-page";
import BiographyPage from "/src/components/pages/biography-page/biography-page";
import { getRandomInteger } from "/src/utils";
import useHeroService from "../../services/hero-service";


function App () {

  // Create useHeroService

  const {loading, error, getCharacter} = useHeroService()

  // State history list

  const [historyFightsList, sethistoryFightsList] = useState([]);

  // Function update hero

  const updateChar = (id, setter) => {
    getCharacter(id)
      .then((response) => {
        setter(response)
      })
      .catch((error) => {
        console.error("Ошибка при загрузке персонажа на страницу:", error);
        throw error;
      })
  };

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<ClashPage sethistoryFightsList={sethistoryFightsList} historyFightsList={historyFightsList} updateChar={updateChar} />} />
            <Route
              exact
              path={AppRoute.HISTORY}
              element={<HistoryPage historyFightsList={historyFightsList} />}
            />
            <Route
              exact
              path={AppRoute.INFO}
              element={<BiographyPage updateChar={updateChar} />}
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
