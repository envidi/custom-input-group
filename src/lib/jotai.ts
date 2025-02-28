import { atom } from 'jotai';

export function atomWithWebStorage<T>(key: string, initialValue: T, storage = localStorage) {
  const baseAtom = atom(
    (storage.getItem(key) !== 'undefined' && storage.getItem(key)
      ? (JSON.parse(storage.getItem(key) || '') as T)
      : undefined) ?? initialValue,
  );
  return atom(
    (get) => get(baseAtom),
    (_, set, nextValue: T) => {
      set(baseAtom, nextValue);
      storage.setItem(key, JSON.stringify(nextValue));
    },
  );
}
