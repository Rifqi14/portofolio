import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel='favicon'
          type='image/png'
          sizes='32x32'
          href='/images/favicon.png'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
