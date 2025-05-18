"use client";

import Navbar from "./navbar";
import HeroSection from "./hero-section";
import FeatureSection from "./feature-section";
import DiscoverSection from "./discover-section";
import TestimonialSection from "./testimonial-section";
import CTASection from "./cta-section";
import Footer from "./footer";
import StatsSection from "./stats-section";
import HowItWorksSection from "./how-it-works-section";
import WhyDevMatchSection from "./why-devmatch-section";
import ChatPreviewSection from "./chat-preview-section";
import PrivacySection from "./privacy-section";

const MainContent = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <HowItWorksSection />
      <FeatureSection />
      <WhyDevMatchSection />
      <DiscoverSection />
      <ChatPreviewSection />
      <PrivacySection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </>
  );
};

export default MainContent;
