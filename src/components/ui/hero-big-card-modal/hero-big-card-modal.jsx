import React from "react";
import Modal from "/src/components/blocks/modal/modal";
import HeroBigCard from "/src/components/blocks/hero-big-card/hero-big-card";


function HeroBigCardModal ( {isActiveBigCardHeroModal, setIsActiveBigCardHeroModal, hero} ) {

  const marginTop = '5vh';

  return (
    <Modal isActiveModal={isActiveBigCardHeroModal} setIsActiveModal={setIsActiveBigCardHeroModal} marginTop={marginTop}>
      <HeroBigCard hero={hero} />
    </Modal>
  );
}

export default HeroBigCardModal;