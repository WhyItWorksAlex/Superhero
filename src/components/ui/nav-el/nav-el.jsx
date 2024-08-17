import React from "react";
import { StyledLink } from "./styles";

function NavEl({
  children, // дочерний элемент, отображаемый в кнопке
  link, // ссылка
  className, // класс
  onClick, // событие по клику
  ...props // остальные переданные пропсы
}) {
  return (
    <StyledLink
      {...props}
      {...(link ? { to: link } : { as: "span"})}
      className={className}
    >
      {children}
    </StyledLink>
  );
}

export default NavEl;