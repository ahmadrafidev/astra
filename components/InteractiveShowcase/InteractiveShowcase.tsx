import React from 'react';
import Dock from '../Dock/Dock';
import PaymentCard from '../PaymentCard/PaymentCard';
import PinCode from '../PinCode/PinCode';
import Radio from '../Radio/Radio';
import Rating from '../Rating/Rating';
import Slider from '../Slider/Slider';
import Snackbar from '../Snackbar/Snackbar';
import { Home, CreditCard, Lock, Star } from 'lucide-react';

const InteractiveShowcase = () => {
  const [pin, setPin] = React.useState<string[]>(new Array(6).fill(''));
  const [radioValue, setRadioValue] = React.useState<string | null>('option1');
  const [sliderValue, setSliderValue] = React.useState<number>(50);
  const [snackbarOpen, setSnackbarOpen] = React.useState<boolean>(true);

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

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(e.target.value));
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className="bg-zinc-100 dark:bg-zinc-800/90 p-6 rounded-lg shadow-lg min-h-screen">
      <div className="grid grid-cols-4 grid-rows-3 gap-4 auto-rows-fr">
        {/* Dock Variants - Spans 2 columns */}
        <div className="col-span-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md space-y-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-50">Dock</h3>
          <Dock
            items={[
              { icon: Home, label: 'Home', onClick: () => alert('Home clicked!') },
              { icon: CreditCard, label: 'Payment', onClick: () => alert('Payment clicked!') },
              { icon: Lock, label: 'Security', onClick: () => alert('Security clicked!') },
              { icon: Star, label: 'Rating', onClick: () => alert('Rating clicked!') },
            ]}
            dockWidth="100%"
            dockHeight="60px"
            variant="glassmorphism"
            hoverEffect="floating"
            className="bg-sky-100 dark:bg-sky-400"
          />
        </div>

        {/* PaymentCard - Spans 2 columns and 2 rows */}
        <div className="col-span-2 row-span-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-50">PaymentCard</h3>
          <PaymentCard
            amount={199.99}
            onPaymentSuccess={handlePaymentSuccess}
            onPaymentError={handlePaymentError}
            className="bg-blue-50 dark:bg-blue-900 max-w-sm"
          />
        </div>

        {/* PinCode Variants - Spans 2 columns */}
        <div className="col-span-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md space-y-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-50">PIN Code</h3>
          <PinCode
            length={6}
            pin={pin}
            onPinChange={setPin}
            onComplete={handlePinComplete}
            className=""
            inputClassName="bg-sky-400 dark:bg-sky-900"
          />
          <PinCode
            isMask={false}
            length={6}
            pin={pin}
            onPinChange={setPin}
            onComplete={handlePinComplete}
            className=""
            inputClassName="bg-indigo-400 dark:bg-indigo-900"
          />
        </div>

        {/* Radio Variants */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-50">Radio</h3>
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
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col space-y-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-50">Rating</h3>
          <Rating
            maxRating={5}
            defaultRating={3}
            onRate={(rating) => alert(`Rated ${rating} stars`)}
            size="md"
          />
          <Rating
            maxRating={5}
            defaultRating={2}
            onRate={(rating) => alert(`Rated ${rating} stars`)}
            size="lg"
            activeColor="text-blue-500"
            inactiveColor="text-gray-300"
          />
          <Rating
            maxRating={5}
            defaultRating={2}
            onRate={(rating) => alert(`Rated ${rating} stars`)}
            size="md"
            activeColor="text-red-500"
            inactiveColor="text-gray-300"
          />
        </div>

        {/* Slider Component */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-50">Slider</h3>
          <Slider
            value={sliderValue}
            min={0}
            max={100}
            onChange={handleSliderChange}
            className="w-full mt-4"
            aria-label="Slider"
          />
        </div>

        {/* Snackbar Component */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-50">Snackbar</h3>
          <button
            onClick={() => setSnackbarOpen(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Show Snackbar
          </button>
          <Snackbar
            message="This is a snackbar notification!"
            open={snackbarOpen}
            onClose={handleSnackbarClose}
            variant="info"
            showCloseButton
            icon={<Star size={20} />}
            className="mt-4"
          />
        </div>

      </div>
    </div>
  );
};

export default InteractiveShowcase;