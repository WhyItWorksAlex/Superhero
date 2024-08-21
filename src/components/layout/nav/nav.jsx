import React from "react";
import { useLocation } from "react-router-dom";
import { AppRoute } from "/src/const";
import NavEl from "/src/components/ui/nav-el/nav-el";
import { StyledNav, StyledUl } from "./styles";

const links = [
  {
    to: AppRoute.MAIN,
    text: 'Clash',
  },
  { 
    to: AppRoute.HISTORY,
    text: 'Fights record',
  },
  { 
    to: AppRoute.INFO,
    text: 'Heroes biography',
  },
];

function Nav() {
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