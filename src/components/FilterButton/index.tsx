import React, { useState, MouseEvent } from 'react';

import { useReqApi } from '@hooks/useReqApi';

import FilterArrowDown from '@assets/catalogue-arrow-down.svg';
import FilterArrowUp from '@assets/catalogue-arrow-up.svg';

import { Button, OptionsList } from '@styles/components/ButtonStyles';

import { FilterButtonProps } from '@utils/types/components';

export const FilterButton = ({
  className,
  title,
  onClickHandleFilterButton,
}: FilterButtonProps): JSX.Element => {
  const { genreApi } = useReqApi();

  const [toggleLayoutFilter, setToggleLayoutFilter] = useState(false);
  const [toggleGenreFilter, setToggleGenreFilter] = useState(false);

  const genreValues = genreApi.map(({ id, genreName }) => ({
    inputID: id,
    labelHtmlFor: id,
    labelContent: genreName,
  }));

  const layoutValues = [
    { inputID: 'grid', labelHtmlFor: 'grid', labelContent: 'Em grid' },
    { inputID: 'lista', labelHtmlFor: 'lista', labelContent: 'Em lista' },
  ];

  const handleFilterButton = (ev: MouseEvent<HTMLElement>) => {
    const filterLayoutButton =
      ev.currentTarget.className.includes('filter-layout');

    if (filterLayoutButton) {
      setToggleLayoutFilter(!toggleLayoutFilter);
      setToggleGenreFilter(false);
    } else {
      setToggleGenreFilter(!toggleGenreFilter);
      setToggleLayoutFilter(false);
    }

    onClickHandleFilterButton();
  };

  return (
    <>
      <Button
        onClick={handleFilterButton}
        className={`${className} ${toggleLayoutFilter || toggleGenreFilter}`}
      >
        <i className='hvr-icon'>
          {toggleLayoutFilter || toggleGenreFilter ? (
            <FilterArrowUp />
          ) : (
            <FilterArrowDown />
          )}
        </i>
        {title}
      </Button>

      <OptionsList className='animate__animated animate__fadeInDown'>
        {className.includes('filter-layout') ? (
          layoutValues.map(({ inputID, labelHtmlFor, labelContent }) => (
            <li
              key={inputID}
              className={`option-item ${inputID === 'grid' ? 'selected' : ''}`}
            >
              <input
                type='radio'
                className='radio'
                id={inputID}
                name='category'
              />
              <label htmlFor={labelHtmlFor}>{labelContent}</label>
            </li>
          ))
        ) : className.includes('filter-genre') ? (
          genreValues.map(({ inputID, labelHtmlFor, labelContent }) => (
            <li
              key={inputID}
              className={`option-item ${inputID === 8 ? 'selected' : ''}`}
            >
              <input
                type='radio'
                className='radio'
                id={String(inputID)}
                name='category'
              />
              <label htmlFor={String(labelHtmlFor)}>{labelContent}</label>
            </li>
          ))
        ) : (
          <></>
        )}
      </OptionsList>
    </>
  );
};
