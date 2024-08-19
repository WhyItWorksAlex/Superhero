import React from "react";
import { StyledNavEl, StyledLink } from "./styles";

function NavEl({
  children, // дочерний элемент, отображаемый в кнопке
  link, // ссылка
  className, // класс
  onClick, // событие по клику
  ...props // остальные переданные пропсы
}) {
  return (
    <StyledNavEl {...props} className={className}>
      <StyledLink
        {...props}
        {...(link ? { to: link } : { as: "span"})}
        className={className}
      >
        {children}
      </StyledLink>
    </StyledNavEl>
  );
}

export default NavEl;