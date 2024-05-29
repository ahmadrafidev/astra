import React from 'react';
import classNames from 'classnames';

interface SkeletonLoaderProps {
    width?: string;
    height?: string;
    className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ width = '100%', height = '1rem', className }) => {
    return (
        <div
            className={classNames(
            'bg-gray-300 dark:bg-gray-700 animate-pulse rounded',
            className
            )}
            style={{ width, height }}
        />
    );
};

export default SkeletonLoader;
