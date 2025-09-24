import { create } from "zustand";

const useStore = create((set) => ({
  // state
  count: 10,

  // methods => actions
  increment: () =>
    set((state) => ({ count: (state.count += 1) })),
  decrement: () =>
    set((state) => ({ count: (state.count -= 1) })),
}));

export default useStore;
