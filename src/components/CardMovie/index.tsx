import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import MediaQuery from 'react-responsive';

import { useReqApi } from '@hooks/useReqApi';

import { TiStarFullOutline } from 'react-icons/ti';

import { Container } from './style';

import { CardMovieProps } from '@utils/types/components';

export const CardMovie = ({
  movieID,
  className,
  poster,
  title,
  description,
  rating,
}: CardMovieProps) => {
  const { reqApi } = useReqApi();

  return (
    <Container className={className}>
      {/* Mob */}
      <MediaQuery maxDeviceWidth={767}>
        <section id='mob'>
          <div>
            {poster !== '' && (
              <Link href='/selected-movie'>
                <a onClick={() => reqApi(8, movieID)}>
                  <Image
                    src={poster || '/assets/poster-placeholder.png'}
                    alt={title}
                    width={218}
                    height={422}
                    objectFit='cover'
                  />
                </a>
              </Link>
            )}
            <div>
              <h4>{title}</h4>
              <h3>Comédia</h3>
              <span>
                <TiStarFullOutline />
                {rating}
              </span>
            </div>
          </div>

          <p>{description}</p>
        </section>
      </MediaQuery>

      {/* Tablet and up */}
      <MediaQuery minDeviceWidth={768}>
        <section>
          {poster !== '' && (
            <Link href='/selected-movie'>
              <a onClick={() => reqApi(8, movieID)}>
                <Image
                  src={poster || '/assets/poster-placeholder.png'}
                  alt={title}
                  width={218}
                  height={422}
                  objectFit='cover'
                />
              </a>
            </Link>
          )}
          <div>
            <h4>{title}</h4>
            <h3>Comédia</h3>
            <span>
              <TiStarFullOutline />
              {rating}
            </span>

            <p>{description}</p>
          </div>
        </section>
      </MediaQuery>
    </Container>
  );
};
