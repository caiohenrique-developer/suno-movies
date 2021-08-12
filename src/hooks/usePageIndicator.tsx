import React, { createContext, useContext, useState } from 'react';

import { ChildrenGlobalType } from '@utils/types/GlobalTypes';
import { PageIDCtxProps } from '@utils/types/hooks';

const PageIDContext = createContext({} as PageIDCtxProps);

export const PageIDProvider = ({
  children,
}: ChildrenGlobalType): JSX.Element => {
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

export const usePageIndicator = (): PageIDCtxProps => {
  return useContext(PageIDContext);
};
