import React from 'react';
import Dock from '../Dock/Dock';
import PaymentCard from '../PaymentCard/PaymentCard';
import PinCode from '../PinCode/PinCode';
import Radio from '../Radio/Radio';
import Rating from '../Rating/Rating';
import { Home, CreditCard, Lock, Star } from 'lucide-react';

const InteractiveShowcase = () => {
  const [pin, setPin] = React.useState<string[]>(new Array(6).fill(''));
  const [radioValue, setRadioValue] = React.useState<string | null>('option1');

  const handlePaymentSuccess = () => {
    alert('Payment was successful!');
  };

  const handlePaymentError = (error: Error) => {
    alert(`Payment failed: ${error.message}`);
  };

  const handlePinComplete = (completedPin: string) => {
    alert(`PIN entered: ${completedPin}`);
  };

  const handleRadioChange = (value: string | null) => {
    setRadioValue(value);
  };

  return (
    <div className="bg-zinc-100 dark:bg-zinc-800/90 p-6 rounded-lg shadow-lg min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Dock Variants */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md space-y-4">
          <Dock
            items={[
              { icon: Home, label: 'Home', onClick: () => alert('Home clicked!') },
              { icon: CreditCard, label: 'Payment', onClick: () => alert('Payment clicked!') },
            ]}
            dockWidth="100%"
            dockHeight="60px"
            variant="glassmorphism"
            hoverEffect="floating"
          />
          <Dock
            items={[
              { icon: Lock, label: 'Security', onClick: () => alert('Security clicked!') },
              { icon: Star, label: 'Rating', onClick: () => alert('Rating clicked!') },
            ]}
            dockWidth="100%"
            dockHeight="50px"
            variant="default"
            hoverEffect="default"
          />
        </div>

        {/* PaymentCard Variants */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <PaymentCard
            amount={199.99}
            onPaymentSuccess={handlePaymentSuccess}
            onPaymentError={handlePaymentError}
            className="bg-blue-50 dark:bg-blue-900 max-w-sm"
          />
        </div>

        {/* PinCode Variants */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md space-y-4">
          <PinCode
            length={4}
            pin={pin}
            onPinChange={setPin}
            onComplete={handlePinComplete}
            className=""
            inputClassName="bg-red-50 dark:bg-red-900"
          />
          <PinCode
            length={6}
            pin={pin}
            onPinChange={setPin}
            onComplete={handlePinComplete}
            className=""
            inputClassName="bg-green-50 dark:bg-green-900"
          />
        </div>

        {/* Radio Variants */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <Radio
            label="Option 1"
            value="option1"
            checked={radioValue === 'option1'}
            onChange={handleRadioChange}
            description="This is the first option."
          />
          <Radio
            label="Option 2"
            value="option2"
            checked={radioValue === 'option2'}
            onChange={handleRadioChange}
            description="This is the second option."
            error="This option is currently unavailable."
            disabled
          />
        </div>

        {/* Rating Variants */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col gap-4">
          <Rating
            maxRating={5}
            defaultRating={3}
            onRate={(rating) => alert(`Rated ${rating} stars`)}
            size="md"
          />
          <Rating
            maxRating={10}
            defaultRating={8}
            onRate={(rating) => alert(`Rated ${rating} stars`)}
            size="lg"
            activeColor="text-blue-500"
            inactiveColor="text-gray-300"
          />
        </div>

      </div>
    </div>
  );
};

export default InteractiveShowcase;
