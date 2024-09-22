import {lazy, Suspense} from 'react'
import { GlobalStyle } from "./styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import {ClashPage, HistoryPage, BiographyPage} from '../pages'
import ScrollToTop from "/src/components/ui/scroll-to-top/scroll-to-top";
import { APPROUTE } from "/src/const";

const Page404 = lazy(() => import("../pages/Page404"));

function App () {

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Toaster position="bottom-right" />
        <Suspense fallback={<div>Loading...</div>}>
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
                element={<Page404 />}
              />
            </Route>
          </Routes> 
        </Suspense>       
      </BrowserRouter>  
    </>
  );
};

export default App;
