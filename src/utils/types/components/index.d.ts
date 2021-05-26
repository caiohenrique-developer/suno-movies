// CTAButton
export interface CTAButtonProps {
  pageUrl?: string;
  className: string;
  title: string;
  iconBefore?: any;
  iconAfter?: any;
  onClick?(): void;
}

// CatalogueTitle
export interface CatalogueTitleProps {
  title: (string | any)[];
}

// CardMovie
interface CardMovieProps {
  className: string;
}
