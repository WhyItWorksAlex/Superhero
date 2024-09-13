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

// Function create array with hero stats

export const getStats = (hero) => {
  return [
    {
      title: "Combat",
      content: validateStat(hero.powerstats.combat),
      image: "https://i.ibb.co/6nskgZ6/1.png",
      coefficient: 0.25,
    },
    {
      title: "Power",
      content: validateStat(hero.powerstats.power),
      image: "https://i.ibb.co/Jtp2HW5/2.png",
      coefficient: 0.20,
    },
    {
      title: "Durability",
      content: validateStat(hero.powerstats.durability),
      image: "https://i.ibb.co/LdH2Sby/3.png",
      coefficient: 0.15,
    },
    {
      title: "Strength",
      content: validateStat(hero.powerstats.strength),
      image: "https://i.ibb.co/PY9pSDw/4.png",
      coefficient: 0.15,
    },
    {
      title: "Intelligence",
      content: validateStat(hero.powerstats.intelligence),
      image: "https://i.ibb.co/xHCLyJx/5.png",
      coefficient: 0.15,
    },
    {
      title: "Speed",
      content: validateStat(hero.powerstats.speed),
      image: "https://i.ibb.co/DPF2WNZ/6.png",
      coefficient: 0.10,
    },
  ];
}