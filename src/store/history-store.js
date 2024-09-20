import {create} from 'zustand';

const storageHistoryFightList = JSON.parse(sessionStorage.getItem('storageHistoryFightList'));

const useFightRecordStore = create((set, get) => ({
  
  historyFightsList: storageHistoryFightList ? storageHistoryFightList : [],

  setHistoryFightsList(fight) {
    sessionStorage.setItem('storageHistoryFightList', JSON.stringify([...(get().historyFightsList), fight]));
    set((state) => ({ historyFightsList: [...state.historyFightsList, fight] }))
  },

  resetHistoryFightsList() {
    sessionStorage.removeItem('storageHistoryFightList');
    set({ historyFightsList: [] })
  },
}))

export default useFightRecordStore