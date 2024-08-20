import React from "react";
import Modal from "../../blocks/modal/modal";
import HeroBigCard from "../../blocks/hero-big-card/hero-big-card";


function HeroBigCardModal ( {isActiveBigCardHeroModal, setIsActiveBigCardHeroModal, hero, getStats} ) {

  const marginTop = '5vh';

  return (
    <Modal isActiveModal={isActiveBigCardHeroModal} setIsActiveModal={setIsActiveBigCardHeroModal} marginTop={marginTop}>
      <HeroBigCard hero={hero} getStats={getStats}/>
    </Modal>
  );
}

export default HeroBigCardModal;