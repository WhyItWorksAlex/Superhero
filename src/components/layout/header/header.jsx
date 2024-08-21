import React from "react";
import Neon from "/src/components/ui/neon/neon";
import Nav from "/src/components/layout/nav/nav";

import { StyledHeader } from "./styles";

function Header() {
  return (
    <StyledHeader> 
      <Neon />
      <Nav />
    </StyledHeader>
  );
}

export default Header;