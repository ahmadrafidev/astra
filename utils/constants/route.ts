export const aboutList = [
    { name: 'Overview', path: '/about' },
];

export const foundationList = [
    { 
        name: 'Accessibility', 
        path: '/foundations/accessibility',
        description: 'Strategies for inclusive access and usability for all users.' 
    },
    { 
        name: 'Brand Expression', 
        path: '/foundations/brand',
        description: 'Ensuring consistent brand identity across all designs.' 
    },
    { 
        name: 'Color', 
        path: '/foundations/color',
        description: 'Color palette and methods for creating a harmonious look.' 
    },
    { 
        name: 'Content Standard', 
        path: '/foundations/content',
        description: 'Guidelines for creating clear and engaging content.' 
    },
    { 
        name: 'Data Visualization', 
        path: '/foundations/data-visualization',
        description: 'Techniques for presenting data in a clear and impactful way.' 
    },
    { 
        name: 'Motion', 
        path: '/foundations/motion',
        description: 'Principles for creating smooth and responsive animations.' 
    },
    { 
        name: 'Screen Sizes', 
        path: '/foundations/screen-sizes',
        description: 'Designing responsive interfaces for all devices.'
    },
    { 
        name: 'Typography', 
        path: '/foundations/typography',
        description: 'Typography styles that enhance readability and accessibility.' 
    },
];

export const componentsList = [
    { name: 'Accordion', path: '/components/accordion' },
    { name: 'Alert', path: '/components/alert' },
    { name: 'Alert Dialog', path: '/components/alert-dialog' },
    { name: 'Avatar', path: '/components/avatar' },
    { name: 'AvatarGroup', path: '/components/avatar-group' },
    { name: 'Badge', path: '/components/badge' },
    { name: 'Bottom Navigation', path: '/components/bottom-navigation' },
    { name: 'Breadcrumbs', path: '/components/breadcrumbs' },
    { name: 'Button', path: '/components/button' },
    { name: 'Card', path: '/components/card' },
    { name: 'Carousel', path: '/components/carousel' },
    { name: 'Checkbox', path: '/components/checkbox' },
    { name: 'Collapse', path: '/components/collapse' },
    { name: 'Dialog', path: '/components/dialog' },
    { name: 'Dropdown', path: '/components/dropdown' },
    { name: 'Error Message', path: '/components/error' },
    { name: 'File Uploader', path: '/components/file-uploader' },
    { name: 'Header', path: '/components/header' },
    { name: 'Icon Button', path: '/components/icon-button'},
    { name: 'Input', path: '/components/input' },
    { name: 'Keyboard Shortcut', path: '/components/keyboard-shortcut' },
    { name: 'List', path: '/components/list' },
    { name: 'Modal', path: '/components/modal' },
    { name: 'Navbar', path: '/components/navbar' },
    { name: 'Notification', path: '/components/notification' },
    { name: 'Pagination', path: '/components/pagination' },
    { name: 'Payment Card', path: '/components/payment-card'},
    { name: 'Phone Number', path: '/components/phone-number'},
    { name: 'PIN Code', path: '/components/pin-code'},
    { name: 'ProgressBar', path: '/components/progress-bar' },
    { name: 'Progress Tracker', path: '/components/progress-tracker' },
    { name: 'Radio', path: '/components/radio' },
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
        { name: 'Button', path: '/components/button', description: 'Clickable element to trigger actions or events.' },
        { name: 'Icon Button', path: '/components/icon-button', description: 'Compact button displaying an icon for space-efficient actions.' },
    ],
    layout: [
        { name: 'Card', path: '/components/card', description: 'Container for grouping related content in a visually distinct way.' },
        { name: 'List', path: '/components/list', description: 'Displays a collection of items in a structured format.' },
        { name: 'Modal', path: '/components/modal', description: 'A dialog box/popup window that is displayed on top of the current page.' },
        { name: 'Navbar', path: '/components/navbar', description: 'A navigation bar for providing links to different sections of the site.' },
        { name: 'Header', path: '/components/header', description: 'The top section of a webpage, often containing navigation links and branding.' },
        { name: 'Accordion', path: '/components/accordion', description: 'A collapsible section of content, useful for FAQs and more.' },
        { name: 'Carousel', path: '/components/carousel', description: 'Displays a series of content in a slideshow format.' },
        { name: 'Collapse', path: '/components/collapse', description: 'Hides and shows content in a toggled manner.' },
        { name: 'Progress Tracker', path: '/components/progress-tracker', description: 'Visual guide showing steps and progress through a multi-step process.' },
        { name: 'Stepper', path: '/components/stepper', description: 'Step-by-step interface for guiding users through processes.' },
        { name: 'Bottom Navigation', path: '/components/bottom-navigation', description: 'Mobile-friendly navigation bar fixed at screen bottom.' },
    ],
    selectionAndInput: [
        { name: 'Checkbox', path: '/components/checkbox', description: 'Allows the user to select one or more options from a set.' },
        { name: 'Radio', path: '/components/radio', description: 'Allows the user to select one option from a set.' },
        { name: 'Input', path: '/components/input', description: 'A field for user input, such as text, numbers, or passwords.' },
        { name: 'Select', path: '/components/select', description: 'A dropdown menu for selecting options.' },
        { name: 'Rating', path: '/components/rating', description: 'Interface for users to provide ratings or feedback' },
        { name: 'Slider', path: '/components/slider', description: 'A control for selecting a value from a range.' },
        { name: 'Text Area', path: '/components/text-area', description: 'A multi-line input field for longer text.' },
        { name: 'Toggle', path: '/components/toggle', description: 'A switch that allows the user to toggle between two states.' },
        { name: 'Switch', path: '/components/switch', description: 'Visual toggle switches for binary options.' },
        { name: 'File Uploader', path: '/components/file-uploader', description: 'Interface for selecting and uploading files.' },
        { name: 'Phone Number', path: '/components/phone-number', description: 'Specialized input for entering and validating phone numbers.' },
        { name: 'PIN Code', path: '/components/pin-code', description: 'Secure input for PIN codes or short numeric sequences.' },
        { name: 'Payment Card', path: '/components/payment-card', description: 'Form for capturing and validating payment card details.' },
    ],
    imagesAndIcons: [
        { name: 'Avatar', path: '/components/avatar', description: 'Displays circular image or icon representing a user.' },
        { name: 'Avatar Group', path: '/components/avatar-group', description: 'Compact displays of multiple user avatars.' },
        { name: 'Badge', path: '/components/badge', description: 'Small labeling or indicator for status, notifications, or counts.' },
        { name: 'Status Dot', path: '/components/status-dot', description: 'Colored dot for indicating status at a glance.' },
    ],
    feedbackIndicators: [
        { name: 'Alert', path: '/components/alert', description: 'Displays important messages in a prominent way to attract user attention.' },
        { name: 'Alert Dialog', path: '/components/alert-dialog', description: 'A dialog that requires user acknowledgment before they can proceed.' },
        { name: 'Notification', path: '/components/notification', description: 'Informs users about important updates or changes.' },
        { name: 'Progress Bar', path: '/components/progress-bar', description: 'Visual indicator of operation or process completion.' },
        { name: 'Spinner', path: '/components/spinner', description: 'Animated indicator for loading states.' },
        { name: 'Skeleton Loader', path: '/components/skeleton-loader', description: 'Placeholder UI while the actual content is loading.' },
        { name: 'Snackbar', path: '/components/snackbar', description: 'Brief messages that appear at the bottom of the screen.' },
        { name: 'Error Message', path: '/components/error', description: 'Displays error messages in a consistent manner.' },
    ],
    navigation: [
        { name: 'Breadcrumbs', path: '/components/breadcrumbs', description: 'Navigational aid to show the user’s current location in a hierarchy.' },
        { name: 'Tabs', path: '/components/tabs', description: 'Navigational elements organize and switch between related content sections.' },
        { name: 'Pagination', path: '/components/pagination', description: 'Navigation for breaking content into multiple pages.' },
    ],
    overlays: [
        { name: 'Dialog', path: '/components/dialog', description: 'Pop-up window for additional content or user input.' },
        { name: 'Tooltip', path: '/components/tooltip', description: 'Contextual information appearing on hover.' },
        { name: 'Dropdown', path: '/components/dropdown', description: 'Expandable menu revealing a list of options.' },
    ],
    utilities: [
        { name: 'Search Bar', path: '/components/search-bar', description: 'Input field for searching content within the application.' },
        { name: 'Snippet', path: '/components/snippet', description: 'Formatted display of code with syntax highlighting.' },
        { name: 'Keyboard Shortcut', path: '/components/keyboard-shortcut', description: 'Visual display of keyboard combinations for quick actions.' },
    ],
};
