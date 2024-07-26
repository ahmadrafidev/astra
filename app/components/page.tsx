import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";

import Layout from '../../components/Layout/Layout';
import Badge from '../../components/Badge/Badge';
import { Tabs, Tab } from '../../components/Tabs/Tabs';

import { componentsList, categorizedComponentsList } from '../../utils/constants/route';

export const metadata: Metadata = {
    title: "Component",
    description: "The building blocks of modern UI",
};

const AstraComponentPage: React.FC = () => {

    const sortedComponentList = [...componentsList].sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    return (
        <Layout>
            <Badge text="Components"/>
            <h1 className="text-2xl md:text-4xl font-medium mb-3 text-gray-900 dark:text-gray-50">Components</h1>
            <div className="mb-8">
                <p className="mb-4 text-md text-gray-800 dark:text-white leading-loose text-justify">
                    The components section offers a comprehensive overview of every UI component in AstraUI. 
                    Each component is designed to be customizable, accessible, and easy to integrate into projects across web, Android, and iOS ecosystems. 
                    Explore the documentation for detailed information on features, usage, and customization options.
                </p>
                <div className="my-8">
                    <Tabs>
                        <Tab label="Alphabetical">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                                {sortedComponentList.map((item) => (
                                    <div key={item.name} className="border p-4 rounded-lg hover:shadow-lg transition-shadow">
                                        <Link href={item.path} className="text-gray-900 dark:text-gray-50">
                                            {item.name}
                                        </Link>
                                        <Link href={item.path}>
                                            <p className="text-sm text-gray-900 dark:text-gray-100 mt-2 leading-loose">
                                                {item.name === 'Accordion' && 'A collapsible section of content, useful for FAQs and more.'}
                                                {item.name === 'Alert' && 'Displays important messages in a prominent way to attract user attention.'}
                                                {item.name === 'AlertDialog' && 'A dialog that requires user acknowledgment before they can proceed.'}
                                                {item.name === 'Avatar' && 'Displays user profile images or icons.'}
                                                {item.name === 'AvatarGroup' && 'Displays list of avatar.'}
                                                {item.name === 'Badge' && 'Small count and labeling component to signify status or counts.'}
                                                {item.name === 'Breadcrumbs' && 'Navigational aid to show the user’s current location in a hierarchy.'}
                                                {item.name === 'Button' && 'Triggers actions or events, such as submitting a form or saving data.'}
                                                {item.name === 'Card' && 'Container for grouping related information.'}
                                                {item.name === 'Carousel' && 'Displays a series of content in a slideshow format.'}
                                                {item.name === 'Checkbox' && 'Allows the user to select one or more options from a set.'}
                                                {item.name === 'Collapse' && 'Hides and shows content in a toggled manner.'}
                                                {item.name === 'Dialog' && 'A window overlaid on either the primary window or another dialog window.'}
                                                {item.name === 'Dropdown' && 'A list of options that appears when the user interacts with a button.'}
                                                {item.name === 'Error' && 'Displays error messages in a consistent manner.'}
                                                {item.name === 'Footer' && 'The bottom section of a webpage, often containing links and information.'}
                                                {item.name === 'Header' && 'The top section of a webpage, often containing navigation links and branding.'}
                                                {item.name === 'Input' && 'A field for user input, such as text, numbers, or passwords.'}
                                                {item.name === 'List' && 'Displays a list of items in an ordered or unordered format.'}
                                                {item.name === 'Modal' && 'A dialog box/popup window that is displayed on top of the current page.'}
                                                {item.name === 'Navbar' && 'A navigation bar for providing links to different sections of the site.'}
                                                {item.name === 'Notification' && 'Informs users about important updates or changes.'}
                                                {item.name === 'ProgressBar' && 'Visual representation of the progress of a task.'}
                                                {item.name === 'ProgressTracker' && 'Shows steps and progress through a multi-step process.'}
                                                {item.name === 'RadioButton' && 'Allows the user to select one option from a set.'}
                                                {item.name === 'Rating' && 'Allows users to provide ratings, typically with stars.'}
                                                {item.name === 'SearchBar' && 'Enables users to search through content.'}
                                                {item.name === 'Select' && 'A dropdown menu for selecting options.'}
                                                {item.name === 'SkeletonLoader' && 'Placeholder content while the actual content is loading.'}
                                                {item.name === 'Slider' && 'A control for selecting a value from a range.'}
                                                {item.name === 'Snackbar' && 'Brief messages that appear at the bottom of the screen.'}
                                                {item.name === 'Spinner' && 'Indicates loading or ongoing process.'}
                                                {item.name === 'StatusDot' && 'Indicates status with colored dots.'}
                                                {item.name === 'Stepper' && 'Indicates progress through a sequence of logical and numbered steps.'}
                                                {item.name === 'Snippet' && 'Displays code snippets with syntax highlighting.'}
                                                {item.name === 'Switch' && 'Toggle switches for binary options.'}
                                                {item.name === 'Tabs' && 'Navigational elements to switch between different views or sections.'}
                                                {item.name === 'TextArea' && 'A multi-line input field for longer text.'}
                                                {item.name === 'Toggle' && 'A switch that allows the user to toggle between two states.'}
                                                {item.name === 'Tooltip' && 'Displays additional information when hovering over an element.'}
                                            </p>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </Tab>
                        <Tab label="Categorical">
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
                        </Tab>
                    </Tabs>
                </div>  
            </div>
        </Layout>
    );
};

export default AstraComponentPage;
