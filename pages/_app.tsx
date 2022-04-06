import type { AppProps } from 'next/app';

import { AdviceApiProvider } from '../context/adviceApiContext';
import '../styles/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AdviceApiProvider>
      <Component {...pageProps} />
    </AdviceApiProvider>
  );
}

export default MyApp;
