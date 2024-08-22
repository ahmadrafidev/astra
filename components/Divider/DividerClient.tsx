'use client';

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import TOC from '@/components/TOC/TOC';
import { Tabs, Tab } from '@/components/Tabs/Tabs';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Divider from './Divider';

const DividerPageClient: React.FC = () => {

    const tocItems = [
        { id: 'overview', label: 'Overview' },
        { id: 'usage', label: 'Usage' },
        { id: 'properties', label: 'Properties' },
        { id: 'best-practices', label: 'Best Practices' },
    ];

    const codeExample = `
    <Divider 
      orientation="horizontal"
      size="md"
      className="bg-gray-600 dark:bg-zinc-300"
    />
    `;

    return (
        <Layout>
            <div className="flex">
                <div className="w-4/5 pr-2">
                    <Badge text="Components" />
                    <div id="overview" className="flex flex-col mb-5 scroll-mt-16">
                        <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Divider</h1>
                        <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                            A simple line divider used to separate content sections.
                        </p>
                    </div>

                    {/* Usage Section */}
                    <section id="usage" className="scroll-mt-20">
                      <Tabs>
                          <Tab label="Preview">
                            <div className="relative w-full overflow-hidden mt-4 rounded-lg bg-zinc-100 dark:bg-zinc-950 shadow border border-slate-300 dark:border-slate-800 flex flex-col justify-center items-center">
                              <div className="flex-col space-y-5 justify-around p-6 w-full">
                                <div className="text-black dark:text-white">
                                  <h1 className="text-xl">Section 1</h1>
                                  <p>This is the first section.</p>
                                </div>  
                                <Divider 
                                  orientation="horizontal"
                                  size="md"
                                  className="bg-gray-600 dark:bg-zinc-300"
                                />
                                <div className="text-black dark:text-white">
                                  <h1 className="text-xl">Section 2</h1>
                                  <p>This is the second section.</p>
                                </div>
                                <Divider 
                                  orientation="horizontal"
                                  size="sm"
                                  className="bg-gray-600 dark:bg-zinc-300"
                                />
                                <div className="text-black dark:text-white">
                                  <h1 className="text-xl">Section 3</h1>
                                  <p>This is the third section.</p>
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
                                      <span className="text-sm font-medium text-gray-100">
                                          tsx
                                      </span>
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

                    {/* Props Section */}
                    <section id="properties" className="my-5 scroll-mt-20">
                      <h2 className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-50 mb-5">Props</h2>
                      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                          <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Type</th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Default</th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Description</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            <tr>
                              <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900 dark:text-gray-100">orientation</td>
                              <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300 font-mono text-wrap">{`'horizontal' | 'vertical'`}</td>
                              <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300">{`'horizontal'`}</td>
                              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                                The orientation of the divider.
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900 dark:text-gray-100">size</td>
                              <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300 font-mono text-wrap">{`'sm' | 'md' | 'lg'`}</td>
                              <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300">{`'md'`}</td>
                              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                                The size of the divider.
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900 dark:text-gray-100">color</td>
                              <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                              <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300">-</td>
                              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                                Custom color for the divider.
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900 dark:text-gray-100">label</td>
                              <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                              <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300">-</td>
                              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                                Optional label to display on the divider.
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900 dark:text-gray-100">labelPosition</td>
                              <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300 font-mono text-wrap">{`'start' | 'center' | 'end'`}</td>
                              <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300">{`'center'`}</td>
                              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                                Position of the label along the divider.
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900 dark:text-gray-100">className</td>
                              <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                              <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300">-</td>
                              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                                Additional class names for customizing the divider.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </section>

                    {/* Best Practices Section */}
                    <section id="best-practices" className="scroll-mt-20">
                        <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
                        <div className="space-y-4">
                            <ul className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-3">
                                <li>Use dividers to clearly separate different content sections.</li>
                                <li>Ensure the divider’s color contrasts well with the background for visibility.</li>
                                <li>Use the appropriate orientation (horizontal or vertical) based on the layout.</li>
                            </ul>
                        </div>
                    </section>
                </div>
                <TOC items={tocItems} />
            </div>
        </Layout>
    );
};

DividerPageClient.displayName = "DividerPageClient";
export default DividerPageClient;
