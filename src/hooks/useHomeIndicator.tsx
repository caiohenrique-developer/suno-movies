import React, { createContext, useContext, useState } from 'react';

import { ChildrenGlobalType } from '@utils/types/GlobalTypes';
import { HomeIDContextProps } from '@utils/types/hooks';

const HomeIDContext = createContext({} as HomeIDContextProps);

export const HomeIDProvider = ({ children }: ChildrenGlobalType) => {
  const [homeID, setHomeID] = useState('');

  const addHomeID = (page: string) => {
    if (page === 'home') setHomeID(page);
    else setHomeID('');
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
