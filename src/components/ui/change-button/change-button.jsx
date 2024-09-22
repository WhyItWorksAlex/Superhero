import { StyledButton } from "./styles";
import { getRandomInteger, debounce } from "/src/utils";
import { QTYHEROES } from "/src/const";
import toast from 'react-hot-toast';

function ChangeButton( {setHero, idArray, children} ) {
  
  const handle = () => {
    let randomId = getRandomInteger(1, QTYHEROES)
    while (idArray.some((el) => el === randomId)) {
      randomId = getRandomInteger(1, QTYHEROES)
    }
    const loadingPromise = setHero(randomId)
    toast.promise(loadingPromise,
       {
         loading: 'Hero loading...',
         success: <b>Hero updated!</b>,
         error: <b>Could not update. Try again.</b>,
       }
     );
  }

  const handleDebounced = debounce(handle);

  return (
    <>
      <StyledButton type='button' onClick={handleDebounced}>{children}</StyledButton>
    </>
  );
}

export default ChangeButton;