import React from 'react';

import Link from 'next/link';

import { Container } from '@components/Button/ButtonStyles';

import { CTAButtonProps } from '@utils/types/components';

export const CTAButton = ({
  pageUrl,
  className,
  title,
  iconAfter,
}: CTAButtonProps): JSX.Element => {
  return (
    <Link href={pageUrl}>
      <Container className={className}>
        {title}
        {iconAfter}
      </Container>
    </Link>
  );
};
