'use client';

import React, { createContext, useContext, useReducer, ReactNode, Dispatch } from 'react';

// Define types for app state
interface AppState {
  isMenuOpen: boolean;
  notifications: Notification[];
}

// Define notification type
interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  message: string;
  duration?: number;
}

// Define action types
type AppAction =
  | { type: 'TOGGLE_MENU' }
  | { type: 'ADD_NOTIFICATION'; payload: Omit<Notification, 'id'> }
  | { type: 'REMOVE_NOTIFICATION'; payload: string };

// Initial state
const initialState: AppState = {
  isMenuOpen: false,
  notifications: [],
};

// Create context
const AppContext = createContext<{
  state: AppState;
  dispatch: Dispatch<AppAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

// Reducer function
function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    case 'ADD_NOTIFICATION':
      const newNotification: Notification = {
        id: Date.now().toString(),
        ...action.payload,
      };
      return {
        ...state,
        notifications: [...state.notifications, newNotification],
      };
    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter((n) => n.id !== action.payload),
      };
    default:
      return state;
  }
}

// Context provider
export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Auto-remove notifications after their duration
  React.useEffect(() => {
    state.notifications.forEach((notification) => {
      if (notification.duration) {
        const timer = setTimeout(() => {
          dispatch({ type: 'REMOVE_NOTIFICATION', payload: notification.id });
        }, notification.duration);

        return () => clearTimeout(timer);
      }
    });
  }, [state.notifications]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom hook to use the context
export function useAppContext() {
  const context = useContext(AppContext);
  
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  
  return context;
} 