import React from 'react';
import Link from 'next/link';

import { Container, Button } from '@styles/components/CTAButton';

import { CTAButtonProps } from '@utils/types/components';

export const CTAButton = ({
  pageUrl,
  className,
  title,
  iconAfter,
}: CTAButtonProps) => {
  return (
    <Link href={pageUrl}>
      <Container className={className}>
        {title}
        {iconAfter}
      </Container>
    </Link>
  );
};

export const FilterButton = ({
  className,
  iconBefore,
  title,
  onClick,
}: CTAButtonProps) => {
  const ulLayoutValues = [
    { inputID: 'grid', labelHtmlFor: 'grid', labelContent: 'Em grid' },
    { inputID: 'lista', labelHtmlFor: 'lista', labelContent: 'Em lista' },
  ];

  const ulGenreValues = [
    { inputID: 'tst', labelHtmlFor: 'tst', labelContent: 'Teste' },
    { inputID: 'genre', labelHtmlFor: 'genre', labelContent: 'Gênero' },
    { inputID: 'comedy', labelHtmlFor: 'comedy', labelContent: 'Comédia' },
  ];

  return (
    <>
      <Button onClick={onClick} className={className}>
        {iconBefore}
        {title}
      </Button>

      <ul className='animate__animated animate__fadeInDown'>
        {className.includes('filter-layout') ? (
          ulLayoutValues.map(({ inputID, labelHtmlFor, labelContent }) => (
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
          ulGenreValues.map(({ inputID, labelHtmlFor, labelContent }) => (
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
      </ul>
    </>
  );
};
