import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Snippet from '../../../components/Snippet/Snippet';

describe('Snippet Component', () => {
  const code = "console.log('Hello, world!');";

  const setup = (props = {}) => {
    render(<Snippet language="javascript" code={code} {...props} />);
  };

  it('renders the code snippet', () => {
    setup();
    expect(screen.getByText("console.log('Hello, world!');")).toBeInTheDocument();
  });

  it('renders the copy button when copyable is true', () => {
    setup({ copyable: true });
    expect(screen.getByLabelText('Copy code to clipboard')).toBeInTheDocument();
  });

  it('copies the code to clipboard when copy button is clicked', () => {
    setup({ copyable: true });
    document.execCommand = jest.fn();
    fireEvent.click(screen.getByLabelText('Copy code to clipboard'));
    expect(document.execCommand).toHaveBeenCalledWith('copy');
  });

  it('shows "Copied!" after copying the code', () => {
    setup({ copyable: true });
    fireEvent.click(screen.getByLabelText('Copy code to clipboard'));
    expect(screen.getByText('Copied!')).toBeInTheDocument();
  });

  it('applies the correct theme class', () => {
    setup({ theme: 'dark' });
    const snippetElement = screen.getByRole('region');
    expect(snippetElement).toHaveClass('bg-gray-800');
  });
});
