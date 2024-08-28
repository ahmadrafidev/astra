import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import TextArea, { TextAreaProps } from '../../../components/TextArea/TextArea';

describe('TextArea Component', () => {
  const setup = (props: Partial<TextAreaProps> = {}) => {
    render(<TextArea {...props} />);
  };

  it('renders the label correctly', () => {
    setup({ label: 'Test Label' });
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('applies the correct aria attributes when error is provided', () => {
    setup({ error: 'Test Error' });
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('aria-invalid', 'true');
    expect(textarea).toHaveAttribute('aria-describedby', expect.stringContaining('error'));
  });

  it('displays the error message correctly', () => {
    setup({ error: 'Test Error' });
    expect(screen.getByText('Test Error')).toBeInTheDocument();
  });

  it('displays the helper text correctly', () => {
    setup({ helperText: 'Test Helper Text' });
    expect(screen.getByText('Test Helper Text')).toBeInTheDocument();
  });

  it('applies custom class names correctly', () => {
    setup({ className: 'custom-class' });
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('custom-class');
  });

  it('renders without label, error, or helper text when none are provided', () => {
    setup();
    expect(screen.queryByText('Test Label')).not.toBeInTheDocument();
    expect(screen.queryByText('Test Error')).not.toBeInTheDocument();
    expect(screen.queryByText('Test Helper Text')).not.toBeInTheDocument();
  });

  it('has the correct default attributes for textarea', () => {
    setup();
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('aria-invalid', 'false');
  });

  it('generates a unique id when id is not provided', () => {
    setup();
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('id', expect.stringContaining('textarea-'));
  });
});
