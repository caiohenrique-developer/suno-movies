import { FetchMovieDiscoverProps } from '@utils/types/services';

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
export interface CardMovieProps {
  className?: string;
  poster: string;
}
