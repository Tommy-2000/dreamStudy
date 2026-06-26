import { createMMKV } from 'react-native-mmkv';
import { Storage } from 'redux-persist';

const mmkvStorage = createMMKV();

export const appStorage: Storage = {
  getItem: (key: string) => {
    const value = mmkvStorage.getString(key);
    return Promise.resolve(value);
  },
  setItem: (key: string, value: string | number | boolean | ArrayBuffer) => {
    mmkvStorage.set(key, value);
    return Promise.resolve(true);
  },
  removeItem: (name: string) => {
    mmkvStorage.remove(name);
    return Promise.resolve();
  }
};
