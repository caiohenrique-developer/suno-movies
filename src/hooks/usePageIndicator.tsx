import React, { createContext, useContext, useState } from 'react';

import { ChildrenGlobalType } from '@utils/types/GlobalTypes';
import { PageIDContextProps } from '@utils/types/hooks';

const PageIDContext = createContext({} as PageIDContextProps);

export const PageIDProvider = ({ children }: ChildrenGlobalType) => {
  const [pageID, setPageID] = useState('');

  const addPageID = (page: string) => {
    if (page) setPageID(page);
  };

  return (
    <PageIDContext.Provider value={{ pageID, addPageID }}>
      {children}
    </PageIDContext.Provider>
  );
};

export const usePageIndicator = (): PageIDContextProps => {
  return useContext(PageIDContext);
};
