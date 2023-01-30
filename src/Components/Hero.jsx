/* eslint-disable linebreak-style */
import { Container } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const HeroHeader = styled.h1`
  color: #9B1FE9;
`;

export default function Hero() {
  return (
    <Container maxWidth="xl">
      <HeroHeader>Request testnet LINK</HeroHeader>
    </Container>
  );
}
