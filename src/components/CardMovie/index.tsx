import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import MediaQuery from 'react-responsive';

import { TiStarFullOutline } from 'react-icons/ti';

import { Container } from './style';

import { CardMovieProps } from '@utils/types/components';

export const CardMovie = ({
  className,
  poster,
  title,
  description,
  rating,
}: CardMovieProps) => {
  return (
    <Container className={className}>
      {/* Mob */}
      <MediaQuery maxDeviceWidth={767}>
        <section id='mob'>
          <div>
            {poster !== '' && (
              <Image
                src={poster || '/assets/poster-placeholder.png'}
                alt={title}
                width={218}
                height={422}
                objectFit='cover'
              />
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
              <a>
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
