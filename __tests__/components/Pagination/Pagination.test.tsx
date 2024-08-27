import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Pagination, { PaginationProps } from '../../../components/Pagination/Pagination';

describe('Pagination Component', () => {
  const setup = (props: Partial<PaginationProps> = {}) => {
    const onPageChangeMock = jest.fn();
    render(
      <Pagination
        totalItems={50}
        itemsPerPage={10}
        currentPage={1}
        onPageChange={onPageChangeMock}
        {...props}
      />
    );
    return { onPageChangeMock };
  };

  test('renders pagination buttons correctly', () => {
    setup();

    // Check if pagination buttons are rendered
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('disables "Previous" button on the first page', () => {
    setup();

    expect(screen.getByText('Previous')).toBeDisabled();
  });

  test('disables "Next" button on the last page', () => {
    setup({ currentPage: 5 });

    expect(screen.getByText('Next')).toBeDisabled();
  });

  test('calls onPageChange with correct page number on button click', () => {
    const { onPageChangeMock } = setup();

    // Click on page 2
    fireEvent.click(screen.getByText('2'));
    expect(onPageChangeMock).toHaveBeenCalledWith(2);

    // Click on "Next" button
    fireEvent.click(screen.getByText('Next'));
    expect(onPageChangeMock).toHaveBeenCalledWith(2); // From page 1 to 2
  });

  test('does not go to a page out of range', () => {
    const { onPageChangeMock } = setup();

    // Try to click on "Previous" button on the first page
    fireEvent.click(screen.getByText('Previous'));
    expect(onPageChangeMock).not.toHaveBeenCalled();

    // Set up for last page
    setup({ currentPage: 5 });

    // Try to click on "Next" button on the last page
    fireEvent.click(screen.getByText('Next'));
    expect(onPageChangeMock).not.toHaveBeenCalled();
  });
});
