import { FaGithub } from 'react-icons/fa';

import { useUser } from '../../Contexts/Auth';

import * as S from './styles';

export function LoginBox() {
  const { signInUrl } = useUser();

  return (
    <S.Container>
      <strong>Envie e compartilhe sua mensagem</strong>

      <a href={signInUrl}>
        <FaGithub />
        Entrar com Github
      </a>
    </S.Container>
  );
}
