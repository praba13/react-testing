import { render, screen } from '@testing-library/react';
import { Greet } from '../geet2/Greet';

describe('Greet', () => {
  test('renders correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText('Hallo');
    expect(textElement).toBeInTheDocument();
  });

  test('renders with a name', () => {
    render(<Greet name='Baba' />);
    const textElement = screen.getByText('Hallo Baba');
    expect(textElement).toBeInTheDocument();
  });
});

describe('Multiple', () => {
  test('renders correctly v two', () => {
    render(<Greet />);
    const textElement = screen.getByText('Hallo');
    expect(textElement).toBeInTheDocument();
  });
});

describe('Nested', () => {
  test('renders correctly v tree', () => {
    render(<Greet />);
    const textElement = screen.getByText('Hallo');
    expect(textElement).toBeInTheDocument();
  });

  describe('Nested two', () => {
    test('renders correctly v tree', () => {
      render(<Greet />);
      const textElement = screen.getByText('Hallo');
      expect(textElement).toBeInTheDocument();
    });
  });
});
