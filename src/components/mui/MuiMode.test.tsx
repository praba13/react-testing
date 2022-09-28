//import { render, screen } from '@testing-library/react';
import { render, screen } from '../../test-utils'
import { AppProviders } from '../../providers/AppProviders'
import { MuiMode } from './MuiMode'

describe('MuiMode', () => {
  test('renders text correctly', () => {
    //render(<MuiMode />); // so fehler, da nicht provider nicht eingeschlossen ist
    {
      /*  render(<MuiMode />, {
      wrapper: AppProviders
    });
    */
    }
    render(<MuiMode />) // so gehts with test-utils
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveTextContent('dark mode')
  })
})
