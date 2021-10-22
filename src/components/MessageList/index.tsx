import { Logo } from '../Logo';

import * as S from './styles';

export function MessageList() {
  return (
    <S.Container>
      <Logo />

      <S.MessageWrapper>
        <S.MessageContainer>
          <p>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamooo pra cima! 🔥🔥
          </p>
          <S.UserContainer>
            <div>
              <img
                src="https://github.com/helitonoliveiraa.png"
                alt="Héliton Oliveira"
              />
            </div>
            <span>Héliton Oliveira</span>
          </S.UserContainer>
        </S.MessageContainer>

        <S.MessageContainer>
          <p>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamooo pra cima! 🔥🔥
          </p>
          <S.UserContainer>
            <div>
              <img
                src="https://github.com/helitonoliveiraa.png"
                alt="Héliton Oliveira"
              />
            </div>
            <span>Héliton Oliveira</span>
          </S.UserContainer>
        </S.MessageContainer>

        <S.MessageContainer>
          <p>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamooo pra cima! 🔥🔥
          </p>
          <S.UserContainer>
            <div>
              <img
                src="https://github.com/helitonoliveiraa.png"
                alt="Héliton Oliveira"
              />
            </div>
            <span>Héliton Oliveira</span>
          </S.UserContainer>
        </S.MessageContainer>
      </S.MessageWrapper>
    </S.Container>
  );
}
