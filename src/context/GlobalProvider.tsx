import { useState } from 'react';
import GlobalContext from './GlobalContext';

type GlobalProviderProps = {
  children: React.ReactNode;
};

function GlobalProvider({ children }: GlobalProviderProps) {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [language, setLanguage] = useState<'en' | 'pt' | 'es'>('en');

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  function changeLanguage(newLanguage: 'en' | 'pt' | 'es') {
    setLanguage(newLanguage);
  }

  return (
    <GlobalContext.Provider value={{ theme, toggleTheme
    , language,
     setLanguage: changeLanguage 
     }}>
      <div>
        {children}
      </div>
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
