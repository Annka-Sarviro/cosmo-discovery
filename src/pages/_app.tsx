import '@/pages/globals.css';
import type { AppProps } from 'next/app';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          type: 'Inertia',
          duration: 0.75,
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
          },
          animateState: {
            opacity: 1,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
          },
          exitState: {
            opacity: 1,
            clipPath: 'polygon(50% 0, 50% 0, 100% 100%, 100% 100%)',
          },
        }}
      >
        <Component {...pageProps} />;
      </motion.div>
    </AnimatePresence>
  );
}
