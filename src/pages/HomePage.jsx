import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import HeroSection from "../components/home/HeroSection";
import VideoCollection from "../components/home/VideoCollection";
import NewsletterSection from "../components/home/NewsletterSection";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="main-content">
        <HeroSection />
        <VideoCollection />
        <NewsletterSection />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
