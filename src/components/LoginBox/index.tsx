import { FaGithub } from 'react-icons/fa';

import * as S from './styles';

export function LoginBox() {
  return (
    <S.Container>
      <strong>Envie e compartilhe sua mensagem</strong>

      <a href="teste">
        <FaGithub />
        Entrar com Github
      </a>
    </S.Container>
  );
}
