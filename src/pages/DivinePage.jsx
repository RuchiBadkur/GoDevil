import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Categories from '../components/Categories';
import Collections from '../components/Collections';
import Feedback from '../components/Feedback';

const DivinePage = () => {
  return (
    <>
      <Navbar />
      <About category="divine" />
      <Categories id="categories" theme="divine" />
      <Collections id="collections" theme="divine" />
      <Testimonials theme="divine" id="stories" />
      <Feedback />
      <Newsletter />
      <Footer />
    </>
  );
};

export default DivinePage;
