import React from 'react';
import Head from 'next/head';

import { useHomeIndicator } from '@hooks/useHomeIndicator';

import { CatalogueTitle } from '@components/CatalogueTitle';
import { CardMovie } from '@components/CardMovie';

import { SelectBtn, ActiveIndicator } from '@styles/components/CTAButton';
import { Container } from '@styles/pages/Catalogue';

export default function Catalogue() {
  const { addHomeID, homeID } = useHomeIndicator();

  addHomeID('catalogue');

  return (
    <>
      <Head>
        <title>Catálogo | Suno Movies</title>
      </Head>

      <Container id={homeID}>
        <section>
          <div>
            <CatalogueTitle
              title={[<strong>Lançamentos</strong>, ' da semana']}
            />

            <div>
              <CardMovie />
            </div>
          </div>

          <div>
            <CatalogueTitle title={[<strong>Catálogo</strong>, ' completo']} />
          </div>
        </section>

        <section>
          <div>
            <div>
              <div>
                <form>
                  <SelectBtn className='btn-pink'>
                    <option value=''>Selecionar opção</option>
                    <option value='volvo'>Volvo</option>
                    <option value='saab'>Saab</option>
                    <option value='fiat'>Fiat</option>
                    <option value='audi'>Audi</option>
                  </SelectBtn>
                </form>

                <ActiveIndicator className='btn-pink'>
                  Mais populares
                </ActiveIndicator>
              </div>

              <form>
                <SelectBtn className='btn-pink'>
                  <option value='fiat'>Fiat</option>
                  <option value='audi'>Audi</option>
                </SelectBtn>
              </form>
            </div>

            <div>Filmes</div>
          </div>
        </section>
      </Container>
    </>
  );
}
