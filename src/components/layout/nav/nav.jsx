import { useState } from "react";
import { useLocation } from "react-router-dom";
import { APPROUTE } from "/src/const";
import NavEl from "/src/components/ui/nav-el/nav-el";
import Burger from "../../ui/burger/burger";
import { StyledNav, StyledUl, Li } from "./styles";
import useMediaService from "../../../services/MediaService";

function Nav() {

  const [isActiveBurger, setIsActiveBurger] = useState(false)

  const {isMobile} = useMediaService()

  const links = Object.values(APPROUTE)

  const pageUrl = useLocation().pathname;

  const burger = isMobile ? <Burger isActive={isActiveBurger} setIsActive={setIsActiveBurger} /> : null

  return (
    <StyledNav>
      {burger}
      {isActiveBurger || !isMobile ? 
        <StyledUl>
          {links          
            .map((link) => (
              <Li key={link.to}>
                {link.to !== pageUrl ? (
                  <NavEl link={link.to}>{link.text}</NavEl>
                ) : (
                  <NavEl $isActive={true}>{link.text}</NavEl>
                )}
              </Li>
            ))}
        </StyledUl> 
        : null}     
    </StyledNav>
  );
}

export default Nav;