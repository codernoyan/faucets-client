/* eslint-disable linebreak-style */
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React from 'react';

const StyleFooter = styled(Box)`
  text-align: center;
  padding: 8px 0;
  height: 16px;
  background-color: #ffffff;
`;

export default function Footer() {
  return (
    <StyleFooter>
      <small> copyright 2022 - All Right Reserved by Faucet</small>
    </StyleFooter>
  );
}
