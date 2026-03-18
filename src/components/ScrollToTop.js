import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (hash) {
      const targetId = decodeURIComponent(hash.replace('#', ''));
      const target = document.getElementById(targetId);

      if (target) {
        const headerOffset = 96;
        const top = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top, left: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash, prefersReducedMotion]);

  return null;
}

export default ScrollToTop;
