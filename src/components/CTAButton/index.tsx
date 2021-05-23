import React from 'react';
import Link from 'next/link';

import { Container } from './style';

import { CTAButtonProps } from '@utils/types/components';

export const CTAButton = ({
  pageUrl,
  className,
  title,
  icon,
}: CTAButtonProps) => {
  return (
    <Link href={pageUrl}>
      <Container className={className}>
        {title}
        {icon}
      </Container>
    </Link>
  );
};
