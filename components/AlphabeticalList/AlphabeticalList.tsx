import React from 'react';
import Link from 'next/link';

import { CATEGORIZED_COMPONENT_LIST } from '../../utils/constants/route';

const getAlphabeticalList = (categorizedList: { [key: string]: any[] }) => {
    const allComponents = Object.values(categorizedList).flat();
    return allComponents.sort((a, b) => a.name.localeCompare(b.name));
};

const AlphabeticalList: React.FC = () => {

    const sortedComponentList = getAlphabeticalList(CATEGORIZED_COMPONENT_LIST);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {sortedComponentList.map((item) => (
                <Link
                    key={item.name}
                    href={item.path}
                    className="block border p-4 rounded-lg transition-all duration-300 bg-zinc-50 dark:bg-zinc-950 hover:shadow-lg hover:bg-zinc-100 dark:hover:bg-zinc-800/90 dark:border-gray-700"
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
    );
};

AlphabeticalList.displayName = "AlphabeticalList";
export default AlphabeticalList;
