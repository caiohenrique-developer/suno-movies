import React from 'react';

import { useReqApi } from '@hooks/useReqApi';

import { Button, OptionsList } from '@styles/components/ButtonStyles';

import { FilterButtonProps } from '@utils/types/components';

export const FilterButton = ({
  className,
  iconBefore,
  title,
  onClick,
}: FilterButtonProps) => {
  const { genreApi } = useReqApi();

  const genreValues = genreApi.map(({ id, genreName }) => ({
    inputID: id,
    labelHtmlFor: id,
    labelContent: genreName,
  }));

  const layoutValues = [
    { inputID: 'grid', labelHtmlFor: 'grid', labelContent: 'Em grid' },
    { inputID: 'lista', labelHtmlFor: 'lista', labelContent: 'Em lista' },
  ];

  return (
    <>
      <Button onClick={onClick} className={className}>
        {iconBefore}
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
              className={`option-item ${inputID === 28 ? 'selected' : ''}`}
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
