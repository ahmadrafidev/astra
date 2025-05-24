'use client';

/**
 * Loads a script dynamically and waits for it to be fully loaded
 * 
 * @param src Script URL
 * @param id Optional ID for the script tag
 * @returns Promise that resolves when the script is loaded
 */
export function loadScript(src: string, id?: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (id && document.getElementById(id)) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    if (id) script.id = id;
    script.async = true;

    script.onload = () => resolve();
    script.onerror = (error) => reject(new Error(`Failed to load script: ${src}`));

    document.body.appendChild(script);
  });
}

/**
 * Prefetches an image to improve perceived loading time
 * 
 * @param src Image URL
 * @returns Promise that resolves when the image is loaded
 */
export function prefetchImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to prefetch image: ${src}`));
  });
}

/**
 * Detects if the user has reduced motion preferences
 * 
 * @returns Boolean indicating if reduced motion is preferred
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Checks if the device is a touch device
 * 
 * @returns Boolean indicating if it's a touch device
 */
export function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

/**
 * Saves a value to localStorage with error handling
 * 
 * @param key Storage key
 * @param value Value to store
 */
export function saveToStorage(key: string, value: any): void {
  try {
    if (typeof window === 'undefined') return;
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
}

/**
 * Retrieves a value from localStorage with error handling
 * 
 * @param key Storage key
 * @param defaultValue Default value if key doesn't exist
 * @returns The stored value or default value
 */
export function getFromStorage<T>(key: string, defaultValue: T): T {
  try {
    if (typeof window === 'undefined') return defaultValue;
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return defaultValue;
  }
} 