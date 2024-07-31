export const aboutList = [
    { name: 'Overview', path: '/about' },
];

export const foundationList = [
    { 
        name: 'Accessibility', 
        path: '/foundations/accessibility',
        description: 'Learn into our strategies for inclusive access and usability for everyone.' 
    },
    { 
        name: 'Brand Expression', 
        path: '/foundations/brand',
        description: 'Discover how we ensure a consistent brand identity across all designs.' 
    },
    { 
        name: 'Color', 
        path: '/foundations/color',
        description: 'Explore our color palette and learn how to create a harmonious look.' 
    },
    { 
        name: 'Content Standard', 
        path: '/foundations/content',
        description: 'Uncover our guidelines for creating clear and engaging content.' 
    },
    { 
        name: 'Data Visualization', 
        path: '/foundations/data-visualization',
        description: 'Explore techniques for presenting data in a clear and impactful way.' 
    },
    { 
        name: 'Motion', 
        path: '/foundations/motion',
        description: 'Understand principles for creating smooth and responsive animations.' 
    },
    { 
        name: 'Screen Sizes', 
        path: '/foundations/screen-sizes',
        description: 'See how we design responsive interfaces for all devices.'
    },
    { 
        name: 'Typography', 
        path: '/foundations/typography',
        description: 'Discover typography styles that enhance readability and accessibility.' 
    },
];

export const componentsList = [
    { name: 'Accordion', path: '/components/accordion' },
    { name: 'Alert', path: '/components/alert' },
    { name: 'AlertDialog', path: '/components/alert-dialog' },
    { name: 'Avatar', path: '/components/avatar' },
    { name: 'AvatarGroup', path: '/components/avatar-group' },
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
    { name: 'Header', path: '/components/header' },
    { name: 'IconButton', path: '/components/icon-button'},
    { name: 'Input', path: '/components/input' },
    { name: 'List', path: '/components/list' },
    { name: 'Modal', path: '/components/modal' },
    { name: 'Navbar', path: '/components/navbar' },
    { name: 'Notification', path: '/components/notification' },
    { name: 'Pagination', path: '/components/pagination' },
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
        { name: 'IconButton', path: '/components/icon-button', description: 'A button that displays an icon, typically used for actions.' },
    ],
    layout: [
        { name: 'Card', path: '/components/card', description: 'Container for grouping related information.' },
        { name: 'List', path: '/components/list', description: 'Displays a list of items in an ordered or unordered format.' },
        { name: 'Modal', path: '/components/modal', description: 'A dialog box/popup window that is displayed on top of the current page.' },
        { name: 'Navbar', path: '/components/navbar', description: 'A navigation bar for providing links to different sections of the site.' },
        { name: 'Header', path: '/components/header', description: 'The top section of a webpage, often containing navigation links and branding.' },
        { name: 'Accordion', path: '/components/accordion', description: 'A collapsible section of content, useful for FAQs and more.' },
        { name: 'Carousel', path: '/components/carousel', description: 'Displays a series of content in a slideshow format.' },
        { name: 'Collapse', path: '/components/collapse', description: 'Hides and shows content in a toggled manner.' },
        { name: 'ProgressTracker', path: '/components/progress-tracker', description: 'Shows steps and progress through a multi-step process.' },
        { name: 'Stepper', path: '/components/stepper', description: 'Indicates progress through a sequence of logical and numbered steps.' },
    ],
    selectionAndInput: [
        { name: 'Checkbox', path: '/components/checkbox', description: 'Allows the user to select one or more options from a set.' },
        { name: 'RadioButton', path: '/components/radio-button', description: 'Allows the user to select one option from a set.' },
        { name: 'Input', path: '/components/input', description: 'A field for user input, such as text, numbers, or passwords.' },
        { name: 'Select', path: '/components/select', description: 'A dropdown menu for selecting options.' },
        { name: 'Rating', path: '/components/rating', description: 'Allows users to provide ratings, typically with stars.' },
        { name: 'Slider', path: '/components/slider', description: 'A control for selecting a value from a range.' },
        { name: 'TextArea', path: '/components/text-area', description: 'A multi-line input field for longer text.' },
        { name: 'Toggle', path: '/components/toggle', description: 'A switch that allows the user to toggle between two states.' },
        { name: 'Switch', path: '/components/switch', description: 'Toggle switches for binary options.' },
    ],
    imagesAndIcons: [
        { name: 'Avatar', path: '/components/avatar', description: 'Displays user profile images or icons.' },
        { name: 'AvatarGroup', path: '/components/avatar-group', description: 'Displays list of avatars.' },
        { name: 'Badge', path: '/components/badge', description: 'Small count and labeling component to signify status or counts.' },
        { name: 'StatusDot', path: '/components/status-dot', description: 'Indicates status with colored dots.' },
    ],
    feedbackIndicators: [
        { name: 'Alert', path: '/components/alert', description: 'Displays important messages in a prominent way to attract user attention.' },
        { name: 'AlertDialog', path: '/components/alert-dialog', description: 'A dialog that requires user acknowledgment before they can proceed.' },
        { name: 'Notification', path: '/components/notification', description: 'Informs users about important updates or changes.' },
        { name: 'ProgressBar', path: '/components/progress-bar', description: 'Visual representation of the progress of a task.' },
        { name: 'Spinner', path: '/components/spinner', description: 'Indicates loading or ongoing process.' },
        { name: 'SkeletonLoader', path: '/components/skeleton-loader', description: 'Placeholder content while the actual content is loading.' },
        { name: 'Snackbar', path: '/components/snackbar', description: 'Brief messages that appear at the bottom of the screen.' },
        { name: 'ErrorMessage', path: '/components/error', description: 'Displays error messages in a consistent manner.' },
    ],
    navigation: [
        { name: 'Breadcrumbs', path: '/components/breadcrumbs', description: 'Navigational aid to show the user’s current location in a hierarchy.' },
        { name: 'Tabs', path: '/components/tabs', description: 'Navigational elements to switch between different views or sections.' },
        { name: 'Pagination', path: '/components/pagination', description: 'Controls to navigate through paginated content.' },
    ],
    overlays: [
        { name: 'Dialog', path: '/components/dialog', description: 'A window overlaid on either the primary window or another dialog window.' },
        { name: 'Tooltip', path: '/components/tooltip', description: 'Displays additional information when hovering over an element.' },
        { name: 'Dropdown', path: '/components/dropdown', description: 'A list of options that appears when the user interacts with a button.' },
    ],
    utilities: [
        { name: 'SearchBar', path: '/components/search-bar', description: 'Enables users to search through content.' },
        { name: 'Snippet', path: '/components/snippet', description: 'Displays code snippets with syntax highlighting.' },
    ],
};
