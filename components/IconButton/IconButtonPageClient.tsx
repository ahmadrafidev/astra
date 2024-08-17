'use client';

import React from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import * as RadixIcons from '@radix-ui/react-icons';

import TOC from '@/components/TOC/TOC';
import { Tabs, Tab } from '@/components/Tabs/Tabs';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import IconButton from './IconButton';
import IconButtonDocumentation from './IconButtonDocumentation';

const icons = [
  { icon: RadixIcons.TrashIcon, label: 'Delete', ariaLabel: 'Delete' },
  { icon: RadixIcons.Pencil1Icon, label: 'Edit', ariaLabel: 'Edit' },
  { icon: RadixIcons.PlusIcon, label: 'Add', ariaLabel: 'Add' },
];

const tocItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'usage', label: 'Usage' },
  { id: 'properties', label: 'Properties' },
  { id: 'best-practices', label: 'Best Practices' },
];

const codeExample = `
  <IconButton 
    icon={RadixIcons.TrashIcon} 
    onClick={() => alert('Delete button clicked')} 
    aria-label="Delete" 
    variant="contained" 
    color="gray" 
  />
`;

const IconButtonPageClient: React.FC = () => {
  return (
    <Layout>
      <div className="flex">
        <div className="w-4/5 pr-2">
          <Badge text="Components" />
          <div id="overview" className="flex flex-col mb-5 scroll-mt-16">
            <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Icon Button</h1>
            <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
              A clickable button represented by an icon without accompanying text.
            </p>
          </div>

          {/* Usage Section */}
          <section id="usage" className="scroll-mt-20">
            <Tabs>
              <Tab label="Preview">
                <div className="relative w-full overflow-hidden mt-4 rounded-lg flex justify-center items-center bg-zinc-100 dark:bg-zinc-950 shadow border border-slate-300 dark:border-slate-800">
                  <div className="w-3/4 space-y-6">
                    <div className="space-y-4 flex flex-col justify-center items-center p-6">
                      {['contained', 'outlinedBorder', 'outlinedNoBorder'].map((variant) => (
                        <div key={variant} className="flex flex-col justify-center items-center">
                          <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3 capitalize">
                            {variant.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())} Variant
                          </h3>
                          <div className="flex space-x-4">
                            {icons.map((icon, index) => (
                              <IconButton
                                key={index}
                                icon={icon.icon}
                                onClick={() => alert(`${icon.label} button clicked`)}
                                aria-label={icon.ariaLabel}
                                variant={variant as 'contained' | 'outlinedBorder' | 'outlinedNoBorder'}
                                color="gray"
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab label="Code">
                <div
                  className="relative rounded-lg bg-gray-900 dark:bg-gray-800/90 mt-4"
                  role="region"
                  aria-label="Code Snippet in tsx"
                >
                  <div className="flex justify-between items-center px-4 py-2 border-b border-gray-800">
                    <span className="text-sm font-medium text-gray-100">tsx</span>
                  </div>
                  <div className="overflow-auto rounded-lg border border-gray-800">
                    <SyntaxHighlighter
                      language="tsx"
                      style={materialLight}
                      showLineNumbers={false}
                      wrapLongLines={true}
                      customStyle={{
                        margin: 1.5,
                        borderRadius: '0.5rem 0.5rem 0.5rem 0.5rem',
                        fontSize: '14px',
                        lineHeight: '1.25',
                        padding: '10px',
                      }}
                    >
                      {codeExample}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </section>
          <IconButtonDocumentation />
        </div>
        <TOC items={tocItems} />
      </div>
    </Layout>
  );
};

IconButtonPageClient.displayName = "IconButtonPageClient";
export default IconButtonPageClient;
