import { createContext, useContext, useMemo, useState } from 'react';

interface LanguageContextData {
  language: string;
  changeLanguage: (newLanguage: string) => void;
}

type LanguageProviderProps = {
  children: JSX.Element;
};

const LanguageContext = createContext<LanguageContextData>(
  {} as LanguageContextData,
);

const DEFAULT_LANGUAGE = 'python3';

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  function changeLanguage(newLanguage: string) {
    setLanguage(newLanguage);
  }

  const memoizedValue = useMemo(
    () => ({
      language,
      changeLanguage,
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={memoizedValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  return context;
}
