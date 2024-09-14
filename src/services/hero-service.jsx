import { useHttp } from "../hooks/http.hook";
import { validateStat } from "../utils";

const useHeroService = () => {

  const {loading, request, error, clearError} = useHttp();

  const _apiBase = 'https://superheroapi.com/api.php/8c5c7cad236740defc0bb7b95c4e81e6/';

  // Function get hero from by API

  const getCharacter = async (id) => {
    const res = await request(`${_apiBase}${id}`);
    return _transformHero(res);
  }

  // Function update hero

  const updateChar = async (id, setter) => {
    await getCharacter(id)
      .then((response) => {
        setter(response)
      })
      .catch((error) => {
        console.error("Ошибка при загрузке персонажа на страницу:", error);
        throw error;
      })
  };

  const _transformHero = (hero) => {
    return {
      id: hero.id,
      name: hero.name,
      image: hero.image.url,
      fullName: hero.biography['full-name'],
      alignment: hero.biography.alignment,
      race: hero.appearance.race === 'null' ? '-' : hero.appearance.race,
      gender: hero.appearance.gender,
      height: hero.appearance.height[1] === '0 cm' ? '-' : hero.appearance.height[1],
      weight: hero.appearance.weight[1] === '0 kg' ? '-' : hero.appearance.weight[1],
      birthPlace: hero.biography['place-of-birth'],
      alterEgos: hero.biography['alter-egos'],
      firstAppearance: hero.biography['first-appearance'],
      work: hero.work.occupation,
      connections: hero.connections['group-affiliation'],
      stats: [
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
      ]
    }
  }

  return {loading, error, clearError, getCharacter, updateChar}
}

export default useHeroService;
