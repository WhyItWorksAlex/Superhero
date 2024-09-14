import React, { useEffect } from "react";
import { StyledWinnerModal, Wrapper, StyledCloseBtn} from "./styles";


function Modal ( {isActiveModal, setIsActiveModal, marginTop, children} ) {

  // Close modal with key ESC

  const closeKey = (e) => {
    if (e.key === 'Escape' && isActiveModal === true){
      closeModal();
    }    
  }

  // Close modal click outside modal

  const closeOut = (e) => {
    if (e.target.getAttribute('data-modal') && isActiveModal === true){
      closeModal();
    }    
  }
  
  // Listener keydown ESC when Modal Window is open

  useEffect(() => {
    document.addEventListener('keydown', closeKey)
    document.addEventListener('click', closeOut)
    return () => {
      document.removeEventListener('keydown', closeKey);
      document.removeEventListener('click', closeOut)
    }
  },[isActiveModal])

  // Function close Modal Window

  const closeModal = () => {
    document.body.style.overflow = '';
    setIsActiveModal(false);
  }

  return (
    <StyledWinnerModal $isActive={isActiveModal} data-modal='modal'>
      <Wrapper $marginTop={marginTop}>
        <StyledCloseBtn type="button" onClick={closeModal} >✘</StyledCloseBtn>
        {children}
      </Wrapper>
    </StyledWinnerModal>
  );
}

export default Modal;