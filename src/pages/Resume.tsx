import React from 'react';
import { RESUME } from '../constants/resume';
import { TITLES } from '../constants/siteContent';
import Page from '../layout/Page';

const Resume = (): JSX.Element => {
  return <Page title={TITLES.RESUME}>{RESUME}</Page>;
};

export default Resume;
