import { AnimatePresence } from 'framer-motion';

import { LoginBox } from '../components/LoginBox';
import { MessageList } from '../components/MessageList';
import { SendMessageForm } from '../components/SendMessageForm';

import { useUser } from '../Contexts/Auth';

import * as S from './styles';

export function Dashboard() {
  const { isAuthenticated } = useUser();

  return (
    <S.Container isImgBackground={isAuthenticated}>
      <MessageList />

      <AnimatePresence>
        {isAuthenticated ? <SendMessageForm /> : <LoginBox />}
      </AnimatePresence>
    </S.Container>
  );
}
