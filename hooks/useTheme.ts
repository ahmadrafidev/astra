'use client';

import { useTheme as useNextTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark' | 'system';

export interface UseThemeReturn {
  /** The current theme */
  theme: Theme | undefined;
  /** The resolved theme (accounts for 'system' preference) */
  resolvedTheme: 'light' | 'dark' | undefined;
  /** Set the theme */
  setTheme: (theme: Theme) => void;
  /** Whether the theme has been loaded (useful for avoiding hydration mismatches) */
  mounted: boolean;
  /** Whether the current resolved theme is dark */
  isDark: boolean;
  /** Whether the current resolved theme is light */
  isLight: boolean;
  /** Whether the theme is set to system */
  isSystem: boolean;
  /** Cycle through themes: light -> dark -> system -> light... */
  cycleTheme: () => void;
}

/**
 * Enhanced theme hook with additional utilities
 */
export function useTheme(): UseThemeReturn {
  const { theme, setTheme, resolvedTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === 'dark';
  const isLight = resolvedTheme === 'light';
  const isSystem = theme === 'system';

  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  return {
    theme: theme as Theme | undefined,
    resolvedTheme: resolvedTheme as 'light' | 'dark' | undefined,
    setTheme: setTheme as (theme: Theme) => void,
    mounted,
    isDark,
    isLight,
    isSystem,
    cycleTheme,
  };
} 