// pages/documentation/index.tsx
import React from 'react';
import Layout from '../../components/Layout/Layout';
import Link from 'next/link';
import { foundationList, componentsList } from '../../utils/constants/route';

const Page: React.FC = () => {
    return (
        <Layout>
            <h1 className="text-2xl md:text-3xl font-medium mb-4">Astra UI Documentation</h1>
            <p className="mb-8 text-sm md:text-base text-gray-700 dark:text-gray-300">
                Welcome to the Astra UI documentation. This comprehensive guide provides everything you need to build beautiful, consistent, and accessible user interfaces using Astra UI components. Here, you will find detailed explanations, usage examples, and customization options for each component in the library. Whether you are a beginner or an experienced developer, Astra UI aims to streamline your development process and enhance your productivity.
            </p>
            <div className="mb-8">
                <h2 className="text-xl md:text-2xl font-medium mb-4">Foundation</h2>
                <p className="mb-4 text-md text-gray-700 dark:text-gray-300">
                    The foundation section covers the core principles and philosophy behind Astra UI. It provides insights into the purpose, goals, and guiding principles that shape the development of this UI library.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {foundationList.map((item) => (
                        <div key={item.name} className="border p-4 rounded-lg hover:shadow-lg transition-shadow">
                            <Link href={item.path} className="text-blue-500 hover:underline">
                                {item.name}
                            </Link>
                            <p className="text-sm text-gray-600 mt-2">
                                {item.name === 'About' && 'Learn more about Astra UI, its purpose, and the principles that guide its design and development.'}
                                {item.name === 'Philosophy' && 'Discover the core philosophy behind Astra UI and how it aims to make development easier and more accessible.'}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="text-xl md:text-2xl font-medium mb-4">Components</h2>
                <p className="mb-4 text-md text-gray-700 dark:text-gray-300">
                    The components section provides a detailed overview of each UI component available in Astra UI. From buttons to modals, each component is designed to be customizable, accessible, and easy to integrate into your projects. Explore the documentation for each component to learn about its features, usage, and customization options.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {componentsList.map((item) => (
                        <div key={item.name} className="border p-4 rounded-lg hover:shadow-lg transition-shadow">
                            <Link href={item.path} className="text-blue-500 hover:underline">
                                {item.name}
                            </Link>
                            <p className="text-sm text-gray-600 mt-2">
                                {item.name === 'Accordion' && 'A collapsible section of content, useful for FAQs and more.'}
                                {item.name === 'Alert' && 'Displays important messages in a prominent way to attract user attention.'}
                                {item.name === 'AlertDialog' && 'A dialog that requires user acknowledgment before they can proceed.'}
                                {item.name === 'Avatar' && 'Displays user profile images or icons.'}
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
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Page;
