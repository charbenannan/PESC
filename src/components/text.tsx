import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Props {
  children: string; // Ensure children is a string
}

export const Text = ({ children }: Props) => {
  const ref = useRef(null);
  const { inView, ref: inViewRef } = useInView();

  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start('visible');
    }
  }, [inView, mainControls]);

  const pVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const spanVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <motion.p ref={inViewRef} variants={pVariants} initial="hidden" animate={mainControls}>
      {children.split('').map((char, index) => (
        <motion.span key={index} variants={spanVariants}>
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
};
