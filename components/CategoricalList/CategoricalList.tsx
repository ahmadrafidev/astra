import React from 'react';
import Link from 'next/link';

import { categorizedComponentsList } from '../../utils/constants/route';

const CategoricalList: React.FC = () => {
    return (
        <>
            {Object.entries(categorizedComponentsList).map(([category, components]) => (
                <div key={category} className="mt-6">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50 capitalize">
                        {category.replace(/([A-Z])/g, ' $1')}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
                        {components.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                className="block border p-4 rounded-lg transition-all duration-300 hover:shadow-lg bg-zinc-50 dark:bg-zinc-950 hover:bg-zinc-100 dark:hover:bg-zinc-800/90 dark:border-gray-700"
                            >
                                <div>
                                    <h2 className="text-gray-900 dark:text-white text-lg md:text-xl font-normal">
                                        {item.name}
                                    </h2>
                                    <p className="text-sm text-gray-700 dark:text-gray-100 mt-2 leading-loose font-normal">
                                        {item.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

CategoricalList.displayName = "CategoricalList";
export default CategoricalList;
