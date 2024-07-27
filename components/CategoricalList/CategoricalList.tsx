import React from 'react';
import Link from 'next/link';

import { categorizedComponentsList } from '../../utils/constants/route';

const CategoricalList: React.FC = () => {
    return (
        <>
            {Object.entries(categorizedComponentsList).map(([category, components]) => (
                <div key={category} className="mt-6">
                    <h3 className="text-base md:text-lg lg:text-xl font-medium mb-2 text-gray-900 dark:text-gray-50 capitalize">{category.replace(/([A-Z])/g, ' $1')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
                        {components.map((item) => (
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
                </div>
            ))}
        </>
    );
};

CategoricalList.displayName = "CategoricalList"
export default CategoricalList;
