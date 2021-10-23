import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

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

      setMessages(response.data);
      setLoading(false);
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
            <S.MessageContainer key={message.id}>
              <p>{message.text}</p>
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
