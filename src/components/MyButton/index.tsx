import React, { forwardRef } from 'react';

import { MyButtonProps } from '@utils/types/components';

export const MyButton = forwardRef(
  ({ href, onClick, className, children }: MyButtonProps) => {
    return (
      <a href={href} onClick={onClick} className={className}>
        {children}
      </a>
    );
  },
);
