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
}: CTAButtonProps) => {
  return (
    <Button className={className}>
      {iconBefore}
      {title}
    </Button>
  );
};
