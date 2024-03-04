import React from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import About from '../../components/About';
import DefaultLayout from '../../layout/DefaultLayout';

const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <div>
        {/* Header components start here */}
        <Header />
        {/* Header components stop here */}

        {/* Hero components start here */}
        <Hero />
        {/* Hero components stop here */}

        {/* About components start here */}
        <About />
        {/* About components stop here */}

        {/* Footer components start here */}
        <Footer />
        {/* Footer components stop here */}
      </div>
    </DefaultLayout>
  );
}

export default Home;
