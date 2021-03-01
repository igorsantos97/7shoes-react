import React from 'react';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Header from '../../components/Header';

import ProductBanner from '../../assets/home-product-banner.png';
import ProductBrand from '../../assets/home-logo-banner.png';

import {
  BannerMain,
  BannerMainContent,
  BannerContentLeft,
  BannerContentRight,
  BannerContentRightBox,
  BannerContentRightBoxSizes
} from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <BannerMain>
        <Container>
          <BannerMainContent>
            <BannerContentLeft>
              <h2>Tênis Adidas <span>U_Path Run</span></h2>
              <Button >Ver Detalhes</Button>
              <Button isReverse={true}>Ver todos os produtos</Button>
            </BannerContentLeft>

            <BannerContentRight>
              <BannerContentRightBox>
                <h3>Adidas</h3>
                <img src={ProductBanner} alt="Tenis da Adidas" />

                <BannerContentRightBoxSizes>
                  <ul>
                    <li>37</li>
                    <li>38</li>
                    <li>39</li>
                  </ul>
                  <ul>
                    <li>40</li>
                    <li>41</li>
                    <li>42</li>
                  </ul>
                </BannerContentRightBoxSizes>

                <img className="home-brand" src={ProductBrand} alt="" />
              </BannerContentRightBox>
            </BannerContentRight>
          </BannerMainContent>
        </Container>
      </BannerMain>
    </>
  );
}

export default Home;