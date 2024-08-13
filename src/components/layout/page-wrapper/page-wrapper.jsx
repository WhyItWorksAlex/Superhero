import React from "react";
import Header from "../header/header";
import ClashPage from "/src/components/pages/clash-page/clash-page";

import { StyledMain } from "./styles";


function PageWrapper( ) {
  
  return (
    <>
      <Header />
      <StyledMain>
        <ClashPage />
      </StyledMain>
      <footer />
    </>
  );
}

export default PageWrapper;