import ChangeButton from "/src/components/ui/change-button/change-button";
import { StyledMainButtons } from "./styles";
import useMainStore from "../../../store/main-hero-store";


function MainButtons( {idArray} ) {

  // State with information about heroes from Zustand

  const {setHero1, setHero2} = useMainStore(({setHero1, setHero2}) => ({setHero1, setHero2}))

  return (
    <StyledMainButtons>
      <ChangeButton setHero={setHero1} idArray={idArray}>Change left character</ChangeButton>
      <ChangeButton setHero={setHero2} idArray={idArray}>Change right character</ChangeButton>
    </StyledMainButtons>
  );
}

export default MainButtons;