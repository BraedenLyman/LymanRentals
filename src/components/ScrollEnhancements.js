import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

function ScrollEnhancements() {
  const { pathname } = useLocation();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollUi = () => {
      const y = window.scrollY;
      const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScrollable > 0 ? Math.min((y / totalScrollable) * 100, 100) : 0;

      setShowBackToTop(y > 520);
      setScrollProgress(progress);
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(updateScrollUi);
    };

    updateScrollUi();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll('.reveal-on-scroll'));

    if (prefersReducedMotion) {
      revealElements.forEach((element) => {
        element.classList.add('is-visible');
      });
      return;
    }

    revealElements.forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 45}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -8% 0px'
      }
    );

    revealElements.forEach((element) => {
      if (!element.classList.contains('is-visible')) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname, prefersReducedMotion]);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <>
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }} aria-hidden="true" />

      <button
        type="button"
        className={`back-to-top ${showBackToTop ? 'is-visible' : ''}`}
        onClick={handleBackToTop}
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </>
  );
}

export default ScrollEnhancements;
