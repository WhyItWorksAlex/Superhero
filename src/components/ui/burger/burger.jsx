
import { BurgerBtn, Line, Legend } from "./styles";

function Burger( {isActive, setIsActive, children} ) {



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