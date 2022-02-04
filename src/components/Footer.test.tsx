import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';

test('renders successfully', () => {
  const defaultProps = {
    copyright: 'Test Copyright',
    footerNavLinks: [{ path: '/test', text: 'Test' }],
  };
  const { baseElement } = render(
    <BrowserRouter>
      <Footer {...defaultProps} />
    </BrowserRouter>
  );
  expect(baseElement).toBeTruthy();
});
