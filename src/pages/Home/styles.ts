import styled from 'styled-components';

export const BannerMain = styled.section`
  background: var(--gray-session);
  padding: 38px 0;
`;

export const BannerMainContent = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const BannerContentLeft = styled.div`
  padding: 38px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h2 {
    font-size: 2.875em;
    font-family: 'Oswald', sans-serif;
    line-height: 1.21739em;
    text-transform: uppercase;
    margin-bottom: 32px;

    span {
      display: block;
    }
  }
`;

export const BannerContentRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const BannerContentRightBox = styled.div`
  background: var(--pink);
  min-height: 500px;
  position: relative;
  box-shadow: 230px 0 0 #ee2342;
  border-radius: 8px 0 0 8px;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1445px) {
    box-shadow: none;
    border-radius: 8px;
  }

  h3 {
    color: rgba(101, 101, 101, 0.35);
    left: -300px;
    margin-top: 38%;
    position: absolute;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 8.5em;
    line-height: 0.76471em;
    top: 0;
  }

  img:not(.home-brand) {
    left: -68%;
    max-width: 440px;
    position: absolute;
    top: 26%;
  }

  .home-brand {
    bottom: 40px;
    position: absolute;
    right: 30px;
    z-index: 99;
  }
`;

export const BannerContentRightBoxSizes = styled.div`
  bottom: 40px;
  left: 40px;
  position: absolute;

  ul {
    display: flex;

    li {
      align-items: center;
      color: #fff;
      border: solid 1px #fff;
      border-radius: 3px;
      display: flex;
      height: 25px;
      justify-content: center;
      margin: 4px;
      padding: 14px;
      width: 25px;
      font-family: Helvetica, Arial, sans-serif;
      font-size: 0.875em;
      line-height: 1.42857em;
    }
  }
`;
