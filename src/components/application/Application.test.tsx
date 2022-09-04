import { render, screen } from '@testing-library/react';
import { Application } from './Application';

describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />);

    /** getByRole */

    //const nameElement = screen.getByRole('textbox');
    //expect(nameElement).toBeInTheDocument();

    const nameElement = screen.getByRole('textbox', { name: 'Name' }); //label Name
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole('textbox', { name: 'Bio' }); //label Name
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole('combobox');
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole('checkbox');
    expect(termsElement).toBeInTheDocument();

    const submitElement = screen.getByRole('button');
    expect(submitElement).toBeInTheDocument();

    {
      /*
    const pageHeading = screen.getByRole('heading', {
      name: 'Job application form'
    });
    expect(pageHeading).toBeInTheDocument();
    */
    }

    const pageHeading = screen.getByRole('heading', {
      level: 1
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole('heading', { level: 2 });
    expect(sectionHeading).toBeInTheDocument();

    /** getByLabelText */

    //const nameElement2 = screen.getByLabelText('Name');
    //expect(nameElement2).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      'I agree to the terms and conditions'
    );
    expect(termsElement2).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText('Name', { selector: 'input' });
    expect(nameElement2).toBeInTheDocument();
  });
});
