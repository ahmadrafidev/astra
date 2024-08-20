import React, { useState, useRef, useEffect } from 'react';

/**
 * Props for the Dropdown component.
 * 
 * @typedef {Object} DropdownProps
 * @property {string[]} options - The array of options to display in the dropdown.
 * @property {(option: string) => void} onSelect - The callback function to call when an option is selected.
 * @property {string} [className] - Additional class names for the dropdown container.
 * @property {string} [placeholder='Select an option'] - The placeholder text to display when no option is selected.
 */
export interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
  className?: string;
  placeholder?: string;
}

/**
 * Dropdown component for selecting an option from a list.
 * 
 * @component
 * @param {DropdownProps} props - Props for the Dropdown component.
 * @returns {JSX.Element} The rendered Dropdown component.
 */
const Dropdown: React.FC<DropdownProps> = ({ 
  options, 
  onSelect, 
  className, 
  placeholder = 'Select an option' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
      buttonRef.current?.focus();
    }
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls="dropdown-options"
        className="px-4 py-2 border dark:border-gray-700 border-gray-300 rounded-lg shadow-sm bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onKeyDown={handleKeyDown}
      >
        {selectedOption || placeholder}
        <span className="ml-2">{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <ul
          id="dropdown-options"
          role="listbox"
          aria-activedescendant={selectedOption || undefined}
          className="absolute mt-2 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg z-10 max-h-40 overflow-y-auto"
        >
          {options.map((option, index) => (
            <li
              key={index}
              role="option"
              aria-selected={option === selectedOption}
              className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer ${
                option === selectedOption ? 'bg-gray-200 dark:bg-gray-700' : ''
              }`}
              onClick={() => handleSelect(option)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  handleSelect(option);
                }
              }}
              tabIndex={0}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Dropdown.displayName = "Dropdown";
export default Dropdown;
