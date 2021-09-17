import React, { forwardRef, LegacyRef } from 'react';

import { MyButtonProps } from '@utils/types/components';

export const MyButton = forwardRef(
  (
    { href, onClick, className, children }: MyButtonProps,
    ref: LegacyRef<HTMLAnchorElement>,
  ) => {
    return (
      <a href={href} onClick={onClick} className={className} ref={ref}>
        {children}
      </a>
    );
  },
);
