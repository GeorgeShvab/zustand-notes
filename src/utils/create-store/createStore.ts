import * as zustand from "zustand";

export const resetFns = new Set<() => void>();

export const resetZustandStore = () => resetFns.forEach((item) => item());

const createUncurried = <T>(creator: zustand.StateCreator<T>) => {
  const store = zustand.create(creator);
  const initialState = store.getInitialState();

  resetFns.add(() => {
    store.setState(initialState, true);
  });

  return store;
};

export const createTestStore = (<T>(creator: zustand.StateCreator<T>) => {
  return typeof creator === "function"
    ? createUncurried(creator)
    : createUncurried;
}) as typeof zustand.create;
