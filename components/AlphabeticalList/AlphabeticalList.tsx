import React from 'react';
import Link from 'next/link';

import { categorizedComponentsList } from '../../utils/constants/route';

const getAlphabeticalList = (categorizedList: { [key: string]: any[] }) => {
    const allComponents = Object.values(categorizedList).flat();
    return allComponents.sort((a, b) => a.name.localeCompare(b.name));
};

const AlphabeticalList: React.FC = () => {
    
    const sortedComponentList = getAlphabeticalList(categorizedComponentsList);
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {sortedComponentList.map((item) => (
                <div key={item.name} className="border p-4 rounded-lg hover:shadow-lg transition-shadow">
                    <Link href={item.path} className="text-gray-900 dark:text-gray-50">
                        {item.name}
                    </Link>
                    <p className="text-sm text-gray-900 dark:text-gray-100 mt-2 leading-loose">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

AlphabeticalList.displayName = "AlphabeticalList"
export default AlphabeticalList;
