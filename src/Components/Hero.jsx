/* eslint-disable linebreak-style */
import { Container } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const HeroHeader = styled.h1`
  color: #9b1fe9;
`;

const HeroParagraph = styled.p`
  color: #6d7380;
  width: 52%;
`;

export default function Hero() {
  return (
    <Container maxWidth="xl">
      <HeroHeader>Request testnet LINK</HeroHeader>
      <HeroParagraph>
        Get testnet LINK for an account on one of the supported blockchain
        testnets so you can create and test your own oracle and Chainlinked
        smart contract
      </HeroParagraph>
    </Container>
  );
}
