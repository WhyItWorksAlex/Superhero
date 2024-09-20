import { useState, useEffect } from "react";
import { Overlay, SearchForm, Input, Label, WrapperResults, HeroResult } from "./styles";
import useBiographyStore from "../../../store/biography-store";
import useDebounce from "../../../hooks/debounce.hook";

const SearchInput = () => {

  // State with information about heroes from Zustand

  const {
    setBiographyHero, 
    getCharacterByName,
    loadingSearch
  } = useBiographyStore(({
    setBiographyHero,
    getCharacterByName,
    loadingSearch 
  }) => ({
    setBiographyHero,
    getCharacterByName,
    loadingSearch 
  }))



  // Dynamic
  const [term, setTerm] = useState('');
  const [searchHeroesList, setSearchHeroesList] = useState([]);
  const [dnone, setDnone] = useState(true);

  const debouncedTerm = useDebounce(term, 400)

  // Add smth in search Input 

  function addTerm (e) {
    setTerm(e.currentTarget.value);
  }

  const onFocus = () => {
    setDnone(false)
  }

  const onBlur = () => {
    setTimeout(() => setDnone(true),150)
  }

  const loadCharacterbyName = (request) => {
    if(!request) {
        return
    }
    getCharacterByName(request).then(data => setSearchHeroesList(data))
  }

  useEffect(()=> {
    if(term === '') {
      setSearchHeroesList([]);
    }
    loadCharacterbyName(debouncedTerm)
    //eslint-disable-next-line
  },[debouncedTerm])

  function onSubmit (e) {
    e.preventDefault();

  }

  const renderResults = (debouncedTerm && searchHeroesList.length === 0) ? <span>nothing</span> : searchHeroesList.map(({id, name, image}) => 
    <HeroResult key={id}>
      <button onClick={() => {setBiographyHero(id)}} >         
        <img src={image} alt={name}/>
        <span className='findCharacter__desc'>{name}</span>        
      </button>
    </HeroResult>)

  const noDisplay = dnone ? 'none' : 'block'

  return (
    <>
      <SearchForm
        onSubmit={onSubmit}
      >
        <Label>   
          <Input
            name='hero-search'
            type='text'
            value={term}
            onFocus={onFocus} 
            onBlur={onBlur} 
            onChange={addTerm}
            onSubmit={onSubmit}
            autoComplete="off" 
            placeholder='find hero by name'
          />
        </Label>
        <WrapperResults style={{display: noDisplay}}>
          {loadingSearch ? 'loading...' : renderResults}  
        </WrapperResults>
      </SearchForm>
      {dnone ? null : <Overlay /> }
    </>
  )
}

export default SearchInput