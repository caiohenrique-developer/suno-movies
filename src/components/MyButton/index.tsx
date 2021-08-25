import React, { forwardRef } from 'react';

import { MyButtonProps } from '@utils/types/components';

export const MyButton = forwardRef(
  ({ onClick, href, children }: MyButtonProps) => {
    return (
      <a href={href} onClick={onClick}>
        {children}
      </a>
    );
  },
);
