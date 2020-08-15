import React from 'react';
import Layout from '../../components/layout';
import { isEmpty } from 'lodash';
import Error from '../../components/error';
import Hero from '../../components/home/hero';

const FrontPage = (props) => {
  console.log('props: ', props);

  const {
    pageContext: {
      page: {
        frontPageMeta: { banner, searchSection, featuredPostsSection },
      },
      posts,
      postSearchData: { allPosts, options },
    },
  } = props;

  return (
    <Layout>
      {!isEmpty(props.pageContext) ? (
        <>
          <Hero data={banner} />
        </>
      ) : (
        <Error message="Something went wrong"></Error>
      )}
    </Layout>
  );
};

export default FrontPage;
