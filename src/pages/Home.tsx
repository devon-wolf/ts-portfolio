import React from 'react';
import { TITLES } from '../constants/siteContent';
import Page from '../layout/Page';

const Home = (): JSX.Element => {
  return <Page title={TITLES.HOME}></Page>;
};

export default Home;
