export const BASE_URL = 'https://www.astraui.design/';

export const ABOUT_LIST = [
    { name: 'Overview', path: '/about' },
];

export const FOUNDATION_LIST = [
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
    {
        name: 'Colors',
        path: '/foundations/colors',
        description: 'Color system for cohesive visual design across platforms',
    },
    {
        name: 'Spacing',
        path: '/foundations/spacing',
        description: 'Consistent spacing system for layouts and component design',
    },
    {
        name: 'Icons',
        path: '/foundations/icons',
        description: 'Visual language for universal communication through iconography',
    },
];

export const COMPONENTS_LIST = [
    { name: 'Accordion', path: '/components/accordion' },
    { name: 'Alert', path: '/components/alert' },
    { name: 'Alert Dialog', path: '/components/alert-dialog' },
    { name: 'Avatar', path: '/components/avatar' },
    { name: 'Avatar Group', path: '/components/avatar-group' },
    { name: 'Badge', path: '/components/badge' },
    { name: 'Bottom Navigation', path: '/components/bottom-navigation' },
    { name: 'Breadcrumbs', path: '/components/breadcrumbs' },
    { name: 'Button', path: '/components/button' },
    { name: 'Card', path: '/components/card' },
    { name: 'Carousel', path: '/components/carousel' },
    { name: 'Checkbox', path: '/components/checkbox' },
    { name: 'Collapsible', path: '/components/collapsible' },
    { name: 'Divider', path: '/components/divider' },
    { name: 'Dock', path: '/components/dock' },
    { name: 'Dropdown', path: '/components/dropdown' },
    { name: 'Error Message', path: '/components/error' },
    { name: 'File Uploader', path: '/components/file-uploader' },
    { name: 'Icon Button', path: '/components/icon-button' },
    { name: 'Input', path: '/components/input' },
    { name: 'Keyboard Shortcut', path: '/components/keyboard-shortcut' },
    { name: 'List', path: '/components/list' },
    { name: 'Marquee', path: '/components/marquee' },
    { name: 'Modal', path: '/components/modal' },
    { name: 'Navigation Menu', path: '/components/navigation-menu' },
    { name: 'Notification', path: '/components/notification' },
    { name: 'Pagination', path: '/components/pagination' },
    { name: 'Payment Card', path: '/components/payment-card' },
    { name: 'Phone Number', path: '/components/phone-number' },
    { name: 'PIN Code', path: '/components/pin-code' },
    { name: 'Popover', path: '/components/popover' }, 
    { name: 'Progress Bar', path: '/components/progress-bar' },
    { name: 'Progress Tracker', path: '/components/progress-tracker' },
    { name: 'Radio', path: '/components/radio' },
    { name: 'Rating', path: '/components/rating' },
    { name: 'Scroll-to-Top Button', path: '/components/scroll-to-top-button' },
    { name: 'Search Bar', path: '/components/search-bar' },
    { name: 'Segmented Control', path: '/components/segmented-control' },
    { name: 'Select', path: '/components/select' },
    { name: 'Skeleton Loader', path: '/components/skeleton-loader' },
    { name: 'Slider', path: '/components/slider' },
    { name: 'Snackbar', path: '/components/snackbar' },
    { name: 'Snippet', path: '/components/snippet' },
    { name: 'Spinner', path: '/components/spinner' },
    { name: 'Status Dot', path: '/components/status-dot' },
    { name: 'Stepper', path: '/components/stepper' },
    { name: 'Switch', path: '/components/switch' },
    { name: 'Tabs', path: '/components/tabs' },
    { name: 'Text Area', path: '/components/text-area' },
    { name: 'Timeline', path: '/components/timeline' },
    { name: 'Toggle', path: '/components/toggle' },
    { name: 'Tooltip', path: '/components/tooltip' },
];

export const CATEGORIZED_COMPONENT_LIST = {
    actions: [
        { name: 'Button', path: '/components/button', description: 'Clickable element to trigger actions or events.' },
        { name: 'Icon Button', path: '/components/icon-button', description: 'Compact button displaying an icon for space-efficient actions.' },
    ],
    layout: [
        { name: 'Card', path: '/components/card', description: 'Container for grouping related content in a visually distinct way.' },
        { name: 'List', path: '/components/list', description: 'Displays a collection of items in a structured format.' },
        { name: 'Modal', path: '/components/modal', description: 'A dialog box/popup window that is displayed on top of the current page.' },
        { name: 'Navigation Menu', path: '/components/navigation-menu', description: 'A navigation bar for providing links to different sections of the site.' },
        { name: 'Accordion', path: '/components/accordion', description: 'A collapsible section of content, useful for FAQs and more.' },
        { name: 'Carousel', path: '/components/carousel', description: 'Displays a series of content in a slideshow format.' },
        { name: 'Collapsible', path: '/components/collapsible', description: 'Hides and shows content in a toggled manner.' },
        { name: 'Progress Tracker', path: '/components/progress-tracker', description: 'Visual guide showing steps and progress through a multi-step process.' },
        { name: 'Stepper', path: '/components/stepper', description: 'Step-by-step interface for guiding users through processes.' },
        { name: 'Bottom Navigation', path: '/components/bottom-navigation', description: 'Mobile-friendly navigation bar fixed at screen bottom.' },
        { name: 'Dock', path: '/components/dock', description: 'Customizable navigation bar with icons for quick access to different sections or actions.' },
        { name: 'Divider', path: '/components/divider', description: 'A simple line to separate content sections.' },
        { name: 'Marquee', path: '/components/marquee', description: 'Scrolling text component for displaying announcements or important information in a loop.' },
        { name: 'Timeline', path: '/components/timeline', description: 'Visual representation of events or milestones along a timeline.' },
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
        { name: 'Segmented Control', path: '/components/segmented-control', description: 'A control that allows users to select one or multiple options from a set of segments.' },
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
        { name: 'Breadcrumbs', path: '/components/breadcrumbs', description: 'Navigational aid to show the user`s current location in a hierarchy.' },
        { name: 'Tabs', path: '/components/tabs', description: 'Navigational elements organize and switch between related content sections.' },
        { name: 'Pagination', path: '/components/pagination', description: 'Navigation for breaking content into multiple pages.' },
    ],
    overlays: [
        { name: 'Tooltip', path: '/components/tooltip', description: 'Contextual information appearing on hover.' },
        { name: 'Dropdown', path: '/components/dropdown', description: 'Expandable menu revealing a list of options.' },
        { name: 'Popover', path: '/components/popover', description: 'Displays additional content or information when triggered by an event.' },
    ],
    utilities: [
        { name: 'Search Bar', path: '/components/search-bar', description: 'Input field for searching content within the application.' },
        { name: 'Snippet', path: '/components/snippet', description: 'Formatted display of code with syntax highlighting.' },
        { name: 'Keyboard Shortcut', path: '/components/keyboard-shortcut', description: 'Visual display of keyboard combinations for quick actions.' },
        { name: 'Scroll-to-Top Button', path: '/components/scroll-to-top-button', description: 'A button that appears when the user scrolls down the page, allowing them to quickly return to the top.' }, 
    ],
};
