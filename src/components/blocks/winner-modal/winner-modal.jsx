import React from "react";
import { StyledWinnerModal, Wrapper } from "./styles";


function WinnerModal( {isActiveWinnerModal, setIsActiveWinnerModal} ) {

  const closeModal = () => {
    document.body.style.overflow = '';
    setIsActiveWinnerModal(false);
  }

  return (
    <StyledWinnerModal $isActive={isActiveWinnerModal}>
      <Wrapper>
        <button type="button" onClick={closeModal}>клоз</button>
      </Wrapper>
    </StyledWinnerModal>
  );
}

export default WinnerModal;