import { create } from "zustand";
import { validateStat } from "../utils";
import toast from "react-hot-toast";

const storageBiographyPage = +sessionStorage.getItem("storageBiographyPage");
const storageBiographyLetter = sessionStorage.getItem("storageBiographyLetter");

const useBiographyStore = create((set, get) => ({
  biographyHero: [],
  loading: false,
  loadingNewitem: false,
  loadingSearch: false,
  error: null,
  _apiBase: "https://superheroapi.com/api.php/8c5c7cad236740defc0bb7b95c4e81e6/",
  _apiSearch: "search/",

  // Search information
  curPage: storageBiographyPage ? storageBiographyPage : null,
  curLetter: storageBiographyLetter ? storageBiographyLetter : "s",

  async request(url, method = "GET", body = null, headers = { "Content-Type": "application/json" }) {
    toast.loading("Hero loading...", { id: "mainToast" });
    set({ error: null });
    if (get().biographyHero.length === 0 && !url.includes(get()._apiSearch)) {
      set({ loading: true });
    } else if (url.includes(get()._apiSearch)) {
      set({ loadingSearch: true });
    } else {
      set({ loadingNewitem: true });
    }

    try {
      const response = await fetch(url, { method, body, headers });
      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }
      const data = await response.json();
      set({ loading: false });
      set({ loadingNewitem: false });
      set({ loadingSearch: false });
      toast.success("Hero loaded!", { id: "mainToast" });
      return data;
    } catch (e) {
      set({ loading: false });
      set({ loadingNewitem: false });
      set({ loadingSearch: false });
      set({ error: e.message });
      toast.error("Hero loading error!", { id: "mainToast" });
      throw e;
    }
  },

  async getCharacter(id) {
    const response = await get().request(`${get()._apiBase}${id}`);
    return get()._transformHero(response);
  },

  async setBiographyHero(id) {
    sessionStorage.setItem("storageBiographyChar", id);
    const biographyHero = await get().getCharacter(id);
    set({ biographyHero });
  },

  async getCharacterByName(letter) {
    try {
      const response = await get().request(`${get()._apiBase}${get()._apiSearch}${letter}`);
      let heroesArr = response.results.filter((item) => item.name.toLowerCase().startsWith(letter.toLowerCase()));
      return heroesArr.map((item) => get()._transformHero(item));
    } catch (error) {
      return [];
    }
  },

  setCurPage(page) {
    sessionStorage.setItem("storageBiographyPage", page);
    set({ curPage: page });
  },

  changeCurPage(num) {
    sessionStorage.setItem("storageBiographyPage", storageBiographyPage + num);
    set((state) => ({ curPage: state.curPage + num }));
  },

  setCurLetter(letter) {
    sessionStorage.setItem("storageBiographyLetter", letter);
    set({ curLetter: letter });
  },

  _transformHero(hero) {
    return {
      id: hero.id,
      name: hero.name,
      image: hero.image.url,
      fullName: hero.biography["full-name"],
      alignment: hero.biography.alignment,
      race: hero.appearance.race === "null" ? "-" : hero.appearance.race,
      gender: hero.appearance.gender,
      height: hero.appearance.height[1] === "0 cm" ? "-" : hero.appearance.height[1],
      weight: hero.appearance.weight[1] === "0 kg" ? "-" : hero.appearance.weight[1],
      birthPlace: hero.biography["place-of-birth"],
      alterEgos: hero.biography["alter-egos"],
      firstAppearance: hero.biography["first-appearance"],
      work: hero.work.occupation,
      connections: hero.connections["group-affiliation"],
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
          coefficient: 0.2,
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
          coefficient: 0.1,
        },
      ],
    };
  },
}));

export default useBiographyStore;
