import React from 'react';

import { Button, OptionsList } from '@styles/components/ButtonStyles';

import { FilterButtonProps } from '@utils/types/components';

export const FilterButton = ({
  className,
  iconBefore,
  title,
  onClick,
}: FilterButtonProps) => {
  const layoutValues = [
    { inputID: 'grid', labelHtmlFor: 'grid', labelContent: 'Em grid' },
    { inputID: 'lista', labelHtmlFor: 'lista', labelContent: 'Em lista' },
  ];

  const genreValues = [
    { inputID: 'genre', labelHtmlFor: 'genre', labelContent: 'Gênero' },
    { inputID: 'comedy', labelHtmlFor: 'comedy', labelContent: 'Comédia' },
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
            <li key={inputID} className='option-item'>
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
            <li key={inputID} className='option-item'>
              <input
                type='radio'
                className='radio'
                id={inputID}
                name='category'
              />
              <label htmlFor={labelHtmlFor}>{labelContent}</label>
            </li>
          ))
        ) : (
          <></>
        )}
      </OptionsList>
    </>
  );
};
