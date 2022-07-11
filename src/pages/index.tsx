import type { NextPage } from 'next'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Head from 'next/head'

import Title from '../components/Title'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Moey</title>
        <meta name="description" content="Moeyeyeyeyeyeyeyeyeyeyeyeyeyeyeyeyeyeyeyeyeyeyeyeyeyeyeyeyeyeey" />
        <link rel="icon" href="/images/moey.png" />
      </Head>

      <Parallax pages={4}>

        <ParallaxLayer speed={.8}><Title /></ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={1.2}
          style={{
            zIndex: -2,
            backgroundImage: `url(/images/backbeach.png)`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={1.2}
          style={{
            zIndex: -2,
            backgroundImage: `url(/images/frontlayer.png)`,
            backgroundSize: 'cover',
          }}
        />

      </Parallax>

    </>
  )
}

export default Home
