import React from 'react';
import { cn } from 'lib/utils';

/**
 * Props for the StatusDot component.
 * 
 * @typedef {Object} StatusDotProps
 * @property {'online' | 'offline' | 'busy'} status - The status to be represented.
 * @property {'dot' | 'icon'} [type='dot'] - The type of status indicator, either a dot or an icon.
 * @property {React.ReactNode} [icon] - The icon to be displayed if type is 'icon'.
 * @property {string} [label] - Custom label for the status.
 * @property {boolean} [showLabel=true] - Whether to show the label next to the status indicator.
 * @property {string} [className] - Additional class names for custom styling.
 * @property {React.ReactNode} [children] - Content to be displayed inside the status indicator.
 */
export interface StatusDotProps {
    status: 'online' | 'offline' | 'busy';
    type?: 'dot' | 'icon';
    icon?: React.ReactNode;
    label?: string;
    showLabel?: boolean;
    className?: string;
    children?: React.ReactNode;
}

const statusColors = {
    online: 'bg-green-500',
    offline: 'bg-gray-500',
    busy: 'bg-red-500',
};

const statusLabels = {
    online: 'Online',
    offline: 'Offline',
    busy: 'Busy',
};

/**
 * StatusDot component for displaying a status indicator.
 * 
 * @component
 * @param {StatusDotProps} props - Props for the StatusDot component.
 * @returns {JSX.Element} The rendered StatusDot component.
 */
const StatusDot: React.FC<StatusDotProps> = ({
    status,
    type = 'dot',
    icon,
    label,
    showLabel = true,
    className,
    children,
}) => {

    const isIcon = type === 'icon' && icon;

    return (
        <div className="flex items-center space-x-2">
            <span
                className={cn(
                    'inline-flex items-center justify-center rounded-full text-white',
                    isIcon ? '' : statusColors[status],
                    className
                )}
                role="status"
                aria-label={label || statusLabels[status]}
            >
                {isIcon ? icon : children}
            </span>
            {showLabel && <p className="text-gray-900 dark:text-gray-50 font-normal font-sans text-base">{label || statusLabels[status]}</p>}
        </div>
    );
};

StatusDot.displayName = "StatusDot";
export default StatusDot;
