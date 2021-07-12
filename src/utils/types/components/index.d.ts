import { FetchMovieProps } from '@utils/types/api';
import { ChildrenGlobalType } from '@utils/types/GlobalTypes';

// Header
export interface HeaderProps {
  keyCode: number;
}

// CTAButton
export interface CTAButtonProps {
  pageUrl?: string;
  className: string;
  title: string;
  iconAfter?: ChildrenGlobalType.children;
  onClick?(): void;
}

// FilterButton
export interface FilterButtonProps {
  className: string;
  iconBefore?: ChildrenGlobalType.children;
  title: string;
  onClick?(): void;
}

// CatalogueTitle
export interface CatalogueTitleProps {
  title: ChildrenGlobalType.children;
}

// CardMovie
type MovieDiscoverExtends = Omit<FetchMovieProps, 'id' | 'genreIDs'>;
export interface CardMovieProps extends MovieDiscoverExtends {
  className?: string;
  movieID: number;
  handleResetHeaderValues?(): void;
}
