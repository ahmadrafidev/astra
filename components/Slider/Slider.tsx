// components/Slider/Slider.tsx
import React from 'react';

export interface SliderProps {
    value: number;
    min: number;
    max: number;
    step?: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

const Slider: React.FC<SliderProps> = ({ value, min, max, step = 1, onChange, className = '' }) => {
    return (
        <input
            type="range"
            value={value}
            min={min}
            max={max}
            step={step}
            onChange={onChange}
            className={`slider ${className}`}
        />
    );
};

Slider.displayName = "Slider";
export default Slider;
