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