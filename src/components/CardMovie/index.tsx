import React from 'react';
import { TiStarFullOutline } from 'react-icons/ti';
import MediaQuery from 'react-responsive';

import Image from 'next/image';
import Link from 'next/link';

import { useReqApi } from '@hooks/useReqApi';

import { CardMovieProps, MyButtonProps } from '@utils/types/components';

import { Container } from './style';

const MyButton = React.forwardRef(
  ({ onClick, href, poster, title }: MyButtonProps) => {
    return (
      <a href={href} onClick={onClick}>
        <Image
          src={poster || '/assets/poster-placeholder.png'}
          alt={title || 'Undefined'}
          width={218}
          height={422}
          objectFit='cover'
        />
      </a>
    );
  },
);

export const CardMovie = ({
  movieID,
  className,
  poster,
  title,
  genres,
  description,
  rating,
  handleResetHeaderValues,
}: CardMovieProps): JSX.Element => {
  const { reqApi } = useReqApi();

  const handleMovieSelected = () => {
    reqApi(8, movieID);

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
                <MyButton
                  poster={poster}
                  title={title}
                  onClick={handleMovieSelected}
                />
              </Link>
            )}
            <div>
              <h4>{title}</h4>
              <h3>{genres}</h3>
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
            <Link href='/selected-movie' passHref>
              <MyButton
                poster={poster}
                title={title}
                onClick={handleMovieSelected}
              />
            </Link>
          )}
          <div>
            <h4>{title}</h4>
            <h3>{genres}</h3>
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
