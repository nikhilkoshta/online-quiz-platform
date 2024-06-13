// src/services/localStorageService.ts
export const saveProgress = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  
  export const loadProgress = (key: string) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };
  
  export const clearProgress = (key: string) => {
    localStorage.removeItem(key);
  };
  