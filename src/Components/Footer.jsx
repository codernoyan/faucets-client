/* eslint-disable linebreak-style */
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React from 'react';

const StyleFooter = styled(Box)`
  text-align: center;
  padding: 25px 0;
  height: 20px;
  background-color: #ffffff;
  margin-bottom: 1rem;
`;

export default function Footer() {
  return (
    <StyleFooter>
      <small> copyright 2022 - All Right Reserved by Faucet</small>
    </StyleFooter>
  );
}
