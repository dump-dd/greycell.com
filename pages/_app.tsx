/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import Page from '../src/components/Page';





// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function App({ Component, pageProps }): JSX.Element {
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Nelson Gilpin | Proprietary Deal Flow Specialist </title>
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </React.Fragment>
  );
}

