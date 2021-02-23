import React from 'react';

import { MainContainer } from './styles';

const Container: React.FC = ({ children }) => {
  return <MainContainer>
    {children}
  </MainContainer>;
}

export default Container;