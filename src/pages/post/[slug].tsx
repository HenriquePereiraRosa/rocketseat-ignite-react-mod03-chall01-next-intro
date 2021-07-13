import { GetStaticPaths, GetStaticProps } from 'next';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post() {
  return (
    <>
      <Head>
        <title>Post | IgPosts</title>
      </Head>
      <Header />

      <main>
        <div>
          <a>
            <time>13 de julho de 2021</time>
            <strong>This is a POst </strong>
            <p>Lorem Ipsum Lorem ipsum Lorem Loerem Wingadium Leviousa</p>
          </a>
        </div>
        
        <div>
          <a>
            <time>13 de julho de 2021</time>
            <strong>This is a POst </strong>
            <p>Lorem Ipsum Lorem ipsum Lorem Loerem Wingadium Leviousa</p>
          </a>
        </div>
        
        <div>
          <a>
            <time>13 de julho de 2021</time>
            <strong>This is a POst </strong>
            <p>Lorem Ipsum Lorem ipsum Lorem Loerem Wingadium Leviousa</p>
          </a>
        </div>
      </main>
    </>
  )
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   const posts = await prismic.query(TODO);

//   // TODO
// };

// export const getStaticProps = async context => {
//   const prismic = getPrismicClient();
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
