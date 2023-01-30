/* eslint-disable linebreak-style */
import WarningIcon from '@mui/icons-material/Warning';
import { Box, Container, styled } from '@mui/material';
import React from 'react';

const Warning = styled(Box)`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  background-color: #EEF2FE;
  font-size: 14px;
  padding: 10px;
`;

const WalletWrapper = styled(Box)`
  background-color: white;
  padding: 25px 20px 25px 20px;
`;

export default function WalletInfo() {
  return (
    <Container
      maxWidth="xl"
    >
      <WalletWrapper>
        <Warning>
          <WarningIcon sx={{
            color: '#9B1FE9',
          }}
          />
          <p>
            Your wallet is connected to Ethereum Kovan,
            so you are requesting Ethereum Kovan Link/ETH.
          </p>
        </Warning>
      </WalletWrapper>
    </Container>
  );
}
