import Head from 'next/head';
import { Card, Grid, Header, Hero, Spinner } from '../components';
import type { NextPage } from 'next';
import { useState } from 'react';
import { useFetchMovies } from '../api/fetchHook';

const Home: NextPage = () => {
  const [query, setQuery] = useState<string>('');
  const {data, fetchNextPage, isLoading, isFetching, error } = useFetchMovies(query);
  console.log(data);
  
  return (
    <div>
      <Head>
        <title>HomePage</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='relative overflow-y-scroll h-screen'>
        <Header />
        <Hero />
        <Grid />
        <Card />
        <Spinner />
        RMDB
      </main>
    </div>
  );
};

export default Home;
