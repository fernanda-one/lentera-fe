import { create } from "zustand";

type State = {
  page: number;
  totalPages: number;
};

type Action = {
  setPage: (newPage: State["page"]) => void;
  setTotalPages: (newTotalPages: State["totalPages"]) => void;
};

const useTableStore = create<State & Action>()((set) => ({
  page: 1,
  totalPages: 2,
  setPage: (newPage) => set((state) => ({ page: newPage })),
  setTotalPages: (newTotalPages) => set((state) => ({ totalPages: newTotalPages })),
}));

export default useTableStore;
