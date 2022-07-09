import { createContext, useContext, useMemo, useState } from 'react';

interface LoadingContextData {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

type LoadingProviderProps = {
  children: JSX.Element;
};

const LoadingContext = createContext<LoadingContextData>(
  {} as LoadingContextData,
);

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [loading, setLoading] = useState<boolean>(false);

  const memoizedValue = useMemo(
    () => ({
      loading,
      setLoading,
    }),
    [loading],
  );

  return (
    <LoadingContext.Provider value={memoizedValue}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  return context;
}
