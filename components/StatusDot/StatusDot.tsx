'use client';

import React from 'react';

export interface StatusDotProps {
    status: 'online' | 'offline' | 'busy';
}

const statusColors = {
    online: 'bg-green-500',
    offline: 'bg-gray-400',
    busy: 'bg-yellow-500',
};

const StatusDot: React.FC<StatusDotProps> = ({ status }) => {
    return (
        <span
            className={`inline-block w-3 h-3 rounded-full ${statusColors[status]}`}
        />
    );
};

StatusDot.displayName = "StatusDot";
export default StatusDot;
