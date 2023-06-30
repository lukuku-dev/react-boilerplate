import { atom } from "jotai";

// Initial State of Love
const initialLove = 0;
const loveAtom = atom(initialLove);

// To know the value of love from state
const checkLove = atom((get) => get(loveAtom));

// Add Love
const increaseLove = atom(null, (get, set) => {
  set(loveAtom, get(loveAtom) + 1);
});

// Subtract Love
const decreaseLove = atom(null, (get, set) => {
  set(loveAtom, get(loveAtom) - 1);
});

// Reset Love
const resetLove = atom(null, (get, set) => {
  set(loveAtom, initialLove);
});

export { loveAtom, checkLove, increaseLove, decreaseLove, resetLove };
