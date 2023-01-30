/* eslint-disable linebreak-style */
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React from 'react';
import Hero from './Hero';
import WalletInfo from './WalletInfo';
// import styled from 'styled-components';

const NoticeBoard = styled(Box)`
  background-color: #9B1FE9;
  /* height: 20px; */
  padding: 25px 0;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const NewDiv = styled.div`

// `

export default function Home() {
  return (
    <div>
      {/* Notice board */}
      <NoticeBoard>
        <p>Notice here</p>
      </NoticeBoard>
      <Hero />
      <WalletInfo />
    </div>
  );
}
