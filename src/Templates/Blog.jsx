import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

import Layout from '../components/Layout';
import styles from './blog.module.scss';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          contentful_id
          title
          file {
            url
          }
        }
      }
    }
  }
`;

const Blog = (props) => {
  const {
    contentfulBlogPost: {
      title,
      slug,
      publishedDate,
      body: { raw, references },
    },
  } = props.data;

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const imageID = node.data.target.sys.id;
        const {
          file: { url },
          title,
        } = references.find(({ contentful_id: id }) => {
          return id === imageID;
        });

        return <img src={url} alt={title} className={styles.blogImg} />;
      },
    },
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <p>{props.data.contentfulBlogPost.publishedDate}</p>
        {documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw), options)}
      </div>
    </Layout>
  );
};

export default Blog;
