import axios from 'axios';
import { createContext, useContext, useMemo, useState } from 'react';

import api from '../services/api';
import fileHelper from '../utils/fileHelper';
import { useCode } from './codeContext';
import { useError } from './errorContext';
import { useLanguage } from './languageContext';

interface ResultContextData {
  result: string;
  setResult: React.Dispatch<React.SetStateAction<string>>;
  clearResult: () => void;
  getResult: () => Promise<void>;
}

type ResultProviderProps = {
  children: JSX.Element;
};

const ResultContext = createContext<ResultContextData>({} as ResultContextData);

export function ResultProvider({ children }: ResultProviderProps) {
  const [result, setResult] = useState('');
  const { code } = useCode();
  const { language } = useLanguage();
  const { setError } = useError();

  function clearResult() {
    setResult('');
  }

  async function getResult() {
    try {
      const formData = new FormData();
      const codeFile = fileHelper.createFile(code, language);

      formData.append('code-file', codeFile);

      const response = await api.post(`code/execute/${language}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const resultCode = response.data;

      setResult(resultCode);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          setError(error.response?.data.error);
        } else {
          setError(error.message);
        }
      } else if (error instanceof Error) {
        setError(error.message);
      }
    }
  }

  const memoizedValue = useMemo(
    () => ({
      result,
      setResult,
      clearResult,
      getResult,
    }),
    [result, getResult],
  );

  return (
    <ResultContext.Provider value={memoizedValue}>
      {children}
    </ResultContext.Provider>
  );
}

export function useResult() {
  const context = useContext(ResultContext);
  return context;
}
