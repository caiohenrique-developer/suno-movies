import { FetchMovieDiscoverProps } from '@utils/types/services';

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
  title: (string | any)[];
}

// CardMovie
type MovieDiscoverExtends = Omit<FetchMovieDiscoverProps, 'id' | 'genreIDs'>;
export interface CardMovieProps extends MovieDiscoverExtends {
  className?: string;
  description?: string;
}
