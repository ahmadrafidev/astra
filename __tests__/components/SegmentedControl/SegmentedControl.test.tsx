import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import SegmentedControl from '../../../components/SegmentedControl/SegmentedControl';

describe('SegmentedControl', () => {
  it('renders all segments', () => {
    const segments = ['Option 1', 'Option 2', 'Option 3'];
    const { getByText } = render(<SegmentedControl segments={segments} activeClassName="active" inactiveClassName="inactive" />);
    
    segments.forEach(segment => {
      expect(getByText(segment)).toBeInTheDocument();
    });
  });

  it('calls onSegmentChange when a segment is clicked', () => {
    const handleChange = jest.fn();
    const segments = ['Option 1', 'Option 2', 'Option 3'];
    const { getByText } = render(<SegmentedControl segments={segments} onSegmentChange={handleChange} activeClassName="active" inactiveClassName="inactive" />);
    
    fireEvent.click(getByText('Option 2'));
    expect(handleChange).toHaveBeenCalledWith('Option 2');
  });

  it('allows multiple segments to be selected if multiple is true', () => {
    const handleChange = jest.fn();
    const segments = ['Option 1', 'Option 2', 'Option 3'];
    const { getByText } = render(<SegmentedControl segments={segments} onSegmentChange={handleChange} multiple={true} activeClassName="active" inactiveClassName="inactive" />);
    
    fireEvent.click(getByText('Option 1'));
    fireEvent.click(getByText('Option 2'));
    
    expect(handleChange).toHaveBeenCalledWith(['Option 1', 'Option 2']);
  });

  it('applies active and inactive class names correctly', () => {
    const segments = ['Option 1', 'Option 2'];
    const { getByText } = render(<SegmentedControl segments={segments} defaultIndex={0} activeClassName="active" inactiveClassName="inactive" />);
    
    expect(getByText('Option 1')).toHaveClass('active');
    expect(getByText('Option 2')).toHaveClass('inactive');
  });
});
