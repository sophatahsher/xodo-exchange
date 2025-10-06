export interface ScrollOptions {
  offset?: number;
  duration?: number;
  easing?: 'easeInOutCubic' | 'easeInOutQuart' | 'easeInOutQuint';
}

export const scrollToSection = (sectionId: string, options: ScrollOptions = {}) => {
  const { offset = 80, duration = 1200, easing = 'easeInOutCubic' } = options;

  const element = document.getElementById(sectionId);
  if (!element) {
    console.warn(`Section with id "${sectionId}" not found`);
    return;
  }

  const startPosition = window.pageYOffset;
  const targetPosition = element.offsetTop - offset;
  const distance = targetPosition - startPosition;
  const startTime = performance.now();

  // Easing functions
  const easingFunctions = {
    easeInOutCubic: (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
    easeInOutQuart: (t: number) => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t,
    easeInOutQuint: (t: number) => t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t,
  };

  const easingFunction = easingFunctions[easing];

  // Add section highlight effect
  element.classList.add('section-highlight');

  function animate(currentTime: number) {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const run = easingFunction(progress);

    window.scrollTo(0, startPosition + distance * run);

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else if (element) {
      // Animation complete - add arrival effect
      element.classList.add('section-arrived');

      setTimeout(() => {
        element.classList.remove('section-highlight', 'section-arrived');
      }, 1000);
    }
  }
  requestAnimationFrame(animate);
};