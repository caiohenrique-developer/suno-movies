import React, { createContext, useContext, useEffect, useState } from 'react';

import { ChildrenGlobalType } from '@utils/types/GlobalTypes';
import { HomeIDContextProps } from '@utils/types/hooks';

const HomeIDContext = createContext({} as HomeIDContextProps);

export const HomeIDProvider = ({ children }: ChildrenGlobalType) => {
  const [homeID, setHomeID] = useState('');

  useEffect(() => {
    setHomeID('home');
  }, []);

  const addHomeID = () => {
    setHomeID('home');
  };

  return (
    <HomeIDContext.Provider value={{ homeID, addHomeID }}>
      {children}
    </HomeIDContext.Provider>
  );
};

export const useHomeIndicator = (): HomeIDContextProps => {
  return useContext(HomeIDContext);
};
