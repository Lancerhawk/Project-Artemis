import React, { useRef } from 'react';
import AICards from '../../../Components/LandingPageComponents/AICards/AICards';
import LandingCards from '../../../Components/LandingPageComponents/LandingCards/LandingCards';
import LandingComponent from '../../../Components/LandingPageComponents/LandingComponent/LandingComponent';
import './HomePage.css';

function HomePage() {
  const aiCardsRef = useRef(null);

  const handleScrollToAICards = () => {
    if (aiCardsRef.current) {
      aiCardsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',  
      });
    }
  };

  return (
    <>
      <LandingComponent onGetStartedClick={handleScrollToAICards} />
      <LandingCards />
      <AICards ref={aiCardsRef} /> 
    </>
  );
}

export default HomePage;
