import React, { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { CTAButton } from '@components/CTAButton';
import { useHomeIndicator } from '@hooks/useHomeIndicator';

import { TiStarFullOutline } from 'react-icons/ti';

import { Container } from '@styles/pages/SelectedMovie';

export default function SelectedMovie() {
  const { addHomeID, homeID } = useHomeIndicator();

  useEffect(() => {
    addHomeID('selected-movie');

    // new YT.Player('div_YouTube', {
    //   videoId: '2-OWmDS88so', // THE VIDEO ID.
    //   width: '100%',
    //   height: 580,
    //   playerVars: {
    //     autoplay: 0,
    //     controls: 1,
    //     showinfo: 0,
    //     modestbranding: 0,
    //     loop: 1,
    //     fs: 0,
    //     cc_load_policty: 0,
    //     iv_load_policy: 3,
    //   },
    //   events: {
    //     onReady: function (e) {
    //       e.target.mute();
    //       e.target.setVolume(50); // YOU CAN SET VALUE TO 100 FOR MAX VOLUME.
    //     },
    //   },
    // });
  }, []);

  return (
    <>
      <Head>
        <title>Assistir ao filme | Suno Movies</title>

        {/* <!--LOAD YouTube "iframe_api" ASYNCHRONOUSLY.--> */}
        <script async src='https://www.youtube.com/iframe_api'></script>
      </Head>

      <Container id={homeID}>
        <section>
          <div>
            <div>
              <Image
                src='/assets/desk/movie-selected/selected-movie-thumbnail.png'
                width={334}
                height={494}
                objectFit='cover'
              />

              <div>
                <h1>Solteira Quase Surtando</h1>

                <div>
                  Comédia
                  <span>
                    <TiStarFullOutline /> 8.4
                  </span>
                </div>

                <div>
                  <span>Sinopse</span>

                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h4>Trailer</h4>

            {/* <div id='div_YouTube'></div> */}

            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/2-OWmDS88so'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            ></iframe>

            <CTAButton pageUrl='/catalogue' title='Voltar' />
          </div>
        </section>
      </Container>
    </>
  );
}
