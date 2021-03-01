import React, { ButtonHTMLAttributes } from 'react';

import { Btn } from './styles';

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isReverse?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<BtnProps> = ({ children, isReverse = false, ...rest }) => {
  return <Btn isReverse={isReverse}  {...rest}>{children}</Btn>;
}

export default Button;