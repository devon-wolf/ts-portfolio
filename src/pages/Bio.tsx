import React from 'react';
import { BIO, TITLES } from '../constants/siteContent';
import Page from '../layout/Page';

const Bio = () => {
  return <Page title={TITLES.BIO}>{BIO}</Page>;
};

export default Bio;
