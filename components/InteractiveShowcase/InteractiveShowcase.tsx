import React, { useState } from 'react';
import Dock from '../Dock/Dock';
import PaymentCard from '../PaymentCard/PaymentCard';
import PinCode from '../PinCode/PinCode';
import Radio from '../Radio/Radio';
import Rating from '../Rating/Rating';
import { Home, CreditCard, Lock, Radio as RadioIcon, Star } from 'lucide-react';

const InteractiveShowcase = () => {
  const [activeComponent, setActiveComponent] = useState('Dock');
  const [pin, setPin] = useState<string[]>(new Array(6).fill(''));
  const [radioValue, setRadioValue] = useState<string | null>('option1');

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

  const renderDockVariants = () => {
    return (
      <>
        <Dock
          items={[
            { icon: Home, label: 'Home', onClick: () => alert('Home clicked!') },
            { icon: CreditCard, label: 'Payment', onClick: () => alert('Payment clicked!') },
          ]}
          dockWidth="100%"
          dockHeight="60px"
          variant="glassmorphism"
          hoverEffect="floating"
          className="mb-6"
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
          className="mb-6"
        />
      </>
    );
  };

  const renderPaymentCardVariants = () => {
    return (
      <>
        <PaymentCard
          amount={49.99}
          onPaymentSuccess={handlePaymentSuccess}
          onPaymentError={handlePaymentError}
          className="mb-6 max-w-sm"
        />
        <PaymentCard
          amount={199.99}
          onPaymentSuccess={handlePaymentSuccess}
          onPaymentError={handlePaymentError}
          className="mb-6 bg-blue-50 dark:bg-blue-900 max-w-sm"
        />
      </>
    );
  };

  const renderPinCodeVariants = () => {
    return (
      <>
        <PinCode
          length={4}
          pin={pin}
          onPinChange={setPin}
          onComplete={handlePinComplete}
          className="mb-6"
          inputClassName="bg-red-50 dark:bg-red-900"
        />
        <PinCode
          length={6}
          pin={pin}
          onPinChange={setPin}
          onComplete={handlePinComplete}
          className="mb-6"
          inputClassName="bg-green-50 dark:bg-green-900"
        />
      </>
    );
  };

  const renderRadioVariants = () => {
    return (
      <>
        <Radio
          label="Option 1"
          value="option1"
          checked={radioValue === 'option1'}
          onChange={handleRadioChange}
          description="This is the first option."
          className="mb-4"
        />
        <Radio
          label="Option 2"
          value="option2"
          checked={radioValue === 'option2'}
          onChange={handleRadioChange}
          description="This is the second option."
          error="This option is currently unavailable."
          disabled
          className="mb-4"
        />
      </>
    );
  };

  const renderRatingVariants = () => {
    return (
      <>
        <Rating
          maxRating={5}
          defaultRating={3}
          onRate={(rating) => alert(`Rated ${rating} stars`)}
          size="md"
          className="mb-6"
        />
        <Rating
          maxRating={10}
          defaultRating={8}
          onRate={(rating) => alert(`Rated ${rating} stars`)}
          size="lg"
          activeColor="text-blue-500"
          inactiveColor="text-gray-300"
          className="mb-6"
        />
      </>
    );
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'Dock':
        return renderDockVariants();
      case 'PaymentCard':
        return renderPaymentCardVariants();
      case 'PinCode':
        return renderPinCodeVariants();
      case 'Radio':
        return renderRadioVariants();
      case 'Rating':
        return renderRatingVariants();
      default:
        return null;
    }
  };

  return (
    <div className="bg-zinc-100 dark:bg-zinc-800/90 p-6 rounded-lg shadow-lg min-h-screen">
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${activeComponent === 'Dock' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setActiveComponent('Dock')}
        >
          Dock
        </button>
        <button
          className={`px-4 py-2 rounded ${activeComponent === 'PaymentCard' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setActiveComponent('PaymentCard')}
        >
          Payment
        </button>
        <button
          className={`px-4 py-2 rounded ${activeComponent === 'PinCode' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setActiveComponent('PinCode')}
        >
          Pin
        </button>
        <button
          className={`px-4 py-2 rounded ${activeComponent === 'Radio' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setActiveComponent('Radio')}
        >
          Radio
        </button>
        <button
          className={`px-4 py-2 rounded ${activeComponent === 'Rating' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setActiveComponent('Rating')}
        >
          Rating
        </button>
      </div>
      <div className="mt-6">
        {renderActiveComponent()}
      </div>
    </div>
  );
};

export default InteractiveShowcase;
