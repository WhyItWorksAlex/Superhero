import React, { useEffect } from "react";
import { StyledWinnerModal, Wrapper, StyledCloseBtn, StyledWinnerText } from "./styles";


function WinnerModal ( {isActiveWinnerModal, setIsActiveWinnerModal, lastFight} ) {
  
  // Listener keydown ESC when Winner Modal Window is open

  useEffect(() => {
    const close = (e) => {
      if (e.key === 'Escape' && isActiveWinnerModal === true){
        closeModal();
      }    
    }
    document.addEventListener('keydown', close)
    return () => document.removeEventListener('keydown', close)
  },[isActiveWinnerModal])

  // Function close Winner Modal Window

  const closeModal = () => {
    document.body.style.overflow = '';
    setIsActiveWinnerModal(false);
  }

  return (
    <StyledWinnerModal $isActive={isActiveWinnerModal}>
      <Wrapper>
        {!!lastFight && (
          <>
            <StyledCloseBtn type="button" onClick={closeModal} >✘</StyledCloseBtn>
            <StyledWinnerText>{lastFight.winner} wins</StyledWinnerText>
          </>
        )}
      </Wrapper>
    </StyledWinnerModal>
  );
}

export default WinnerModal;