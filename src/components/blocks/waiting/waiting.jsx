import React, { useState } from "react";
import { WrapperWaiting, WaitingText, WaitingImg, WaitingImgLu } from "./styles";

function Waiting({ $isFunny }) {

  
  return (
    <WrapperWaiting $isFunny={$isFunny}>
      <WaitingText>loading...</WaitingText>
      {$isFunny ? (
        <WaitingImgLu src='/src/assets/liu-kang-bicycle-kick.gif' />
      ) : (
        <WaitingImg src='/src/assets/spinner.svg' />
      )}
    </WrapperWaiting>
  );
}

export default Waiting;