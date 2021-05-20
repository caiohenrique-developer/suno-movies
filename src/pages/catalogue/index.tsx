import React from 'react';
import Head from 'next/head';

import { useHomeIndicator } from '@hooks/useHomeIndicator';

import { CatalogueTitle } from '@components/CatalogueTitle';

import { Container } from '@styles/pages/Catalogue';

export default function Catalogue() {
  const { addHomeID } = useHomeIndicator();

  addHomeID('');

  return (
    <>
      <Head>
        <title>Catálogo | Suno Movies</title>
      </Head>

      <Container>
        <section>
          <div>
            <CatalogueTitle
              title={[<strong>Lançamentos</strong>, ' da semana']}
            />
          </div>

          <div>
            <CatalogueTitle title={[<strong>Catálogo</strong>, ' completo']} />
          </div>
        </section>

        <section>Vídeos para seleção</section>
      </Container>
    </>
  );
}
