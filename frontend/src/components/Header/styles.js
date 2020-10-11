import styled from 'styled-components';

export const Container = styled.header`
  width: 100vw;
  padding: 32px 8px;
  display: flex;
  justify-content: space-between;
  background: var(--primary-light);
  color: var(--background-color);
  position: relative;
  .logo {
    > a {
      > h1 {
        color: var(--font-color);
      }
    }
    &:hover {
      opacity: 0.7;
    }
  }
  > nav {
    > ul {
      display: flex;
      > li {
        margin: 0 16px;
      }
      > li a {
        color: var(--font-color);
      }
    }
  }
`;
