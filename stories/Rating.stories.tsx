import React, { useState } from 'react';

import { Meta, StoryFn } from '@storybook/react';
import { Star } from 'lucide-react';

import Rating, { RatingProps } from '@/components/Rating/Rating';

export default {
    title: 'Components/Rating',
    component: Rating,
    argTypes: {
        maxRating: {
            control: { type: 'number', min: 1 },
            description: 'The maximum rating value.',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: '5' },
            },
        },
        defaultRating: {
            control: { type: 'number', min: 0 },
            description: 'The default rating value.',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: '0' },
            },
        },
        size: {
            control: { type: 'select', options: ['sm', 'md', 'lg'] },
            description: 'The size of the rating icons.',
            table: {
                type: { summary: "'sm' | 'md' | 'lg'" },
                defaultValue: { summary: 'md' },
            },
        },
        readOnly: {
            control: 'boolean',
            description: 'Whether the rating component is read-only.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        allowClear: {
            control: 'boolean',
            description: 'Whether the rating can be cleared.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        activeColor: {
            control: 'color',
            description: 'Color of the active rating icons.',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'text-yellow-400' },
            },
        },
        inactiveColor: {
            control: 'color',
            description: 'Color of the inactive rating icons.',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'text-gray-300' },
            },
        },
        icon: {
            description: 'Custom icon for the rating.',
            table: {
                type: { summary: 'React.ReactNode' },
            },
        },
        onRate: {
            action: 'rated',
            description: 'Function to call when the rating changes.',
            table: {
                type: { summary: '(rating: number | null) => void' },
            },
        },
        className: {
            control: 'text',
            description: 'Additional class names for custom styling.',
            table: {
                type: { summary: 'string' },
            },
        },
        label: {
            control: 'text',
            description: 'Accessible label for the rating component.',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Rating Component' },
            },
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'The Rating component allows users to provide feedback in the form of a star rating, with options for customization and interactivity.',
            },
        },
    },
} as Meta<RatingProps>;

const Template: StoryFn<RatingProps> = (args) => {
    const [rating, setRating] = useState<number>(args.defaultRating ?? 0);

    return (
        <Rating
            {...args}
            defaultRating={rating === 0 ? undefined : rating}
            onRate={(newRating) => setRating(newRating ?? 0)}
        />
    );
};

export const Default = Template.bind({});
Default.args = {
    maxRating: 5,
    defaultRating: 3,
    size: 'md',
    readOnly: false,
    allowClear: false,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
    maxRating: 5,
    defaultRating: 4,
    size: 'md',
    readOnly: true,
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
    maxRating: 5,
    defaultRating: 3,
    size: 'lg',
    icon: <Star fill="currentColor" className="w-6 h-6" />,
    activeColor: 'text-blue-500',
    inactiveColor: 'text-gray-300',
};

export const AllowClear = Template.bind({});
AllowClear.args = {
    maxRating: 5,
    defaultRating: 4,
    size: 'md',
    allowClear: true,
};
