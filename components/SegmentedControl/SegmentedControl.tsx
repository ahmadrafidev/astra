import React, { useState } from 'react';

/**
 * @typedef {Object} SegmentedControlProps
 * @property {string[]} segments - The array of segment labels to display in the control.
 * @property {(selectedSegments: string[] | string) => void} [onSegmentChange] - Callback function triggered when the selected segment(s) change.
 * @property {number | number[]} [defaultIndex=0] - The default selected index or indices.
 * @property {boolean} [multiple=false] - Whether multiple segments can be selected.
 * @property {string} [className] - Additional class names to apply to the segmented control container.
 * @property {string} [activeClassName='bg-blue-600 text-white'] - Class name for the active segment.
 * @property {string} [inactiveClassName='bg-gray-200 text-gray-600'] - Class name for the inactive segments.
 */
export interface SegmentedControlProps {
  segments: string[];
  onSegmentChange?: (selectedSegments: string[] | string) => void;
  defaultIndex?: number | number[];
  multiple?: boolean;
  className?: string;
  activeClassName: string;
  inactiveClassName: string;
}

/**
 * Segmented Control component that allows users to select one or multiple options.
 * 
 * @param {SegmentedControlProps} props - Props for the Segmented Control component.
 * @returns {JSX.Element} The rendered Segmented Control component.
 * @example
 * <SegmentedControl
 *   segments={['Option 1', 'Option 2', 'Option 3']}
 *   defaultIndex={0}
 *   onSegmentChange={(segment) => console.log(segment)}
 * />
 */
const SegmentedControl: React.FC<SegmentedControlProps> = ({
  segments,
  onSegmentChange,
  defaultIndex = 0,
  multiple = false,
  className,
  activeClassName,
  inactiveClassName,
}) => {
  const [selectedIndices, setSelectedIndices] = useState<number[]>(
    Array.isArray(defaultIndex) ? defaultIndex : [defaultIndex]
  );

  const handleSegmentClick = (index: number) => {
    let newSelectedIndices: number[];

    if (multiple) {
      if (selectedIndices.includes(index)) {
        newSelectedIndices = selectedIndices.filter((i) => i !== index);
      } else {
        newSelectedIndices = [...selectedIndices, index];
      }
    } else {
      newSelectedIndices = [index];
    }

    setSelectedIndices(newSelectedIndices);

    if (onSegmentChange) {
      if (multiple) {
        onSegmentChange(newSelectedIndices.map((i) => segments[i]));
      } else {
        onSegmentChange(segments[newSelectedIndices[0]]);
      }
    }
  };

  return (
    <div className={`flex rounded-lg overflow-hidden ${className}`}>
      {segments.map((segment, index) => (
        <button
          key={index}
          onClick={() => handleSegmentClick(index)}
          className={`px-4 py-2 focus:outline-none ${
            selectedIndices.includes(index) ? activeClassName : inactiveClassName
          }`}
        >
          {segment}
        </button>
      ))}
    </div>
  );
};

SegmentedControl.displayName="SegmentedControl"
export default SegmentedControl;
