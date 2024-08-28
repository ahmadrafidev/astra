import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import AvatarGroup from '../../../components/AvatarGroup/AvatarGroup';

describe('AvatarGroup Component', () => {
  const avatars = [
    { src: '/images/android-image.png', alt: 'Avatar 1' },
    { src: '/images/apple-image.png', alt: 'Avatar 2' },
  ];

  it('renders the correct number of avatars based on the max prop', () => {
    render(<AvatarGroup avatars={avatars} max={2} />);
    const avatarImages = screen.getAllByRole('img');
    expect(avatarImages).toHaveLength(2);
  });

  it('renders additional avatar count if there are more avatars than max', () => {
    render(<AvatarGroup avatars={avatars} max={2} />);
    expect(screen.getByText('+2')).toBeInTheDocument();
  });

  it('applies the correct size class based on the size prop', () => {
    render(<AvatarGroup avatars={avatars} size="lg" />);
    const avatarImages = screen.getAllByRole('img');
    avatarImages.forEach((img) => {
      expect(img).toHaveAttribute('width', '42');
      expect(img).toHaveAttribute('height', '42');
    });
  });

  it('applies the correct shape class based on the shape prop', () => {
    render(<AvatarGroup avatars={avatars} shape="square" />);
    const avatarImages = screen.getAllByRole('img');
    avatarImages.forEach((img) => {
      expect(img).toHaveClass('rounded-lg');
    });
  });

  it('applies additional class names provided via the className prop', () => {
    render(<AvatarGroup avatars={avatars} className="custom-class" />);
    const avatarGroupElement = screen.getByRole('group');
    expect(avatarGroupElement).toHaveClass('custom-class');
  });

  it('renders overlapping avatars correctly based on the overlap prop', () => {
    render(<AvatarGroup avatars={avatars} overlap="lg" />);
    const avatarGroupElement = screen.getByRole('group');
    expect(avatarGroupElement).toHaveClass('-space-x-3');
  });
});
