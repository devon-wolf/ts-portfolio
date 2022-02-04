import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

test('renders successfully', () => {
  const defaultProps = {
    headerTitle: 'Test Title',
    headerNavLinks: [{ path: '/test', text: 'Test' }],
  };
  const { baseElement } = render(
    <BrowserRouter>
      <Header {...defaultProps} />
    </BrowserRouter>
  );
  expect(baseElement).toBeTruthy();
});
