import React from 'react';
import Image from 'next/image';

import MediaQuery from 'react-responsive';

import { TiStarFullOutline } from 'react-icons/ti';

import { Container } from './style';

import { CardMovieProps } from '@utils/types/components';

export const CardMovie = ({ className, poster }: CardMovieProps) => {
  return (
    <Container className={className}>
      {/* Mob */}
      <MediaQuery maxDeviceWidth={767}>
        <section id='mob'>
          <div>
            <Image
              src='/assets/desk/catalogue/catalogue-movie-thumbnail.png'
              alt='Movie thumbnail'
              width={218}
              height={422}
              objectFit='cover'
            />
            <div>
              <h4>Goosebumps 2</h4>
              <h3>Comédia</h3>
              <span>
                <TiStarFullOutline />
                8.4
              </span>
            </div>
          </div>

          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.It is a long established
            fact that a reader... Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Eligendi, molestias velit neque similique cumque,
            aut expedita impedit aspernatur doloribus soluta sint magnam
            perspiciatis iste nihil nobis a, totam autem voluptates!
          </p>
        </section>
      </MediaQuery>

      {/* Tablet and up */}
      <MediaQuery minDeviceWidth={768}>
        <section>
          {poster !== '' ? (
            <Image
              src='/assets/desk/catalogue/catalogue-movie-thumbnail.png'
              // src={poster}
              alt='Movie thumbnail'
              width={218}
              height={422}
              objectFit='cover'
            />
          ) : (
            <Image
              src='/assets/desk/catalogue/catalogue-movie-thumbnail.png'
              alt='Movie thumbnail'
              width={218}
              height={422}
              objectFit='cover'
            />
          )}
          <div>
            <h4>Goosebumps 2</h4>
            <h3>Comédia</h3>
            <span>
              <TiStarFullOutline />
              8.4
            </span>

            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.It is a long
              established fact that a reader... Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Eligendi, molestias velit neque
              similique cumque, aut expedita impedit aspernatur doloribus soluta
              sint magnam perspiciatis iste nihil nobis a, totam autem
              voluptates!
            </p>
          </div>
        </section>
      </MediaQuery>
    </Container>
  );
};
