import React from 'react';

import { Home, CreditCard, Lock, Star, ChevronRight } from 'lucide-react';

import Dock from '../Dock/Dock';
import PaymentCard from '../PaymentCard/PaymentCard';
import PinCode from '../PinCode/PinCode';
import Radio from '../Radio/Radio';
import Rating from '../Rating/Rating';
import Slider from '../Slider/Slider';
import Snackbar from '../Snackbar/Snackbar';
import StatusDot from '../StatusDot/StatusDot';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import AlertDialog from '../AlertDialog/AlertDialog';
import FileUploader from '../FileUploader/FileUploader';

const InteractiveShowcase = () => {
  const [pin, setPin] = React.useState<string[]>(new Array(6).fill(''));
  const [radioValue, setRadioValue] = React.useState<string | null>('option1');
  const [sliderValue, setSliderValue] = React.useState<number>(50);
  const [snackbarOpen, setSnackbarOpen] = React.useState<boolean>(false);
  const [alertOpen, setAlertOpen] = React.useState<boolean>(false);

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Components', path: '/components' },
    { name: 'Showcase', path: '/#interactive-showcase' },
  ];

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

  const handleFileSelect = (file: File) => {
    alert(`Selected file: ${file.name}`);
  };

  return (
    <div className="bg-zinc-100 dark:bg-zinc-800/90 p-6 rounded-lg shadow-lg min-h-screen">
      <div className="grid grid-cols-4 grid-rows-3 gap-4 auto-rows-fr">

        {/* Dock Variants  */}
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

         {/* StatusDot Component */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col space-y-2">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-50">Status Dot</h3>
          <StatusDot
            status="online"
            type="dot"
            label="Online"
            className="w-4 h-4"
          />
          <StatusDot
            status="offline"
            type="icon"
            icon={<Lock size={12} />}
            label="Offline"
            className="w-4 h-4"
          />
          <StatusDot
            status="busy"
            type="dot"
            label="Busy"
            className="w-4 h-4"
          />
        </div>

        {/* PaymentCard */}
        <div className="col-span-1 row-span-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col space-y-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-50">Payment Card</h3>
            <PaymentCard
              amount={199.99}
              onPaymentSuccess={handlePaymentSuccess}
              onPaymentError={handlePaymentError}
              className="bg-blue-100 dark:bg-blue-900"
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

        {/* PinCode Variants */}
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
            allowClear={false}
          />
          <Rating
            maxRating={5}
            defaultRating={3}
            onRate={(rating) => alert(`Rated ${rating} stars`)}
            size="md"
            activeColor="text-red-500"
            inactiveColor="text-gray-300"
            allowClear={true}
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

        {/* Slider Component */}
        <div className="col-span-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
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

        {/* FileUploader Component */}
        <div className="col-span-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-50">File Uploader</h3>
          <FileUploader
            onFileSelect={handleFileSelect}
            dropzoneText="Drop your files here"
            browseText="Browse"
          />
        </div>

        {/* Breadcrumbs Component */}
        <div className="col-span-1 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-50">Breadcrumbs</h3>
          <Breadcrumbs
            items={breadcrumbs}
            className="text-lg overflow-x-auto whitespace-nowrap"
            separator={<ChevronRight className="h-5 w-5 mx-2 text-gray-800 dark:text-gray-200" />}
            itemClassName="hover:underline text-blue-600 dark:text-blue-400"
            activeItemClassName="font-semibold text-gray-900 dark:text-gray-100"
          />
        </div>

        {/* AlertDialog Component */}
        <div className="col-span-1 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-50">Alert Dialog</h3>
          <button
            onClick={() => setAlertOpen(true)}
            className="px-4 py-2 bg-red-600 text-white rounded-lg"
          >
            Open Alert Dialog
          </button>
          <AlertDialog
            open={alertOpen}
            onClose={() => setAlertOpen(false)}
            onConfirm={() => alert('Confirmed!')}
            confirmText="Confirm"
            closeText="Cancel"
          >
            <p className="text-gray-800 dark:text-gray-200">
              Are you sure you want to proceed?
            </p>
          </AlertDialog>
        </div>

      </div>
    </div>
  );
};

InteractiveShowcase.displayName = 'InteractiveShowcase';
export default InteractiveShowcase;
