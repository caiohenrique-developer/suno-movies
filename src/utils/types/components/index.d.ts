// CTAButton
export interface CTAButtonProps {
  pageUrl?: string;
  className: string;
  title: string;
  iconBefore?: any;
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
  className: string;
}
