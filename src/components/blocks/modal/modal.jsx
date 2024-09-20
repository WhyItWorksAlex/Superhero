import React, { useEffect } from "react";
import { StyledWinnerModal, Wrapper, StyledCloseBtn} from "./styles";


function Modal ( {setIsActiveModal, marginTop, children} ) {

  // Close modal with key ESC

  const closeKey = (e) => {
    if (e.key === 'Escape'){
      closeModal();
    }    
  }

  // Close modal click outside modal

  const closeOut = (e) => {
    if (e.target.getAttribute('data-modal')){
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
  },[])

  // Function close Modal Window

  const closeModal = () => {
    document.body.style.overflow = '';
    setIsActiveModal(false);
  }

  return (
    <StyledWinnerModal data-modal='modal'>
      <Wrapper $marginTop={marginTop}>
        <StyledCloseBtn type="button" onClick={closeModal} >✘</StyledCloseBtn>
        {children}
      </Wrapper>
    </StyledWinnerModal>
  );
}

export default Modal;