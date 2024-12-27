import type { AppProps } from 'next/app';
import { InstantDbProvider } from '@instantdb/react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <InstantDbProvider appId="6a884559-be16-4efa-8cca-39879718703f">
      <Component {...pageProps} />
    </InstantDbProvider>
  );
}

export default MyApp;

