import React, { createContext, useContext, useState } from 'react';

import { ChildrenGlobalType } from '@utils/types/GlobalTypes';
import { FilteredButtonOptionCtxProps } from '@utils/types/hooks';

const FilteredButtonOption = createContext({} as FilteredButtonOptionCtxProps);

export const FilteredButtonOptionProvider = ({
  children,
}: ChildrenGlobalType): JSX.Element => {
  const [filteredLayout, setFilteredLayout] = useState('');

  return (
    <FilteredButtonOption.Provider
      value={{ filteredLayout, setFilteredLayout }}
    >
      {children}
    </FilteredButtonOption.Provider>
  );
};

export const useFilteredButtonOption = (): FilteredButtonOptionCtxProps => {
  return useContext(FilteredButtonOption);
};
