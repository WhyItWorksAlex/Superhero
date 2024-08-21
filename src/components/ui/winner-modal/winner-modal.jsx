import React from "react";
import { StyledWinnerText } from "./styles";
import Modal from "/src/components/blocks/modal/modal";


function WinnerModal ( {isActiveWinnerModal, setIsActiveWinnerModal, lastFight} ) {

  const marginTop = '150px';

  return (
    <Modal isActiveModal={isActiveWinnerModal} setIsActiveModal={setIsActiveWinnerModal} marginTop={marginTop}>
        {!!lastFight && (
          <>
            <StyledWinnerText>{lastFight.winner !== 'draw' ? `${lastFight[lastFight.winner].name} wins` : 'draw'}</StyledWinnerText>
          </>
        )}
    </Modal>
  );
}

export default WinnerModal;