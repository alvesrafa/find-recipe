import styled from 'styled-components';

export const Container = styled.header`
  padding: 8px;
  display: flex;
  justify-content: space-between;
  .logo {
    > a {
      > h1 {
        color: var(--font-title);
      }
    }
    &:hover {
      opacity: 0.7;
    }
  }
  > nav {
    > ul {
      display: flex;
    }
  }
`;
