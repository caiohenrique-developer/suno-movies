import { MouseEvent } from 'react';

import { FetchMovieProps } from '@pages/api/_types';

import { ChildrenGlobalType } from '@utils/types/GlobalTypes';

// Header
export interface HeaderProps {
  ctrlKey: boolean;
  shiftKey: boolean;
  key: string;
}

// CTAButton
export interface CTAButtonProps {
  pageUrl?: string;
  className: string;
  title: string;
  iconAfter?: ChildrenGlobalType.children;
}

// FilterButton
export interface FilterButtonProps {
  className: string;
  iconBefore: ChildrenGlobalType.children;
  title: string;
  onClick(): void;
}

// CatalogueTitle
export interface CatalogueTitleProps {
  title: ChildrenGlobalType.children;
}

// MyButton
export interface MyButtonProps {
  onClick(ev?: MouseEvent<HTMLElement>): void;
  href?: string;
  children?: ChildrenGlobalType.children;
  className?: string;
}

// CardMovie
type MovieDiscoverExtends = Omit<FetchMovieProps, 'id'>;
export interface CardMovieProps extends MovieDiscoverExtends {
  movieID: number;
  className?: string;
  handleResetHeaderValues?(): void;
}
