// components/home/home.tsx
'use client'

import Link from "next/link"
import Image from 'next/image';
import { useState } from "react";

import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"

import ThemeToggle from '../ThemeToggle/ThemeToggle';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export function HomeComponent() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header setActiveSection={setActiveSection}/>
      <main className="flex-1">
        <section className="min-h-screen overflow-hidden w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900 dark:text-gray-50">
                  Building Blocks of Modern UI
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-200">
                  AstraUI is a simple, comprehensive component for building beautiful, consistent, and scalable user interfaces.
                </p>
              </div>
              <div className="flex flex-row gap-6 p-4">
                <div role="button" className="space-x-4">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-lg bg-gray-900 dark:bg-white dark:border-gray-300 px-4 py-2 text-sm font-medium text-gray-50 dark:text-gray-900 shadow transition-all duration-200 hover:bg-gray-800 hover:ring-2 hover:ring-gray-300 dark:hover:ring-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
                    href="/components"
                  >
                    Browse Components
                  </Link>
                </div>
                <div role="button" className="space-x-4">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-lg border border-gray-300 dark:border-none bg-white dark:bg-gray-900 px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-50 shadow transition-all duration-200 hover:bg-gray-50 hover:ring-2 hover:ring-gray-400 dark:hover:ring-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
                    href="/about"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-300 text-gray-900">
                    Key Principles
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-50">AstraUI</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-200">
                    AstraUI provides a complete set of components and utilities carefully crafted to simplify the design and development flow.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col items-start gap-2">
                    <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12 dark:bg-gray-500">
                      <PaletteIcon className="w-6 h-6 text-gray-500 dark:text-gray-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">Consistent</h3>
                    <p className="text-gray-500 dark:text-gray-300 text-sm">
                      A unified design language across web, iOS, and Android, ensured by clear guidelines.
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12 dark:bg-gray-500">
                      <PuzzleIcon className="w-6 h-6 text-gray-500 dark:text-gray-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">Reusable</h3>
                    <p className="text-gray-500 dark:text-gray-300 text-sm">
                      Modular components that can be easily reused in various contexts, including web, iOS, and Android UI.
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12 dark:bg-gray-500">
                      <AlignCenterHorizontalIcon className="w-6 h-6 text-gray-500 dark:text-gray-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">Accessible</h3>
                    <p className="text-gray-500 dark:text-gray-300 text-sm">
                      Components designed with accessibility at the forefront, ensuring inclusivity for all users
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12 dark:bg-gray-500">
                      <WandIcon className="w-6 h-6 text-gray-500 dark:text-gray-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">Customizable</h3>
                    <p className="text-gray-500 dark:text-gray-300 text-sm">
                      Easily adaptable components to fit diverse branding and design needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function AccessibilityIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="16" cy="4" r="1" />
      <path d="m18 19 1-7-6 1" />
      <path d="m5 8 3-3 5.5 3-2.36 3.5" />
      <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
      <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
    </svg>
  )
}


function AlignCenterHorizontalIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12h20" />
      <path d="M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" />
      <path d="M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" />
      <path d="M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1" />
      <path d="M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1" />
    </svg>
  )
}


function BoltIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  )
}


function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function LayersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  )
}


function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function PaletteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  )
}


function PuzzleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    </svg>
  )
}


function WandIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 4V2" />
      <path d="M15 16v-2" />
      <path d="M8 9h2" />
      <path d="M20 9h2" />
      <path d="M17.8 11.8 19 13" />
      <path d="M15 9h0" />
      <path d="M17.8 6.2 19 5" />
      <path d="m3 21 9-9" />
      <path d="M12.2 6.2 11 5" />
    </svg>
  )
}
