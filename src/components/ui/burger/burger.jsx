import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BurgerBtn, Line, Legend } from "./styles";

function Burger( {isActive, setIsActive, children} ) {

  const pageUrl = useLocation().pathname;

  useEffect(() => {
    setIsActive(false)
  }, [pageUrl])

  function onHandle () {
    setIsActive((prev) => !prev)
  }

  return (
    <BurgerBtn type="button" onClick={onHandle}>
      <Line $isActive={isActive}></Line>
      <Legend>Открыть меню</Legend>
      {children}
    </BurgerBtn>
  );
}

export default Burger;