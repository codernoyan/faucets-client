/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import styled from '@emotion/styled';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {
  Box,
  Button, Container, IconButton, Menu, MenuItem, Stack
} from '@mui/material';
import React, { useState } from 'react';
import FlexBox from '../Styled/FlexBox';

const StyledNavbar = styled(Box)`
  background-color: #ffffff;
  padding: 25px 0;
`;

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
            <div>
              <IconButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <AccountCircleOutlinedIcon />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          </Stack>
        </FlexBox>
      </Container>
    </StyledNavbar>
  );
}
