import { createContext, ReactNode, useContext, useState } from 'react';

export const AdviceApiContext = createContext({});

const defaultAdvice = {
  advice:
    "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
  id: '117',
};

export const AdviceApiProvider = ({ children }: { children: ReactNode }) => {
  const [adviceContext, setAdviceContext] = useState(defaultAdvice);

  return (
    <AdviceApiContext.Provider value={{ adviceContext, setAdviceContext }}>
      {children}
    </AdviceApiContext.Provider>
  );
};

export const useAdviceApiContext = () => useContext(AdviceApiContext);

export default AdviceApiProvider;
