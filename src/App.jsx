import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import bgImage from './assets/images/Screenshot 2026-05-01 at 14.01.27.png';
import portrait1 from './assets/images/1.jpg';
import portrait2 from './assets/images/photo1678894482.jpeg';

export default function App() {
  const [stage, setStage] = useState('loading');
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const centerPhotos = [portrait1, portrait2];

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setStage('intro');
    }, 1500);
    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    if (stage === 'intro') {
      const introTimer = setTimeout(() => {
        setStage('main');
      }, 3000);
      return () => clearTimeout(introTimer);
    }
  }, [stage]);

  useEffect(() => {
    if (stage === 'main') {
      const interval = setInterval(() => {
        setCurrentPhotoIndex((prev) => (prev + 1) % centerPhotos.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [stage, centerPhotos.length]);

  return (
    <div className="h-screen w-screen overflow-hidden bg-white">
      <AnimatePresence>
        {stage === 'loading' && (
          <motion.div
            className="absolute inset-0 bg-white z-50"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {stage === 'intro' && (
          <motion.div
            className="absolute inset-0 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={bgImage}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
        <AnimatePresence mode="wait">
          {(stage === 'intro' || stage === 'main') && (
            <motion.div
              className="flex flex-col items-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: stage === 'intro' ? 0.5 : 0, duration: 1 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPhotoIndex}
                  className="relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    src={centerPhotos[currentPhotoIndex]}
                    alt="Portrait"
                    className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl"
                  />
                </motion.div>
              </AnimatePresence>

              <motion.h1
                className="text-4xl md:text-6xl font-light text-black tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: stage === 'intro' ? 1 : 0, duration: 1 }}
              >
                Алекс Машталер
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}