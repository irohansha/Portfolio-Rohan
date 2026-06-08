import { useInView } from 'react-intersection-observer';

export const useScrollReveal = (options = { threshold: 0.1, triggerOnce: true }) => {
  const [ref, inView] = useInView(options);
  return { ref, inView };
};
