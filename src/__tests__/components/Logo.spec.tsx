import { render, screen } from '@testing-library/react';

import { Logo } from '../../components/Logo';

describe('Logo', () => {
  it('renders correctly', () => {
    render(<Logo />);

    expect(screen.getByTestId('logo')).toBeInTheDocument();
  });
});
