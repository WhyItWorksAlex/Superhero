import React from "react";
import Header from "/src/components/layout/header/header";
import { StyledMain } from "./styles";

import { Outlet } from "react-router-dom";


function PageWrapper( ) {
  
  return (
    <>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
      <footer />
    </>
  );
}

export default PageWrapper;