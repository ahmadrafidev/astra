'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '@/context/AppContext';
import { cn } from '@/lib/utils';

const notificationVariants = {
  initial: { opacity: 0, y: 50, scale: 0.3 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, scale: 0.5, transition: { duration: 0.2 } }
};

const notificationStyles = {
  info: 'bg-blue-100 border-blue-500 text-blue-900 dark:bg-blue-900 dark:border-blue-300 dark:text-blue-100',
  success: 'bg-green-100 border-green-500 text-green-900 dark:bg-green-900 dark:border-green-300 dark:text-green-100',
  warning: 'bg-yellow-100 border-yellow-500 text-yellow-900 dark:bg-yellow-900 dark:border-yellow-300 dark:text-yellow-100',
  error: 'bg-red-100 border-red-500 text-red-900 dark:bg-red-900 dark:border-red-300 dark:text-red-100'
};

export function NotificationProvider() {
  const { state, dispatch } = useAppContext();
  const { notifications } = state;

  const handleDismiss = (id: string) => {
    dispatch({ type: 'REMOVE_NOTIFICATION', payload: id });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-md">
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            className={cn(
              'rounded-md border-l-4 p-4 shadow-md',
              notificationStyles[notification.type]
            )}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={notificationVariants}
            layout
          >
            <div className="flex items-start justify-between">
              <p className="flex-1">{notification.message}</p>
              <button
                onClick={() => handleDismiss(notification.id)}
                className="ml-4 inline-flex h-5 w-5 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="Close notification"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
} 