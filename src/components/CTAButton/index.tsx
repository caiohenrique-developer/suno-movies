import React from 'react';
import Link from 'next/link';

import { Container } from '@styles/components/CTAButton';

import { CTAButtonProps } from '@utils/types/components';

export const CTAButton = ({
  pageUrl,
  className,
  title,
  iconBefore,
  iconAfter,
}: CTAButtonProps) => {
  return (
    <Link href={pageUrl}>
      <Container className={className}>
        {iconBefore}
        {title}
        {iconAfter}
      </Container>
    </Link>
  );
};
