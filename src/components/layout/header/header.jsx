import React from "react";
import Neon from "../../ui/neon/neon";
import Nav from "../nav/nav";

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