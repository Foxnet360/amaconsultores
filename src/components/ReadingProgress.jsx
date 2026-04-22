import React, { useState, useEffect } from 'react';

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId;
    let lastScrollY = window.scrollY;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      if (scrollTop === lastScrollY) {
        rafId = requestAnimationFrame(updateProgress);
        return;
      }
      lastScrollY = scrollTop;
      
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      
      setProgress(scrollProgress);
      rafId = requestAnimationFrame(updateProgress);
    };

    rafId = requestAnimationFrame(updateProgress);
    
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent">
      <div
        className="h-full bg-gold transition-transform duration-100 ease-out origin-left"
        style={{ transform: `scaleX(${progress / 100})` }}
        aria-hidden="true"
      />
    </div>
  );
};

export default ReadingProgress;
