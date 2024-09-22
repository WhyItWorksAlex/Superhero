import { StyledWinnerText } from "./styles";
import Modal from "/src/components/blocks/modal/modal";


function WinnerModal ( {setIsActiveWinnerModal, lastFight} ) {

  const marginTop = '150px';

  return (
    <Modal setIsActiveModal={setIsActiveWinnerModal} marginTop={marginTop}>
        {!!lastFight && (
          <>
            <StyledWinnerText>{lastFight.winner !== 'draw' ? `${lastFight[lastFight.winner].name} wins` : 'draw'}</StyledWinnerText>
          </>
        )}
    </Modal>
  );
}

export default WinnerModal;