import React from 'react';
import { TiStarFullOutline } from 'react-icons/ti';
import MediaQuery from 'react-responsive';

import Image from 'next/image';
import Link from 'next/link';

import { Player } from '@lottiefiles/react-lottie-player';

import { MyButton } from '@components/Button/MyButton';
import { Container } from '@components/CardMovie/styles';

import { CardMovieProps } from '@utils/types/components';

export const CardMovie = ({
  title,
  genre,
  poster,
  rating,
  movieID,
  className,
  description,
  handleResetHeaderValues,
}: CardMovieProps): JSX.Element => {
  const handleSelectedMovie = () => {
    if (handleResetHeaderValues) handleResetHeaderValues();
  };

  return (
    <Container className={className}>
      {/* Mob */}
      <MediaQuery maxWidth={767}>
        <section id='mob'>
          <div>
            {poster !== '' && (
              <Link href={`/selected-movie/${movieID}`} passHref>
                <MyButton onClick={handleSelectedMovie}>
                  <Image
                    src={poster || '/assets/poster-placeholder.png'}
                    alt={title || 'Undefined'}
                    width={218}
                    height={422}
                    objectFit='cover'
                  />
                  <Player
                    autoplay
                    loop
                    src='https://assets2.lottiefiles.com/private_files/lf30_avzk3oss.json'
                    style={{ height: '100%', width: '100%' }}
                  />
                </MyButton>
              </Link>
            )}
            <div>
              <h4>{title || 'Undefined'}</h4>
              <h3>{genre || 'Undefined'}</h3>
              <span>
                <TiStarFullOutline />
                {rating || 0.0}
              </span>
            </div>
          </div>

          {description && <p>{description}</p>}
        </section>
      </MediaQuery>

      {/* Tablet and up */}
      <MediaQuery minWidth={768}>
        <section>
          {poster !== '' && (
            <Link href={`/selected-movie/${movieID}`} passHref>
              <MyButton onClick={handleSelectedMovie}>
                <Image
                  src={poster || '/assets/poster-placeholder.png'}
                  alt={title || 'Undefined'}
                  width={218}
                  height={422}
                  objectFit='cover'
                />
                <Player
                  autoplay
                  loop
                  src='https://assets2.lottiefiles.com/private_files/lf30_avzk3oss.json'
                  style={{ height: '100%', width: '100%' }}
                />
              </MyButton>
            </Link>
          )}
          <div>
            <h4>{title || 'Undefined'}</h4>
            <h3>{genre || 'Undefined'}</h3>
            <span>
              <TiStarFullOutline />
              {rating || 0.0}
            </span>

            {description && <p>{description}</p>}
          </div>
        </section>
      </MediaQuery>
    </Container>
  );
};
