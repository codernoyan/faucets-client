/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {
  Button, Container, IconButton, Stack
} from '@mui/material';
import React from 'react';
import FlexBox from '../Styled/FlexBox';

export default function Navbar() {
  return (
    <div>
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
                color: '#9B1FE9'
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
    </div>
  );
}
