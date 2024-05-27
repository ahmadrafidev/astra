// components/Layout.tsx
import React from 'react';
import Link from 'next/link';

interface LayoutProps {
    children: React.ReactNode;
}

const componentsList = [
    { name: 'Button', path: '/documentation/button' },
    { name: 'Input', path: '/documentation/input' },
    { name: 'Checkbox', path: '/documentation/checkbox' },
    { name: 'RadioButton', path: '/documentation/radiobutton' },
    { name: 'Select', path: '/documentation/select' },
    { name: 'TextArea', path: '/documentation/textarea' },
    { name: 'ProgressBar', path: '/documentation/progressbar' },
    { name: 'Slider', path: '/documentation/slider' },
    { name: 'Switch', path: '/documentation/switch' },
    { name: 'Modal', path: '/documentation/modal' },
    { name: 'Pagination', path: '/documentation/pagination' },
    { name: 'Spinner', path: '/documentation/spinner' },
    { name: 'Notification', path: '/documentation/notification' },
    { name: 'Tabs', path: '/documentation/tabs' },
    { name: 'List', path: '/documentation/list' },
    { name: 'Card', path: '/documentation/card' },
    { name: 'Avatar', path: '/documentation/avatar' },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex">
            <aside className="w-64 bg-gray-200 h-screen p-4">
            <h2 className="text-xl font-bold mb-4">Components</h2>
            <ul>
                {componentsList.map((component) => (
                <li key={component.name} className="mb-2">
                    <Link href={component.path}>
                        {component.name}
                    </Link>
                </li>
                ))}
            </ul>
            </aside>
            <main className="flex-1 p-4">
                {children}
            </main>
        </div>
    );
};

export default Layout;
