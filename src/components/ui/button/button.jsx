import React from "react";


function Button({
  children, // дочерний элемент, отображаемый в кнопке
  className, // класс
  onClick, // событие по клику
  ...props // остальные переданные пропсы
}) {
  return (
    <button
      {...props}
      {...{onClick, type: "button" }}
      className={className}
    >
      {children}
    </button>
  );
}

export default Button;
  

