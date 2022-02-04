import React from 'react';
import { BIO } from '../constants/bio';
import { TITLES } from '../constants/siteContent';
import Page from '../layout/Page';

const Bio = (): JSX.Element => {
  return <Page title={TITLES.BIO}>{BIO}</Page>;
};

export default Bio;
