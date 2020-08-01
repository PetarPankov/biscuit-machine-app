import React from 'react';
import { render } from '@testing-library/react';
import BiscuitMachineApp from './BiscuitMachineApp';

test('renders learn react link', () => {
  const { getByText } = render(<BiscuitMachineApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
