import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Categories from '../components/Categories';
import Collections from '../components/Collections';
import Feedback from '../components/Feedback';

const DevilPage = () => {
  return (
    <>
      <Navbar />
      <About category="devil" />
      <Categories id="categories" theme="devil" />
      <Collections id="collections" theme="devil" />
      <Testimonials theme="devil" id="stories" />
      <Feedback />
      <Newsletter />
      <Footer />
    </>
  );
};

export default DevilPage;
