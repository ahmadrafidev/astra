import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import SkeletonLoader from '../../../components/SkeletonLoader/SkeletonLoader';

describe('SkeletonLoader Component', () => {
  it('renders with default props', () => {
    const { getByRole } = render(<SkeletonLoader />);
    expect(getByRole('status')).toBeInTheDocument();
  });

  it('renders multiple skeletons when count prop is provided', () => {
    const { getAllByRole } = render(<SkeletonLoader count={3} />);
    expect(getAllByRole('status')).toHaveLength(3);
  });

  it('applies custom class names and styles', () => {
    const { getByRole } = render(<SkeletonLoader className="custom-class" width="50px" height="20px" />);
    const skeleton = getByRole('status');
    expect(skeleton).toHaveClass('custom-class');
    expect(skeleton).toHaveStyle('width: 50px');
    expect(skeleton).toHaveStyle('height: 20px');
  });

  it('applies the correct shape classes', () => {
    const { getByRole } = render(<SkeletonLoader shape="circle" />);
    expect(getByRole('status')).toHaveClass('rounded-full');
  });

  it('applies the correct animation classes', () => {
    const { getByRole } = render(<SkeletonLoader animation="wave" />);
    expect(getByRole('status')).toHaveClass('animate-wave');
  });
});
