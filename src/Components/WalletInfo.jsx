/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import WarningIcon from '@mui/icons-material/Warning';
import {
  Box, Container, styled
} from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

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

const WalletInput = styled('input')`
  margin-top: 5px;
  border: 1px solid #EEEEEE;
  padding: 10px;
  width: 50%;
  /* display: block; */
  font-family: inherit;
`;

const MultipleInput = styled('div')`
  width: 50%;
  display: flex;
  gap: 1rem;
`;

const SubmitButton = styled('button')`
  background-color: #9B1FE9;
  padding: 10px 15px;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 1rem;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  background-color: #0000FF;
  padding: 10px 15px;
  font-size: 13px;
  font-family: inherit;
  margin-bottom: 1rem;
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
        {/* wallet form */}
        <form>
          <div>
            <label
              style={{
                display: 'block',
              }}
              htmlFor="w-address"
            >
              Wallet Address

            </label>
            <WalletInput type="text" id="w-address" placeholder="Your Wallet Address" />
          </div>
          <p>Request Type</p>
          <MultipleInput>
            <WalletInput type="text" id="w-address" placeholder="20 Test Link" disabled />
            <WalletInput type="text" id="w-address" placeholder="0.5 ETH" disabled />
          </MultipleInput>
          <SubmitButton>Send Request</SubmitButton>
        </form>
        {/* request history */}
        <Box sx={{
          marginTop: '2rem',
        }}
        >
          <p>Request History</p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            marginTop: '0.5rem'
          }}
          >
            <StyledLink to="/">ETH Transaction History</StyledLink>
            <StyledLink to="/">TestLink Transaction History</StyledLink>
          </div>
        </Box>
        <Box>
          <table>
            <thead>
              <th>Sr</th>
              <th>Time</th>
              <th>Amount</th>
              <th>Hash</th>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </Box>
      </WalletWrapper>
    </Container>
  );
}
