import { useEffect, useLayoutEffect } from 'react';

/**
 * A hook that provides useLayoutEffect in the browser environment and useEffect in SSR
 * This avoids React hydration warnings in Next.js when using useLayoutEffect
 */
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect; 