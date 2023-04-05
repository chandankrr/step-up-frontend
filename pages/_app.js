import '@/styles/globals.css';
import Head from 'next/head';
import { Provider } from 'react-redux';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import store from '@/store/store';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Step Up | Online Shoes Store</title>
        <meta name="description" content="Online shoes store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}
