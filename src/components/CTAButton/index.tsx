import React from 'react';
import Link from 'next/link';

import { Container } from '@styles/components/ButtonStyles';

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
