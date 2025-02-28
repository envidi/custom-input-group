import { createStore } from 'jotai';
import { createJSONStorage } from 'jotai/utils';

export const localStore = createStore();
export const sessionStore = createJSONStorage(() => sessionStorage);
