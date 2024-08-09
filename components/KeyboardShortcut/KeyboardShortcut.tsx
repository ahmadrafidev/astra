import React, { ReactNode, useState, useEffect, useCallback } from 'react';

/**
 * Represents a keyboard shortcut action.
 *
 * @typedef {Object} ShortcutAction
 * @property {string} key - The key associated with the shortcut.
 * @property {string[]} [modifiers] - Optional modifiers (e.g., 'ctrl', 'alt', 'shift', 'meta') for the shortcut.
 * @property {() => void} action - The action to perform when the shortcut is triggered.
 * @property {string} description - A description of what the shortcut does.
 */
export interface ShortcutAction {
  key: string;
  modifiers?: string[];
  action: () => void;
  description: string;
}

/**
 * Props for the KeyboardShortcut component.
 * 
 * @typedef {Object} KeyboardShortcutProps
 * @property {ShortcutAction[]} shortcuts - Array of keyboard shortcuts to handle.
 * @property {string} [className] - Additional class names for the component.
 * @property {React.ReactNode} [icon] - Icon to display inside the button.
 * @property {string} [keyLabel] - Label to display inside the button.
 */
export interface KeyboardShortcutProps {
  shortcuts: ShortcutAction[];
  className?: string;
  icon?: React.ReactNode;
  keyLabel?: string;
}

/**
 * KeyboardShortcut component for handling and displaying keyboard shortcuts.
 * 
 * @component
 * @param {KeyboardShortcutProps} props - Props for the KeyboardShortcut component.
 * @returns {JSX.Element} The rendered KeyboardShortcut component.
 */
const KeyboardShortcut: React.FC<KeyboardShortcutProps> = ({ 
  shortcuts, 
  className,
  icon, 
  keyLabel 
}) => {
  const [showShortcuts, setShowShortcuts] = useState(false);

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    const shortcut = shortcuts.find(s => {
      const keyMatch = s.key.toLowerCase() === event.key.toLowerCase();
      const modifiersMatch = s.modifiers ? s.modifiers.every(mod => 
        (mod === 'ctrl' && event.ctrlKey) ||
        (mod === 'alt' && event.altKey) ||
        (mod === 'shift' && event.shiftKey) ||
        (mod === 'meta' && event.metaKey)
      ) : true;
      return keyMatch && modifiersMatch;
    });

    if (shortcut) {
      event.preventDefault();
      shortcut.action();
    }
  }, [shortcuts]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  const renderShortcutKey = (shortcut: ShortcutAction) => {
    const keys = [];
    if (shortcut.modifiers) {
      keys.push(...shortcut.modifiers.map(mod => mod.charAt(0).toUpperCase() + mod.slice(1)));
    }
    keys.push(shortcut.key.toUpperCase());
    return keys.join(' + ');
  };

  return (
    // TODO: Fix overlay
    <div className={`z-50 keyboard-shortcut ${className}`}> 
      <button 
        className="shortcut-button flex items-center justify-center bg-gray-900 dark:bg-gray-100 hover:bg-gray-700 dark:hover:bg-gray-200 text-gray-100 dark:text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
        onClick={() => setShowShortcuts(prev => !prev)}
        aria-label="Show keyboard shortcuts"
      >
        {icon}
        <span>{keyLabel}</span>
      </button>
      {showShortcuts && (
        <div 
          className="shortcut-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          role="dialog"
          aria-label="Keyboard shortcuts"
          onClick={() => setShowShortcuts(false)}
        >
          <div 
            className="shortcut-modal bg-white rounded-lg p-6 max-w-md w-full"
            onClick={e => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-4">Keyboard Shortcuts</h2>
            <ul className="space-y-2">
              {shortcuts.map((shortcut, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span className="text-base font-normal">{shortcut.description}</span>
                  <kbd className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                    {renderShortcutKey(shortcut)}
                  </kbd>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

KeyboardShortcut.displayName = "KeyboardShortcut";
export default KeyboardShortcut;
