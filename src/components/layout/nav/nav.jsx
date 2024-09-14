import React from "react";
import { useLocation } from "react-router-dom";
import { APPROUTE } from "/src/const";
import NavEl from "/src/components/ui/nav-el/nav-el";
import { StyledNav, StyledUl } from "./styles";

function Nav() {

  const links = Object.values(APPROUTE)

  const pageUrl = useLocation().pathname;

  return (
    <StyledNav>
      <StyledUl>
        {links          
          .map((link) => (
            <li key={link.to}>
              {link.to !== pageUrl ? (
                <NavEl link={link.to}>{link.text}</NavEl>
              ) : (
                <NavEl $isActive={true}>{link.text}</NavEl>
              )}
            </li>
          ))}
      </StyledUl>
    </StyledNav>
  );
}

export default Nav;