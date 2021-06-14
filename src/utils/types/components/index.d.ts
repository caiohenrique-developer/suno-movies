import { FetchMovieProps } from '@utils/types/api';

// Header
export interface HeaderProps {
  keyCode: number;
}

// CTAButton
export interface CTAButtonProps {
  pageUrl?: string;
  className: string;
  title: string;
  iconAfter?: any;
  onClick?(): void;
}

// FilterButton
export interface FilterButtonProps {
  className: string;
  iconBefore?: any;
  title: string;
  onClick?(): void;
}

// CatalogueTitle
export interface CatalogueTitleProps {
  title: any;
}

// CardMovie
type MovieDiscoverExtends = Omit<FetchMovieProps, 'id' | 'genreIDs'>;
export interface CardMovieProps extends MovieDiscoverExtends {
  className?: string;
}
