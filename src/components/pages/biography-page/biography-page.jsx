import { useEffect } from "react";
import { StyledBiographyPage, P } from "./styles";
import HeroBigCard from "/src/components/blocks/hero-big-card/hero-big-card";
import Search from "/src/components/blocks/search/search";
import Waiting from "/src/components/blocks/waiting/waiting";
import useBiographyStore from "../../../store/biography-store";

function BiographyPage() {

  // State with information about heroes from Zustand

  const {biographyHero, setBiographyHero, loading, loadingNewitem, error} = useBiographyStore(({biographyHero, setBiographyHero, loading, loadingNewitem, error}) => ({biographyHero, setBiographyHero, loading, loadingNewitem, error}))

  useEffect (() => {
    if (!biographyHero.id) {
      setBiographyHero(644)
    } 
  }, [])

  const card = (!loading && !error) ? <HeroBigCard hero={biographyHero} newLoading={loadingNewitem} /> : null;
  const load = loading ? <Waiting /> : null;

  return (
    <StyledBiographyPage>
      <P>This section is about heroes information. You can figure out powerstats, biography, appearance, work, connections and so on.</P>
      <Search />
      {card}
      {load}
    </StyledBiographyPage>
  );
}

export default BiographyPage;