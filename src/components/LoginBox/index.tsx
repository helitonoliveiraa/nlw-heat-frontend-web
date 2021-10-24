import { FaGithub } from 'react-icons/fa';
import { motion, Variants } from 'framer-motion';

import { useUser } from '../../Contexts/Auth';
import selo from '../../assets/selo.svg';

import * as S from './styles';

const text1 = 'Envie e compartilhe';
const text2 = ' sua mensagem';

const container: Variants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  animation: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 2,
      bounce: 0.5,
    },
  },
  exiting: {
    y: -100,
    opacity: 0,
  },
};

const textContainer: Variants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.08,
    },
  },
};

const letter: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const seloImg: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.3,
      duration: 0.1,
    },
  },
};

export function LoginBox() {
  const { signInUrl } = useUser();

  return (
    <S.Container
      variants={container}
      initial="hidden"
      animate="animation"
      exit="exiting"
      key="loginBox"
    >
      <motion.img
        src={selo}
        alt="Selo Rocketseat"
        variants={seloImg}
        initial="hidden"
        animate="visible"
      />

      <motion.strong
        variants={textContainer}
        initial="hidden"
        animate="visible"
      >
        {text1.split('').map((char, index) => (
          <motion.span key={String(index)} variants={letter}>
            {char}
          </motion.span>
        ))}

        {text2.split('').map((char, index) => (
          <motion.span key={String(index)} variants={letter}>
            {char}
          </motion.span>
        ))}
      </motion.strong>

      <S.SignInButton
        href={signInUrl}
        initial={{
          x: 100,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ delay: 0.8, ease: 'easeInOut', duration: 1 }}
      >
        <FaGithub />
        Entrar com Github
      </S.SignInButton>
    </S.Container>
  );
}
