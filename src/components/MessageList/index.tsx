import { useEffect, useState } from 'react';
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

export function MessageList() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    async function loadMessages() {
      const response = await api.get<Message[]>('messages/last3');

      setTimeout(() => {
        setMessages(response.data);
      }, 3000);
    }

    loadMessages();
  }, []);

  return (
    <S.Container>
      <Logo />

      <S.MessageWrapper>
        {messages.length > 0 ? (
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
        ) : (
          <Loader type="BallTriangle" color="#FF7A29" height={50} width={50} />
        )}
      </S.MessageWrapper>
    </S.Container>
  );
}
