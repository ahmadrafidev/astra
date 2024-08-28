import React, { useState } from 'react';

import { COUNTRY_CODES } from '../../utils/constants/phone-code';
import Dropdown from '../Dropdown/Dropdown';

const PhoneNumber: React.FC<{ className?: string }> = ({ className }) => {
    const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0]);
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleCountrySelect = (option: string) => {
        const dialCode = option.split(' ')[1]; 
        const country = COUNTRY_CODES.find(country => country.dial_code === dialCode);
        if (country) {
            setSelectedCountry(country);
        }
    };

    return (
        <div className={`flex flex-row items-center space-x-2 p-2 rounded-lg ${className}`} aria-label="PhoneNumber">
            <Dropdown
                options={COUNTRY_CODES.map(country => `${country.emoji} ${country.dial_code}`)}
                onSelect={handleCountrySelect}
                placeholder={`${selectedCountry.emoji} ${selectedCountry.dial_code}`}
                className="w-28"
            />
            <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder={`${selectedCountry.dial_code}`}
                className="flex-1 py-2 px-4 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:outline-none"
            />
        </div>
    );
};

PhoneNumber.displayName = "PhoneNumber";
export default PhoneNumber;
