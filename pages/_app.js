import '@/styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Head from 'next/head';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as NProgress from 'nprogress';
import NextNProgress from 'nextjs-progressbar';
import { wrapper } from '@/store/store';

function App({ Component, pageProps }) {
    const store = useStore((state) => state);

    NProgress.configure({ trickleSpeed: 200 });
    return (
        <>
            <Head>
                <title>Ecommerece</title>
            </Head>
            <PersistGate persistor={store.__persistor}>
                <NextNProgress
                    color="#94CA50"
                    startPosition={0.3}
                    stopDelayMs={200}
                    height={3}
                    showOnShallow={true}
                />
                <Component {...pageProps} />
            </PersistGate>
        </>
    );
}
export default wrapper.withRedux(App);
