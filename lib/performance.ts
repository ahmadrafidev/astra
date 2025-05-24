/**
 * Debounce function that ensures a function is only called once after a specified delay
 * even if it's triggered multiple times during that period.
 * 
 * @param fn The function to debounce
 * @param delay The delay in milliseconds
 * @returns A debounced version of the function
 */
export function debounce<T extends (...args: any[]) => any>(fn: T, delay: number): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  
  return function(...args: Parameters<T>): void {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    timeoutId = setTimeout(() => {
      fn(...args);
      timeoutId = null;
    }, delay);
  };
}

/**
 * Throttle function that ensures a function is not called more frequently than the specified interval
 * 
 * @param fn The function to throttle
 * @param limit The minimum time (ms) between function calls
 * @returns A throttled version of the function
 */
export function throttle<T extends (...args: any[]) => any>(fn: T, limit: number): (...args: Parameters<T>) => void {
  let lastCall = 0;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  
  return function(...args: Parameters<T>): void {
    const now = Date.now();
    
    if (now - lastCall < limit) {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        lastCall = now;
        fn(...args);
      }, limit - (now - lastCall));
    } else {
      lastCall = now;
      fn(...args);
    }
  };
}

/**
 * Creates a memoized version of a function that caches its results based on the arguments provided
 * 
 * @param fn The function to memoize
 * @returns A memoized version of the function
 */
export function memoize<T extends (...args: any[]) => any>(fn: T): (...args: Parameters<T>) => ReturnType<T> {
  const cache = new Map<string, ReturnType<T>>();
  
  return function(...args: Parameters<T>): ReturnType<T> {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      return cache.get(key) as ReturnType<T>;
    }
    
    const result = fn(...args);
    cache.set(key, result);
    
    return result;
  };
} 