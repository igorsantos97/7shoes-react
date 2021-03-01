import styled, { css } from 'styled-components';

export const Btn = styled.button<{ isReverse: boolean }>`
  display: flex;
  align-items: center;
  background: transparent;
  padding: 8px;
  color: var(--pink);
  border: 2px solid var(--pink);
  border-radius: 3px;
  font-weight: 400;
  margin-bottom: 16px;
  transition: 0.3s;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  font-size: 0.875em;
  line-height: 1.71429em;

  ${(props) =>
    props.isReverse &&
    css({
      borderColor: 'var(--gray)',
      color: 'var(--gray)',
    })}

  &:hover {
    background: var(--pink);
    color: var(--white);

    ${(props) =>
      props.isReverse &&
      css({
        backgroundColor: 'var(--gray)',
        color: 'var(--white)',
      })}

    &::after {
      color: var(--white);
      background: var(--white);
    }
  }

  &::after {
    content: '';
    background: var(--pink);
    display: inline-block;
    height: 2px;
    margin-left: 8px;
    width: 20px;

    ${(props) =>
      props.isReverse &&
      css({
        background: 'var(--gray)',
      })}
  }
`;
