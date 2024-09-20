import React, { useState } from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import { GlobalStyle } from "./styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "/src/components/ui/scroll-to-top/scroll-to-top";
import { APPROUTE } from "/src/const";
import ClashPage from "/src/components/pages/clash-page/clash-page";
import HistoryPage from "/src/components/pages/history-page/history-page";
import BiographyPage from "/src/components/pages/biography-page/biography-page";

function App () {

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path={APPROUTE.MAIN.to} element={<PageWrapper />}>
            <Route index element={<ClashPage />} />
            <Route
              exact
              path={APPROUTE.HISTORY.to}
              element={<HistoryPage />}
            />
            <Route
              exact
              path={APPROUTE.INFO.to}
              element={<BiographyPage />}
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
