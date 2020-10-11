import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Content = styled.main`
  width: 100%;
  margin-top: 64px;
  max-width: 1280px;
  background: #fff;
  border-radius: 16px;
  padding: 32px;
  z-index: 1;
  box-shadow: -4px 4px 12px rgba(0, 0, 0, 0.2);
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .search-wrapper {
      position: relative;
      > svg {
        position: absolute;
        top: 8px;
        left: 8px;
      }
      > input {
        background: var(--background-color);
        padding: 8px;
        border-radius: 6px;
        padding-left: 32px;
      }
    }
  }

  .listing {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    .item {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      font-size: 1.3rem;

      margin: 4px 0;
      padding: 8px 12px;
      border-radius: 6px;

      .actions {
        > button {
          cursor: pointer;
          border-radius: 6px;
          padding: 8px;
          background: #3b8dff;
          transition: all 0.2s ease-in-out;
          &:hover {
            opacity: 0.7;
          }
        }
        > button + button {
          margin-left: 16px;
          background: rgba(255, 81, 59);
        }
      }
      &:nth-child(even) {
        background: rgba(185, 72, 36, 0.5);
      }
      &:nth-child(odd) {
        background: rgba(185, 72, 36, 0.2);
      }
    }
  }
`;
