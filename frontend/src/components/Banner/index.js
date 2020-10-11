import React from 'react';
import styled from 'styled-components';

const Banner = () => {
  return <Container />;
};

const Container = styled.div`
  position: absolute;
  width: 100vw;
  background: var(--primary-light);
  height: 176px;
  top: 95px;
  left: 0;
  z-index: 0;
`;

export default Banner;
