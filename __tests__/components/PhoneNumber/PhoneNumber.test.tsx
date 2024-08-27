import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import PhoneNumber from '../../../components/PhoneNumber/PhoneNumber';
import { countryCodes } from '../../../utils/constants/phone-code';

describe('PhoneNumber Component', () => {
  test('renders correctly with default props', () => {
    render(<PhoneNumber className="custom-class" />);

    // Check if the dropdown is rendered with the correct placeholder
    const dropdown = screen.getByRole('button', { name: `${countryCodes[0].emoji} ${countryCodes[0].dial_code}` });
    expect(dropdown).toBeInTheDocument();

    // Check if the input field is rendered
    const inputField = screen.getByPlaceholderText(countryCodes[0].dial_code);
    expect(inputField).toBeInTheDocument();
  });

  test('updates the selected country code when a new option is selected', () => {
    render(<PhoneNumber />);

    // Open the dropdown
    const dropdown = screen.getByRole('button', { name: `${countryCodes[0].emoji} ${countryCodes[0].dial_code}` });
    fireEvent.click(dropdown);

    // Select a new country from the dropdown
    const newCountryOption = `${countryCodes[1].emoji} ${countryCodes[1].dial_code}`;
    const option = screen.getByText(newCountryOption);
    fireEvent.click(option);

    // Verify the dropdown value is updated
    expect(screen.getByRole('button', { name: newCountryOption })).toBeInTheDocument();

    // Verify the input placeholder is updated to the new country dial code
    expect(screen.getByPlaceholderText(countryCodes[1].dial_code)).toBeInTheDocument();
  });

  test('updates the phone number input when user types', () => {
    render(<PhoneNumber />);

    const phoneInput = screen.getByPlaceholderText(countryCodes[0].dial_code);

    // Simulate typing a phone number
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });

    // Verify the input value is updated
    expect(phoneInput).toHaveValue('1234567890');
  });
});
