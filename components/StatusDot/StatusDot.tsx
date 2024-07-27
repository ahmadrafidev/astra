// components/StatusDot/StatusDot.tsx
import React from 'react';

export interface StatusDotProps {
    status: 'online' | 'offline' | 'busy';
    className?: string;
}

const statusColors = {
    online: 'bg-green-500',
    offline: 'bg-gray-400',
    busy: 'bg-red-500',
};

const statusLabels = {
    online: 'Online',
    offline: 'Offline',
    busy: 'Busy',
};

const StatusDot: React.FC<StatusDotProps> = ({ status, className }) => {
    return (
        <span
            className={`inline-block w-3 h-3 rounded-full ${statusColors[status]} ${className}`}
            role="status"
            aria-label={statusLabels[status]}
        />
    );
};

StatusDot.displayName = "StatusDot";
export default StatusDot;
