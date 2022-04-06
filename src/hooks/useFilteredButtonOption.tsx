import React, { createContext, useContext, useMemo, useState } from 'react';

import { FetchMovieProps } from '@pages/api/_types';

import { ChildrenGlobalType } from '@utils/types/GlobalTypes';
import { FilteredButtonOptionCtxProps } from '@utils/types/hooks';

const FilteredButtonOption = createContext({} as FilteredButtonOptionCtxProps);

export const FilteredButtonOptionProvider = ({
  children,
}: ChildrenGlobalType): JSX.Element => {
  const [filteredLayout, setFilteredLayout] = useState('');
  const [filteredMoviesByGenre, setFilteredMoviesByGenre] = useState<
    FetchMovieProps[]
  >([]);

  const ctxVal = useMemo(() => {
    return {
      filteredLayout,
      setFilteredLayout,
      filteredMoviesByGenre,
      setFilteredMoviesByGenre,
    } as FilteredButtonOptionCtxProps;
  }, [filteredLayout, filteredMoviesByGenre]);

  return (
    <FilteredButtonOption.Provider value={ctxVal}>
      {children}
    </FilteredButtonOption.Provider>
  );
};

export const useFilteredButtonOption = (): FilteredButtonOptionCtxProps => {
  return useContext(FilteredButtonOption);
};
