/**
 * @jest-environment jsdom
 */

//import '@testing-library/jest-dom';

import { render, screen, fireEvent } from '@testing-library/react';
import RomanNumeralCalculator from '../app/components/roman-numeral-calculator';

describe('Roman Numeral Calculator', () => {
  it('should render the basic fields', () => {
    render(<RomanNumeralCalculator />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Convert/i })
    ).toBeInTheDocument();
  });

  it('should give error if input is non-negative ', () => {
    render(<RomanNumeralCalculator />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '-3' } });
    fireEvent.click(screen.getByRole('button', { name: /Convert/i }));

    expect(
      screen.getByText(/Please enter non negative integers only./i)
    ).toBeInTheDocument();
  });

  it('should give error if input is not between 1 to 1000', () => {
    render(<RomanNumeralCalculator />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '3000' } });
    fireEvent.click(screen.getByText('Convert'));

    expect(
      screen.getByText(/Please enter number between 1 to 1000./i)
    ).toBeInTheDocument();
  });

  it('should hide error when user clicked on convert button', () => {
    render(<RomanNumeralCalculator />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '3000' } });
    fireEvent.click(screen.getByText('Convert'));

    expect(
      screen.getByText(/Please enter number between 1 to 1000./i)
    ).toBeInTheDocument();

    fireEvent.change(input, { target: { value: '500' } });
    fireEvent.click(screen.getByText('Convert'));

    expect(
      screen.queryByText(/Please enter number between 1 to 1000./i)
    ).not.toBeInTheDocument();
  });

  it('should display Nulla for the value of 0', () => {
    render(<RomanNumeralCalculator />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '0' } });
    fireEvent.click(screen.getByText('Convert'));

    expect(screen.getByText('Nulla')).toBeInTheDocument();
  });

  it('should show  XXV for the value of 25', () => {
    render(<RomanNumeralCalculator />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '25' } });
    fireEvent.click(screen.getByText('Convert'));

    expect(screen.getByText('XXV')).toBeInTheDocument();
  });
});
