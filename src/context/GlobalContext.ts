import { createContext } from 'react';

type GlobalContextType = {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
//   language: 'en' | 'pt' | 'es';
//   setLanguage: (newLanguage: 'en' | 'pt' | 'es') => void;
};

const GlobalContext = createContext({} as GlobalContextType);

export default GlobalContext;
