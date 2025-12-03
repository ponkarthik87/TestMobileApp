/* eslint-disable @typescript-eslint/no-require-imports */

// Storage abstraction layer
// Uses MMKV for fast, encrypted storage
// Falls back to AsyncStorage if MMKV is not available

interface StorageInterface {
  set: (key: string, value: string | number | boolean) => void;
  getString: (key: string) => string | undefined;
  delete: (key: string) => void;
  clearAll: () => void;
}

let storageInstance: StorageInterface;

try {
  // Try to use MMKV (requires native linking)
  const { MMKV } = require('react-native-mmkv');
  storageInstance = new MMKV({
    id: 'app-storage',
    encryptionKey: 'your-encryption-key-here', // Use a secure key in production
  });
} catch {
  console.warn('MMKV not available, using AsyncStorage fallback');
  // Fallback to AsyncStorage
  const AsyncStorage =
    require('@react-native-async-storage/async-storage').default;
  storageInstance = {
    set: (key: string, value: string | number | boolean) => {
      AsyncStorage.setItem(key, String(value));
    },
    getString: (key: string): string | undefined => {
      let result: string | undefined;
      AsyncStorage.getItem(key).then((value: string | null) => {
        result = value || undefined;
      });
      return result;
    },
    delete: (key: string) => {
      AsyncStorage.removeItem(key);
    },
    clearAll: () => {
      AsyncStorage.clear();
    },
  };
}

export const storage = storageInstance;

// Storage utilities
export const storageUtils = {
  setItem: (key: string, value: string) => {
    storage.set(key, value);
  },

  getItem: (key: string): string | undefined => {
    return storage.getString(key);
  },

  setObject: <T>(key: string, value: T) => {
    storage.set(key, JSON.stringify(value));
  },

  getObject: <T>(key: string): T | null => {
    const value = storage.getString(key);
    return value ? JSON.parse(value) : null;
  },

  removeItem: (key: string) => {
    storage.delete(key);
  },

  clear: () => {
    storage.clearAll();
  },
};
