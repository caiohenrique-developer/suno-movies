import React, { useEffect, useState } from 'react';

import { CircularProgress } from '@material-ui/core';

import { Container } from '@components/Button/BackToTopButton/styles';

import ArrowUp from '@assets/catalogue-arrow-up.svg';

export const BackToTopButton = (): JSX.Element => {
  const [progressBar, setProgressBar] = useState(0);

  useEffect(() => {
    const progressBarByScrollPage = () => {
      // The scrollTop gives length of window that has been scrolled
      const windowScrolled = document.documentElement.scrollTop;
      // The scrollHeight gives total length of the window and
      // The clientHeight gives the length of viewport
      const scrollLength =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progressVal = (100 * windowScrolled) / scrollLength;

      setProgressBar(progressVal);
    };

    // Adding scroll event listener on mounting
    window.addEventListener('scroll', progressBarByScrollPage);

    // Removing event listener upon unmounting
    return () => window.removeEventListener('scroll', progressBarByScrollPage);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container className='back-to-top' onClick={handleClick}>
      <CircularProgress variant='determinate' value={progressBar} />
      <ArrowUp />
    </Container>
  );
};
