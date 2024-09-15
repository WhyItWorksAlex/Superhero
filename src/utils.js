//Function get random number
export const getRandomInteger = (min, max, exclude = null) => {
  let result = Math.floor(Math.random() * (max - min + 1)) + min;
  while (result === exclude) {
    result = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return result
};

// Function debaunce
export const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

// Function validation hero stats

export const validateStat = (value) => {
  if (value === 'null') {
    return getRandomInteger(5, 100);
  } else if (value > 100) {
    return 100;
  } else if (value === 0) {
    return 1;
  }else {
    return value
  }
}

// Function check image

export const checkImage = (value, hero) => {
  switch (value) {
    case true: {
      return hero.image
    }
    case false: {
      return 'https://i.ibb.co/WcqzVwy/template-image.png'
    }
  }
}

// Function addZero to any Number

export function addZero (num) {
  if (num < 10) {
    return `0${num}`
  } else {
    return `${num}`
  }
}

// List of heroes

export async function loadHeroesList() {
  const response = await fetch('/heroesList.json');
  const data = await response.json();
  const heroes = data.heroes
  return heroes
}
