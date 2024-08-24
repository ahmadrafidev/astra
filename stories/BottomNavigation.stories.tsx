import React, { useState } from 'react';

import { Meta, StoryFn } from '@storybook/react';
import { Home, Search, User } from 'lucide-react';

import BottomNavigation, { BottomNavigationProps } from '@/components/BottomNavigation/BottomNavigation';

export default {
    title: 'Components/Bottom Navigation',
    component: BottomNavigation,
} as Meta<BottomNavigationProps>;

const Template: StoryFn<BottomNavigationProps> = (args) => {
    const [activeItem, setActiveItem] = useState(args.activeItem);

    const handleItemClick = (label: string) => {
        setActiveItem(label);
        args.onItemClick(label);
    };

    return <BottomNavigation {...args} activeItem={activeItem} onItemClick={handleItemClick} />;
};

export const Default = Template.bind({});
Default.args = {
    items: [
        { icon: Home, label: 'Home' },
        { icon: Search, label: 'Search' },
        { icon: User, label: 'Profile' },
    ],
    activeItem: 'Home',
};
