import styled from 'styled-components';

export const MainHeader = styled.header`
  background: var(--black);
`;

export const MainHeaderContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const MainHeaderContentLeft = styled.div`
  display: flex;

  > a {
    margin: 17.5px 0;
    display: inline-block;
  }

  ul {
    align-items: center;
    display: flex;
    margin-left: 60px;

    li + li {
      margin-left: 24px;
    }

    a {
      color: var(--white);
      font-family: 'Oswald', sans-serif;
      text-transform: uppercase;
      padding: 8px 4px;
      font-size: 1rem;
    }
  }
`;

export const MainHeaderContentRight = styled.div`
  ul {
    display: flex;
    align-items: center;

    li + li {
      margin-left: 16px;
    }
  }
`;
