import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Quote from '../components/Quote';test('It should render correctly', () => {
  const tree = render(
    <BrowserRouter>
      <Quote />
    </BrowserRouter>,
  );
  expect(tree).toMatchSnapshot();
});
