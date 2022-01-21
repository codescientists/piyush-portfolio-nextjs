import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Piyush | Code Scientist</title>
      <meta name="description" content="Piyush Patil | Code Scientist | Freelancer" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
