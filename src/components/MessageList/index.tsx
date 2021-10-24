import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { motion, Variants } from 'framer-motion';

import { api } from '../../services/api';
import { Loader } from '../Loader';
import { Logo } from '../Logo';

import * as S from './styles';

type User = {
  name: string;
  avatar_url: string;
};

type Message = {
  id: string;
  text: string;
  user: User;
};

const messageQueue: Message[] = [];

const socket = io('http://localhost:4000');

socket.on('new_message', (newMessage: Message) => {
  messageQueue.push(newMessage);
});

const messageWrapper: Variants = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.4,
    },
  },
  exiting: {
    x: -100,
    opacity: 0,
  },
};

const messageContainer = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.04,
    },
  },
};

const letter = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export function MessageList() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setInterval(() => {
      if (messageQueue.length > 0) {
        setMessages(prevState => [messageQueue[0], prevState[0], prevState[1]].filter(Boolean),);

        messageQueue.shift();
      }
    }, 3000);
  }, []);

  useEffect(() => {
    async function loadMessages() {
      setLoading(true);

      const response = await api.get<Message[]>('messages/last3');

      setTimeout(() => {
        setMessages(response.data);
        setLoading(false);
      }, 2000);
    }

    loadMessages();
  }, []);

  return (
    <S.Container>
      <Logo />

      <S.MessageWrapper>
        {loading ? (
          <Loader type="BallTriangle" color="#FF7A29" height={50} width={50} />
        ) : (
          messages.map(message => (
            <S.MessageContainer
              key={message.id}
              variants={messageWrapper}
              initial="hidden"
              animate="visible"
              exit="exiting"
            >
              <motion.p
                variants={messageContainer}
                initial="hidden"
                animate="visible"
              >
                {message.text.split('').map((char, index) => (
                  <motion.span key={String(index)} variants={letter}>
                    {char}
                  </motion.span>
                ))}
              </motion.p>
              <S.UserContainer>
                <div>
                  <img src={message.user.avatar_url} alt={message.user.name} />
                </div>
                <span>{message.user.name}</span>
              </S.UserContainer>
            </S.MessageContainer>
          ))
        )}
      </S.MessageWrapper>
    </S.Container>
  );
}
