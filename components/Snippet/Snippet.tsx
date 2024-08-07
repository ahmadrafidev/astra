import React, { useState, useCallback } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Link to theme documentation: https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/prism-async-light.html
 */

/**
 * Props for the Snippet component.
 * 
 * @typedef {Object} SnippetProps
 * @property {string} language - The programming language of the code snippet.
 * @property {string} code - The code to be displayed.
 * @property {string} [className] - Additional class names for custom styling.
 * @property {boolean} [showLineNumbers=false] - Whether to show line numbers.
 * @property {boolean} [wrapLongLines=false] - Whether to wrap long lines.
 * @property {string} [maxHeight='400px'] - Maximum height of the code container.
 * @property {boolean} [copyable=true] - Whether the code snippet is copyable.
 * @property {'light' | 'dark'} [theme='light'] - Theme of the code snippet.
 */
export interface SnippetProps {
  language: string;
  code: string;
  className?: string;
  showLineNumbers?: boolean;
  wrapLongLines?: boolean;
  maxHeight?: string;
  copyable?: boolean;
  theme?: 'light' | 'dark';
}

/**
 * Snippet component for displaying and optionally copying code snippets.
 * 
 * @component
 * @param {SnippetProps} props - Props for the Snippet component.
 * @returns {JSX.Element} The rendered Snippet component.
 */
const Snippet: React.FC<SnippetProps> = ({
  language,
  code,
  className,
  showLineNumbers = false,
  wrapLongLines = false,
  maxHeight = '400px',
  copyable = true,
  theme = 'light',
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  }, [code]);

  const style = theme === 'light' ? undefined : atomDark;

  return (
    <div
      className={cn(
        'relative rounded-lg border',
        theme === 'light' ? 'bg-gray-50 border-gray-200' : 'bg-gray-800 border-gray-700',
        className
      )}
      role="region"
      aria-label={`Code snippet in ${language}`}
    >
      <div className="flex justify-between items-center px-4 py-2 border-gray-200 dark:border-gray-700">
        <span 
          className={cn(
            'text-sm font-medium',
            theme === 'light' ? 'text-gray-600' : 'text-gray-100',
            className
          )}
        >
          {language}
        </span>
        {copyable && (
          <button
            onClick={handleCopy}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            aria-label="Copy code to clipboard"
          >
            {isCopied ? (
              'Copied!'
            ) : (
              <Copy size={16} />
            )}
          </button>
        )}
      </div>
      <div style={{ maxHeight }} className="overflow-auto">
        <SyntaxHighlighter
          language={language}
          style={style}
          showLineNumbers={showLineNumbers}
          wrapLongLines={wrapLongLines}
          customStyle={{ margin: 0, borderRadius: '0 0 0.5rem 0.5rem' }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

Snippet.displayName = "Snippet";
export default Snippet;
