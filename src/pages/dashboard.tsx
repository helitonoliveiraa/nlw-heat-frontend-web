import { LoginBox } from '../components/LoginBox';
import { MessageList } from '../components/MessageList';

import * as S from './styles';

export function Dashboard() {
  return (
    <S.Container>
      <MessageList />

      <LoginBox />
    </S.Container>
  );
}
