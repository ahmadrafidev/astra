import React from 'react';
import { cn } from 'lib/utils';

export interface StatusDotProps {
    status: 'online' | 'offline' | 'busy';
    type?: 'dot' | 'icon';
    icon?: React.ReactNode;
    label?: string;
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

const StatusDot: React.FC<StatusDotProps> = ({
    status,
    type = 'dot',
    icon,
    label,
    className,
    children,
}) => {

    const isIcon = type === 'icon' && icon;

    return (
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
    );
};

StatusDot.displayName = "StatusDot";
export default StatusDot;
