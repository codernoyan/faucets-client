/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import styled from '@emotion/styled';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {
  Box,
  Button, Container, IconButton, Stack
} from '@mui/material';
import React from 'react';
import FlexBox from '../Styled/FlexBox';

const StyledNavbar = styled(Box)`
  background-color: #ffffff;
  padding: 25px 0;
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <Container maxWidth="xl">
        <FlexBox justifyContent="space-between">
          <h2 style={{
            color: '#9B1FE9'
          }}
          >
            Faucets

          </h2>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined">Etherium Kovan</Button>
            <Button
              variant="outlined"
              startIcon={<AccountBalanceWalletIcon />}
              sx={{
                color: '#9B1FE9',
                borderColor: '#9B1FE9'
              }}
            >
              Connect Wallet
            </Button>
            <IconButton>
              <AccountCircleOutlinedIcon />
            </IconButton>
          </Stack>
        </FlexBox>
      </Container>
    </StyledNavbar>
  );
}
