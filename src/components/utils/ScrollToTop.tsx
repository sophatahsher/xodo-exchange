'use client';

import { useState, useEffect } from 'react';
import { ArrowUp, Rocket } from 'lucide-react';

interface ScrollToTopProps {
  showAfter?: number;
  smoothDuration?: number;
}

export default function ScrollToTop({
  showAfter = 200,
  smoothDuration = 500
}: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.pageYOffset;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxScroll) * 100;

      setScrollProgress(Math.min(100, progress));
      setIsVisible(scrolled > showAfter);
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility(); // Check initial state

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [showAfter]);

  const scrollToTop = () => {
    setIsScrolling(true);

    // Add launch indicator
    showLaunchIndicator();

    const startPosition = window.pageYOffset;
    const startTime = performance.now();

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

    function animate(currentTime: number) {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / smoothDuration, 1);
      const run = easeInOutCubic(progress);

      window.scrollTo(0, startPosition * (1 - run));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsScrolling(false);
        // Removed showArrivalIndicator() call
      }
    }

    requestAnimationFrame(animate);
  };

  const showLaunchIndicator = () => {
    const indicator = document.createElement('div');
    indicator.className = 'launch-indicator';
    indicator.innerHTML = `
      <div class="rocket-trail"></div>
      <div class="rocket-icon">🚀</div>
      <div class="launch-text">返回顶部</div>
    `;

    document.body.appendChild(indicator);

    setTimeout(() => {
      if (indicator.parentNode) {
        indicator.remove();
      }
    }, 1500);
  };

  // Removed showArrivalIndicator function entirely

  if (!isVisible) return null;

  return (
    <>
      {/* Main Scroll Button */}
      <button
        onClick={scrollToTop}
        disabled={isScrolling}
        className={`
          fixed bottom-8 right-8 z-50 group
          w-14 h-14 rounded-full
          bg-gradient-to-r from-cyan-500 to-blue-600
          hover:from-cyan-600 hover:to-blue-700
          border border-cyan-400/30
          shadow-lg hover:shadow-cyan-500/25
          transition-all duration-300
          ${isScrolling ? 'scale-110 animate-pulse' : 'hover:scale-110'}
          ${isVisible ? 'animate-fadeInUp' : 'animate-fadeOutDown'}
        `}
        aria-label="Scroll to top"
      >
        {/* Progress Ring */}
        <div className="absolute inset-0 rounded-full">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            {/* Background circle */}
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="2"
            />
            {/* Progress circle */}
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="url(#progressGradient)"
              strokeWidth="2.5"
              strokeDasharray={`${scrollProgress}, 100`}
              strokeLinecap="round"
              className="transition-all duration-150"
            />
            {/* Gradient definition */}
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Center Content */}
        <div className="relative flex items-center justify-center w-full h-full">
          {isScrolling ? (
            <Rocket className="w-5 h-5 text-white animate-bounce" />
          ) : (
            <ArrowUp className="w-5 h-5 text-white group-hover:animate-bounce" />
          )}

          {/* Sparkle effects */}
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute top-1 left-3 w-1 h-1 bg-white rounded-full animate-ping delay-100"></div>
            <div className="absolute top-3 right-2 w-1 h-1 bg-cyan-300 rounded-full animate-ping delay-300"></div>
            <div className="absolute bottom-2 left-2 w-0.5 h-0.5 bg-blue-300 rounded-full animate-ping delay-500"></div>
          </div>
        </div>

        {/* Hover glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></div>
      </button>

      {/* Tooltip */}
      <div className={`
        fixed bottom-24 right-8 z-40
        px-3 py-2 rounded-lg
        bg-gray-900/90 backdrop-blur-sm
        border border-gray-700/50
        text-white text-sm font-medium
        opacity-0 group-hover:opacity-100
        transition-all duration-300
        pointer-events-none
        ${isVisible ? 'translate-y-0' : 'translate-y-2'}
      `}>
        返回顶部 ({Math.round(scrollProgress)}%)
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
          <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/90"></div>
        </div>
      </div>

      {/* Floating Particles (decorative) */}
      {isVisible && (
        <div className="fixed bottom-8 right-8 pointer-events-none z-30">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`
                absolute w-1 h-1 bg-cyan-400 rounded-full
                animate-float opacity-60
              `}
              style={{
                left: `${-10 - i * 15}px`,
                top: `${10 + i * 8}px`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}