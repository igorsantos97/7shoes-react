import React from 'react';
import Container from '../Container';

import { MainHeader, MainHeaderContent, MainHeaderContentLeft, MainHeaderContentRight } from './styles';
import Logo from '../../assets/logo.png';
import SearchIcon from '../../assets/icons/search.png';
import CartIcon from '../../assets/icons/shopping.png';
import UserIcon from '../../assets/icons/user.png';

const Header: React.FC = () => {
  return (
    <MainHeader>
      <Container>
        <MainHeaderContent>
          <MainHeaderContentLeft>
            <a href="/#">
              <img src={Logo} alt="Logo 7Shoes" />
            </a>
            <ul>
              <li><a href="/#">Home</a></li>
              <li><a href="/#">Sobre</a></li>
              <li><a href="/#">Produtos</a></li>
              <li><a href="/#">Contato</a></li>
            </ul>
          </MainHeaderContentLeft>
          <MainHeaderContentRight>
            <ul>
              <li>
                <a href="/#"><img src={SearchIcon} alt="search icon" /> </a>
              </li>
              <li>
                <a href="/#"><img src={CartIcon} alt="cart icon" /> </a>
              </li>
              <li>
                <a href="/#"><img src={UserIcon} alt="user icon" /> </a>
              </li>
            </ul>
          </MainHeaderContentRight>
        </MainHeaderContent>
      </Container>
    </MainHeader>
  );
}

export default Header;