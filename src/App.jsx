import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AudioProvider } from './context/AudioContext';
import AnimatedCursor from './components/effects/AnimatedCursor';
import LoadingScreen from './components/effects/LoadingScreen';
import MusicToggle from './components/ui/MusicToggle';
import ThemeToggle from './components/ui/ThemeToggle';

import HeroSection from './components/sections/HeroSection';
import CountdownSection from './components/sections/CountdownSection';
import WishesSection from './components/sections/WishesSection';
import CakeSection from './components/sections/CakeSection';
import QuoteCarousel from './components/sections/QuoteCarousel';
import EndingSection from './components/sections/EndingSection';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      <AudioProvider>
        <div className="relative min-h-screen font-sans selection:bg-primary/30 selection:text-white">
          <AnimatedCursor />
          
          {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
          
          {!isLoading && (
            <>
              <MusicToggle />
              <ThemeToggle />
              
              <main>
                <HeroSection />
                <CountdownSection />
                <WishesSection />
                <CakeSection />
                <QuoteCarousel />
                <EndingSection />
              </main>
            </>
          )}
        </div>
      </AudioProvider>
    </ThemeProvider>
  );
}

export default App;
