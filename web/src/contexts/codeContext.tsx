import { createContext, useContext, useEffect, useMemo } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';
import api from '../services/api';
import { useLanguage } from './languageContext';

interface CodeContextData {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
}

type CodeProviderProps = {
  children: JSX.Element;
};

const CodeContext = createContext<CodeContextData>({} as CodeContextData);

export function CodeProvider({ children }: CodeProviderProps) {
  const { language } = useLanguage();
  const [code, setCode] = useLocalStorage(`${language}-code`, '');

  async function getDefaultCode() {
    const defaultCode = await api.get(`/code/default/${language}`);

    return defaultCode.data;
  }

  useEffect(() => {
    getDefaultCode().then(defaultCode => {
      setCode(defaultCode);
    });
  }, [language]);

  const memoizedValue = useMemo(
    () => ({
      code,
      setCode,
    }),
    [code],
  );

  return (
    <CodeContext.Provider value={memoizedValue}>
      {children}
    </CodeContext.Provider>
  );
}

export function useCode() {
  const context = useContext(CodeContext);
  return context;
}
