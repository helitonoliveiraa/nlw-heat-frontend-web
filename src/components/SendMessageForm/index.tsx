import { FormEvent, useState } from 'react';
import {
  VscSignIn,
  VscGithubInverted,
  VscPassFilled,
  VscError,
  VscReport,
} from 'react-icons/vsc';
import { toast } from 'react-toastify';
import { Variants, AnimatePresence } from 'framer-motion';

import { useUser } from '../../Contexts/Auth';
import { api } from '../../services/api';
import { Loader } from '../Loader';
import { Background } from '../Background';
import { ToastMessage } from '../ToastMessage';

import * as S from './styles';

const content: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  animation: {
    scale: 1,
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
    transition: {
      duration: 2,
    },
  },
};

export function SendMessageForm() {
  const { user, signOut } = useUser();

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSendMessage(event: FormEvent) {
    event.preventDefault();

    if (!message.trim()) {
      toast(
        <ToastMessage icon={VscReport} title="Insira uma mensagem!" error />,
      );
      return;
    }

    try {
      setLoading(true);

      await api.post('message', {
        message,
      });

      toast(
        <ToastMessage
          icon={VscPassFilled}
          title="Mensagem enviada com sucesso!"
        />,
      );

      setLoading(false);
      setMessage('');
    } catch (err) {
      toast(
        <ToastMessage
          icon={VscError}
          title="Mensagem enviada com sucesso!"
          error
        />,
      );

      setLoading(false);
    }
  }

  return (
    <AnimatePresence>
      <S.Container>
        <S.Content
          variants={content}
          initial="hidden"
          animate="animation"
          exit="exiting"
          key="messageBox"
        >
          <button type="button" onClick={signOut}>
            <VscSignIn />
          </button>

          <S.Profile>
            <div>
              <img src={user?.avatar_url} alt={user?.name} />
            </div>
            <strong>{user?.name}</strong>
            <div>
              <VscGithubInverted />
              <span>{user?.login}</span>
            </div>
          </S.Profile>

          <S.Form onSubmit={handleSendMessage}>
            <label htmlFor="message">Mensagem</label>
            <textarea
              name="message"
              id="message"
              placeholder="Qual sua expectativa para o evento?"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <button type="submit">
              {loading ? (
                <Loader color="#FFCD1E" type="Puff" width={20} height={20} />
              ) : (
                'enviar mensagem'
              )}
            </button>
          </S.Form>
        </S.Content>
      </S.Container>
    </AnimatePresence>
  );
}
