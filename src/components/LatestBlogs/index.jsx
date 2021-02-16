import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Fade from 'react-reveal/Fade';

import styles from './latestBlogs.module.scss';

const LatestBlogs = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `);

  return (
    <div className={styles.container}>
      <Fade left duration={1000} distance="60px">
        <h1>Latest Blog Posts</h1>
      </Fade>
      <Fade right duration={1000} distance="60px">
        <div className={styles.underline} />
      </Fade>
      <ul>
        {data.allContentfulBlogPost.edges.map((edge) => {
          return (
            <li>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LatestBlogs;
