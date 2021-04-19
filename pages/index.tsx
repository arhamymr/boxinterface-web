import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Boxinterface</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Free Design resource for everyone"
        />
      </Head>
      <div className="bg-red-700 text-white" >
        test
      </div>
    </>
  );
};

export default Index;
