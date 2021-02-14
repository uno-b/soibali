import React from 'react';

import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import About from '../components/About';
import Parallax from '../components/Parallax';
import SitePlan from '../components/SitePlan';
import BGParallax from '../components/BGParallax';
import Indonesia from '../components/Indonesia';
import Contact from '../components/Contact';
import ImagesRow from '../components/ImagesRow';
import SEO from '../components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navbar />
    <Slider />
    {/*
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    */}
    <About />
    <Parallax />
    <SitePlan />
    <BGParallax />
    <Indonesia />
    <Slider cover={false} />
    <Contact />
    <ImagesRow />
  </Layout>
);

export default IndexPage;
