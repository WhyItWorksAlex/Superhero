import React from "react";
import MainPage from "../../pages/main-page/main-page";

import { MainWrapper } from "./styles";

function PageWrapper(props) {
  return (
    <>
      <header />
      <MainWrapper>
        <MainPage {...props}/>
      </MainWrapper>
      <footer />
    </>
  );
}

export default PageWrapper;