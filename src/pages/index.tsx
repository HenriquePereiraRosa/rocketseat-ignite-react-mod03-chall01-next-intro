import { GetStaticProps } from 'next';
import Head from 'next/head';
// import React from 'react';
import Prismic from '@prismicio/client';
import { getPrismicClient } from '../services/prismic';

import Header from '../components/Header';


import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Home | IgPosts</title>
      </Head>
      <Header />
      <h1>Hello there!</h1>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const postsResponse = await prismic.query(
    Prismic.predicates.at('document.type', 'post')
  );

  console.log(postsResponse);

  return {
    props: {},
  };
};
