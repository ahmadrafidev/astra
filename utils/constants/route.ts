export const aboutList = [
    { name: 'Overview', path: '/about' },
];

export const foundationList = [
    { 
        name: 'Accessibility', 
        path: '/foundations/accessibility',
        description: 'Explore the accessibility standards that AstraUI adheres to, ensuring inclusivity for all users.' 
    },
    { 
        name: 'Brand expression', 
        path: '/foundations/brand',
        description: 'Learn how AstraUI maintains brand consistency across various components and designs.' 
    },
    { 
        name: 'Color', 
        path: '/foundations/color',
        description: 'Explore the color palette used in AstraUI, including primary, secondary, and neutral colors.' 
    },
    { 
        name: 'Content standards', 
        path: '/foundations/content',
        description: 'Understand the content standards that guide the creation and presentation of information within AstraUI.' 
    },
    { 
        name: 'Data visualization', 
        path: '/foundations/data-visualization',
        description: 'Explore the data visualization techniques and standards used in AstraUI.' 
    },
    { 
        name: 'Screen sizes', 
        path: '/foundations/screen-sizes',
        description: 'Learn about the responsive design principles and screen size guidelines in AstraUI for Web, Android, and iOS.' 
    },
    { 
        name: 'Typography', 
        path: '/foundations/typography',
        description: 'Understand the typographic styles and standards used in AstraUI to ensure readability and accessibility.' 
    },
];


export const componentsList = [
    { name: 'Accordion', path: '/components/accordion' },
    { name: 'Alert', path: '/components/alert' },
    { name: 'AlertDialog', path: '/components/alert-dialog' },
    { name: 'Avatar', path: '/components/avatar' },
    { name: 'Badge', path: '/components/badge' },
    { name: 'Breadcrumbs', path: '/components/breadcrumbs' },
    { name: 'Button', path: '/components/button' },
    { name: 'Card', path: '/components/card' },
    { name: 'Carousel', path: '/components/carousel' },
    { name: 'Checkbox', path: '/components/checkbox' },
    { name: 'Collapse', path: '/components/collapse' },
    { name: 'Dialog', path: '/components/dialog' },
    { name: 'Dropdown', path: '/components/dropdown' },
    { name: 'Error', path: '/components/error' },
    { name: 'Footer', path: '/components/footer' },
    { name: 'Header', path: '/components/header' },
    { name: 'Input', path: '/components/input' },
    { name: 'List', path: '/components/list' },
    { name: 'Modal', path: '/components/modal' },
    { name: 'Navbar', path: '/components/navbar' },
    { name: 'Notification', path: '/components/notification' },
    { name: 'ProgressBar', path: '/components/progress-bar' },
    { name: 'ProgressTracker', path: '/components/progress-tracker' },
    { name: 'RadioButton', path: '/components/radio-button' },
    { name: 'Rating', path: '/components/rating' },
    { name: 'SearchBar', path: '/components/search-bar' },
    { name: 'Select', path: '/components/select' },
    { name: 'SkeletonLoader', path: '/components/skeleton-loader' },
    { name: 'Slider', path: '/components/slider' },
    { name: 'Snackbar', path: '/components/snackbar' },
    { name: 'Snippet', path: '/components/snippet' },
    { name: 'Spinner', path: '/components/spinner' },
    { name: 'StatusDot', path: '/components/status-dot' },
    { name: 'Stepper', path: '/components/stepper' },
    { name: 'Switch', path: '/components/switch' },
    { name: 'Tabs', path: '/components/tabs' },
    { name: 'TextArea', path: '/components/text-area' },
    { name: 'Toggle', path: '/components/toggle' },
    { name: 'Tooltip', path: '/components/tooltip' },
];

export const categorizedComponentsList = {
    actions: [
        { name: 'Button', path: '/components/button', description: 'Triggers actions or events, such as submitting a form or saving data.' },
    ],
    layoutAndStructure: [
        { name: 'Card', path: '/components/card', description: 'Container for grouping related information.' },
        { name: 'List', path: '/components/list', description: 'Displays a list of items in an ordered or unordered format.' },
        { name: 'Modal', path: '/components/modal', description: 'A dialog box/popup window that is displayed on top of the current page.' },
        { name: 'Navbar', path: '/components/navbar', description: 'A navigation bar for providing links to different sections of the site.' },
        { name: 'Footer', path: '/components/footer', description: 'The bottom section of a webpage, often containing links and information.' },
        { name: 'Header', path: '/components/header', description: 'The top section of a webpage, often containing navigation links and branding.' },
    ],
    selectionAndInput: [
        { name: 'Checkbox', path: '/components/checkbox', description: 'Allows the user to select one or more options from a set.' },
        { name: 'RadioButton', path: '/components/radio-button', description: 'Allows the user to select one option from a set.' },
        { name: 'Input', path: '/components/input', description: 'A field for user input, such as text, numbers, or passwords.' },
        { name: 'Select', path: '/components/select', description: 'A dropdown menu for selecting options.' },
    ],
    imagesAndIcons: [
        { name: 'Avatar', path: '/components/avatar', description: 'Displays user profile images or icons.' },
        { name: 'Badge', path: '/components/badge', description: 'Small count and labeling component to signify status or counts.' },
    ],
    feedbackIndicators: [
        { name: 'Alert', path: '/components/alert', description: 'Displays important messages in a prominent way to attract user attention.' },
        { name: 'AlertDialog', path: '/components/alert-dialog', description: 'A dialog that requires user acknowledgment before they can proceed.' },
        { name: 'Notification', path: '/components/notification', description: 'Informs users about important updates or changes.' },
        { name: 'ProgressBar', path: '/components/progress-bar', description: 'Visual representation of the progress of a task.' },
        { name: 'Spinner', path: '/components/spinner', description: 'Indicates loading or ongoing process.' },
        { name: 'SkeletonLoader', path: '/components/skeleton-loader', description: 'Placeholder content while the actual content is loading.' },
        { name: 'Snackbar', path: '/components/snackbar', description: 'Brief messages that appear at the bottom of the screen.' },
    ],
    navigation: [
        { name: 'Breadcrumbs', path: '/components/breadcrumbs', description: 'Navigational aid to show the user’s current location in a hierarchy.' },
        { name: 'Tabs', path: '/components/tabs', description: 'Navigational elements to switch between different views or sections.' },
    ],
    overlays: [
        { name: 'Dialog', path: '/components/dialog', description: 'A window overlaid on either the primary window or another dialog window.' },
        { name: 'Tooltip', path: '/components/tooltip', description: 'Displays additional information when hovering over an element.' },
    ],
    utilities: [
        { name: 'SearchBar', path: '/components/search-bar', description: 'Enables users to search through content.' },
    ],
};


