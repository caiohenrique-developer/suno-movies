import React from 'react';
import { TiStarFullOutline } from 'react-icons/ti';
import MediaQuery from 'react-responsive';

import Image from 'next/image';
import Link from 'next/link';

import { MyButton } from '@components/MyButton';

import { useReqApi } from '@hooks/useReqApi';

import { CardMovieProps } from '@utils/types/components';

import { Container } from './style';

export const CardMovie = ({
  className,
  poster,
  title,
  genre,
  description,
  rating,
  handleResetHeaderValues,
}: CardMovieProps): JSX.Element => {
  const { reqApi } = useReqApi();

  const handleMovieSelected = () => {
    reqApi(8);

    if (handleResetHeaderValues) handleResetHeaderValues();
  };

  return (
    <Container className={className}>
      {/* Mob */}
      <MediaQuery maxDeviceWidth={767}>
        <section id='mob'>
          <div>
            {poster !== '' && (
              <Link href='/selected-movie' passHref>
                <MyButton onClick={handleMovieSelected}>
                  <Image
                    src={poster || '/assets/poster-placeholder.png'}
                    alt={title || 'Undefined'}
                    width={218}
                    height={422}
                    objectFit='cover'
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
      <MediaQuery minDeviceWidth={768}>
        <section>
          {poster !== '' && (
            <Link href='/selected-movie' passHref>
              <MyButton onClick={handleMovieSelected}>
                <Image
                  src={poster || '/assets/poster-placeholder.png'}
                  alt={title || 'Undefined'}
                  width={218}
                  height={422}
                  objectFit='cover'
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
