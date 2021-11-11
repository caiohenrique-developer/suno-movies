import { MouseEvent } from 'react';

import { FetchMovieProps } from '@pages/api/_types';

import { ChildrenGlobalType } from '@utils/types/GlobalTypes';

// Header
export type HeaderProps = {
  ctrlKey: boolean;
  shiftKey: boolean;
  key: string;
};

// CTAButton
export type CTAButtonProps = {
  pageUrl?: string;
  className: string;
  title: string;
  iconAfter?: ChildrenGlobalType.children;
};

// FilterButton
export type FilterButtonProps = {
  className: string;
  iconBefore: ChildrenGlobalType.children;
  title: string;
  onClick(): void;
};

// CatalogueTitle
export type CatalogueTitleProps = {
  title: ChildrenGlobalType.children;
};

// MyButton
export type MyButtonProps = {
  onClick(ev?: MouseEvent<HTMLElement>): void;
  href?: string;
  children?: ChildrenGlobalType.children;
  className?: string;
};

// CardMovie
export type CardMovieProps = Omit<FetchMovieProps, 'id'> & {
  movieID: number;
  className?: string;
  handleResetHeaderValues?(): void;
};
