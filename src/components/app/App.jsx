import React, { useState } from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import { GlobalStyle } from "./styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../ui/scroll-to-top/scroll-to-top";
import { AppRoute } from "/src/const";
import ClashPage from "/src/components/pages/clash-page/clash-page";
import HistoryPage from "../pages/history-page/history-page";


const App = () => {
  // State history list

  const [historyFightList, setHistoryFightList] = useState([]);

  // State with information about heroes

  const [hero1, setHero1] = useState([]);
  const [hero2, setHero2] = useState([]);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<ClashPage setHistoryFightList={setHistoryFightList} historyFightList={historyFightList} hero1={hero1} hero2={hero2} setHero1={setHero1} setHero2={setHero2} />} />
            <Route
              exact
              path={AppRoute.HISTORY}
              element={<HistoryPage historyFightList={historyFightList} />}
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
