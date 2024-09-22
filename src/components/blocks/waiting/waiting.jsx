import { WrapperWaiting, WaitingText, WaitingImg, WaitingImgLu } from "./styles";

function Waiting({ $isFunny }) {

  
  return (
    <WrapperWaiting $isFunny={$isFunny}>
      <WaitingText>loading...</WaitingText>
      {$isFunny ? (
        <WaitingImgLu src='/liu-kang-bicycle-kick.gif' />
      ) : (
        <WaitingImg src='/spinner.svg' />
      )}
    </WrapperWaiting>
  );
}

export default Waiting;