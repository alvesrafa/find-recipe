import styled from 'styled-components';

export const Container = styled.nav`
  margin-top: 32px;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style-type: none;
    > li {
      margin: 1px;
      padding: 6px 6px;
      border-radius: 3px;
      background: #ffffff;
      border: 1px solid var(--primary-light);
      font-weight: bold;
      color: var(--primary-light);
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      &.active,
      &:hover {
        color: #fff;
        border-color: var(--primary-light);
        background: var(--primary-light);
      }
    }
  }
`;
