import React from "react";
import { StyledWinnerModal, Wrapper } from "./styles";


function WinnerModal ( {isActiveWinnerModal, setIsActiveWinnerModal, lastFight} ) {

  const closeModal = () => {
    document.body.style.overflow = '';
    setIsActiveWinnerModal(false);
  }

  return (
    <StyledWinnerModal $isActive={isActiveWinnerModal}>
      <Wrapper>
        {!!lastFight && (
          <>
            <button type="button" onClick={closeModal}>клоз</button>
            <p>{lastFight.winner}</p>
          </>
        )}
      </Wrapper>
    </StyledWinnerModal>
  );
}

export default WinnerModal;