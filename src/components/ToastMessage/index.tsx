import { ElementType } from 'react';
import * as S from './styles';

type ToastMessageProps = {
  icon: ElementType;
  title: string;
  success?: boolean;
  error?: boolean;
};

export function ToastMessage({
  icon: Icon,
  title,
  error,
  success,
}: ToastMessageProps) {
  return (
    <S.Container error={error} success={success}>
      <Icon />
      <span>{title}</span>
    </S.Container>
  );
}
