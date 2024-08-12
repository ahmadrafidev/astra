'use client'

import Link from "next/link"
import Image from 'next/image';
import { useState } from "react";
import { ArrowRight } from 'lucide-react';

import Card from '../Card/Card';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Badge from '../Badge/Badge';

import PaletteIcon from '../Icons/PaletteIcon';
import PuzzleIcon from '../Icons/PuzzleIcon';
import AlignCenterHorizontalIcon from '../Icons/AlignCenterHorizontalIcon';
import WandIcon from '../Icons/WandIcon';

export function HomePage() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header setActiveSection={setActiveSection} />
      <main className="flex-1 bg-gray-50 dark:bg-black">

        {/* Landing Page Section */}
        <section className="flex flex-col justify-around min-h-screen overflow-hidden w-full mt-8 md:mt-14">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-6 md:space-y-8 text-center">
              <div className="space-y-6 md:space-y-8">
                <h1 className="text-4xl md:text-7xl font-semibold tracking-tighter text-gray-900 dark:text-gray-50">
                  Building Blocks of Modern UI
                </h1>
                <p className="mx-auto max-w-[600px] text-gray-600 dark:text-gray-200 text-sm md:text-xl font-normal">
                  AstraUI is a simple, comprehensive component for building beautiful, consistent, and scalable user interfaces.
                </p>
              </div>
              <div className="flex flex-row gap-6 p-4">
                <div role="button" className="space-x-4">
                  <Link
                    className="h-10 items-center justify-center rounded-lg bg-gray-900 dark:bg-white dark:border-gray-300 px-4 py-2 md:py-2.5 text-sm font-medium text-gray-50 dark:text-gray-900 shadow transition-all duration-200 hover:bg-gray-800 hover:ring hover:ring-gray-400 dark:hover:ring-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
                    href="/components"
                  >
                    Browse Components
                  </Link>
                </div>
                <div role="button" className="space-x-4">
                  <Link
                    className="h-10 items-center justify-center rounded-lg border border-gray-300 dark:border-none bg-white dark:bg-gray-800 px-4 py-2 md:py-2.5 text-sm font-medium text-gray-900 dark:text-gray-50 shadow transition-all duration-200 hover:bg-gray-50 hover:ring hover:ring-gray-400 dark:hover:ring-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
                    href="/about"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="container px-5 md:mx-auto">
            <div className="flex flex-col md:flex-row justify-center items-center md:items-baseline gap-x-2 text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold font-sans text-gray-900 dark:text-gray-50">Inside AstraUI.</h2>
              <p className="text-base md:text-xl text-gray-600 dark:text-gray-100">
                Everything you need to build great user interface on many platforms.
              </p>
            </div>
          </div>
        </section>

        {/* Key Principles */}
        <section className="flex flex-col justify-around min-h-screen w-full px-4 md:px-12">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge text="Key Principles" />
                  <h2 className="text-2xl md:text-5xl font-bold tracking-tighter text-gray-900 dark:text-gray-50">AstraUI</h2>
                  <p className="max-w-[600px] text-gray-600 dark:text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                    AstraUI provides a complete set of components and utilities carefully crafted to simplify the design and development flow.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <IconCard
                    Icon={PaletteIcon}
                    title="Consistent"
                    description="A unified design language across web, iOS, and Android, ensured by clear guidelines."
                  />
                  <IconCard
                    Icon={PuzzleIcon}
                    title="Reusable"
                    description="Modular components that can be easily reused in various contexts, including web, iOS, and Android UI."
                  />
                  <IconCard
                    Icon={AlignCenterHorizontalIcon}
                    title="Accessible"
                    description="Components designed with accessibility at the forefront, ensuring inclusivity for all users."
                  />
                  <IconCard
                    Icon={WandIcon}
                    title="Customizable"
                    description="Easily adaptable components to fit diverse branding and design needs."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Foundations Section */}
        <section className="flex flex-col justify-start items-center w-full px-4 md:px-12 my-12">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col justify-center items-center space-y-4">
              <div className="space-y-2 text-center">
                <h2 className="text-2xl md:text-5xl font-bold tracking-tighter text-gray-900 dark:text-gray-50">
                  The Foundations
                </h2>
                <p className="max-w-[600px] text-gray-700 dark:text-gray-100  text-lg/relaxed md:text-xl/relaxed">
                  Core principles that guide the AstraUI design philosophy.
                </p>
              </div>
            </div>
            {/* Grid of Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-10">
              <Card
                title="Accessibility"
                variant="interactive"
                className="p-2"
              >
                <p className="text-gray-700 dark:text-gray-300">Unlock seamless access for everyone, ensuring your designs reach every user.</p>
              </Card>
              <Card
                title="Brand Expression"
                variant="interactive"
                className="p-2"
              >
                <p className="text-gray-700 dark:text-gray-300">Craft a unified and memorable brand experience across all platforms.</p>
              </Card>
              <Card
                title="Color"
                variant="interactive"
                className="p-2"
              >
                <p className="text-gray-700 dark:text-gray-300">Master the art of color harmony to create visually stunning designs.</p>
              </Card>
              <Card
                title="Content Standard"
                variant="interactive"
                className="p-2"
              >
                <p className="text-gray-700 dark:text-gray-300">Elevate your message with clear, engaging content that resonates with your audience.</p>
              </Card>
              <Card
                title="Data Visualization"
                variant="interactive"
                className="p-2"
              >
                <p className="text-gray-700 dark:text-gray-300">Transform data into powerful insights with clear, impactful visuals.</p>
              </Card>
              <Card
                title="Motion"
                variant="interactive"
                className="p-2"
              >
                <p className="text-gray-700 dark:text-gray-300">Bring your designs to life with smooth, responsive animations.</p>
              </Card>
              <Card
                title="Screen Sizes"
                variant="interactive"
                className="p-2"
              >
                <p className="text-gray-700 dark:text-gray-300">Design with confidence for any screen size, from mobile to desktop.</p>
              </Card>
              <Card
                title="Typography"
                variant="interactive"
                className="p-2"
              >
                <p className="text-gray-700 dark:text-gray-300">Enhance readability and impact with typography that stands out.</p>
              </Card>
            </div>
            <div className="flex flex-row justify-center items-center">
              <div role="button" className="space-x-4">
                <Link
                  className="h-10 items-center justify-center rounded-lg bg-gray-900 dark:bg-white dark:border-gray-300 px-6 py-2 md:py-3 text-sm font-medium text-gray-50 dark:text-gray-900 shadow transition-all duration-200 hover:bg-gray-800 hover:ring hover:ring-gray-400 dark:hover:ring-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
                  href="/foundations"
                >
                  Foundations Overview
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Components Section */}
        <section className="flex flex-col justify-around min-h-screen w-full px-4 md:px-12">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-start items-start space-y-2">
                <h2 className="text-2xl md:text-5xl font-bold tracking-tighter text-gray-900 dark:text-gray-50">
                  The Components
                </h2>
                <p className="text-gray-700 dark:text-gray-100 text-lg/relaxed md:text-xl/relaxed">
                  Uncover AstraUI‘s Components
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid grid-cols-1 gap-6">
                  <Card
                    title="Web Components"
                    imageSrc="/images/web-image.png"
                    variant="interactive"
                    className="text-start p-4 transition-all duration-200 hover:ring hover:ring-sky-500/30 dark:hover:ring-sky-200"
                    imageWidth={100}
                    imageHeight={100}
                    imagePosition="left"
                  >
                    <Link href="/components/" className="text-gray-800 dark:text-gray-200 hover:underline text-start flex flex-row gap-2">
                      Get started <span className="text-gray-800 dark:text-gray-200"><ArrowRight /></span>
                    </Link>
                  </Card>
                  <Card
                    title="Android"
                    imageSrc="/images/android-image.png"
                    variant="interactive"
                    className="text-start p-4 transition-all duration-200 hover:ring hover:ring-sky-500/30 dark:hover:ring-sky-200"
                    imageWidth={100}
                    imageHeight={100}
                    imagePosition="left"
                  >
                    <Link href="/components/" className="text-gray-800 dark:text-gray-200 hover:underline text-start flex flex-row gap-2">
                      Get started <span className="text-gray-800 dark:text-gray-200"><ArrowRight /></span>
                    </Link>
                  </Card>
                  <Card
                    title="iOS"
                    imageSrc="/images/apple-image.png"
                    variant="interactive"
                    className="text-start p-4 transition-all duration-200 hover:ring hover:ring-sky-500/30 dark:hover:ring-sky-200"
                    imageWidth={100}
                    imageHeight={100}
                    imagePosition="left"
                  >
                    <Link href="/components/" className="text-gray-800 dark:text-gray-200 hover:underline text-start flex flex-row gap-2">
                      Get started <span className="text-gray-800 dark:text-gray-200"><ArrowRight /></span>
                    </Link>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

HomePage.displayName = "HomePage";

interface IconCardProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const IconCard: React.FC<IconCardProps> = ({ Icon, title, description }) => (
  <div className="flex flex-col items-start gap-2">
    <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12 dark:bg-gray-500">
      <Icon className="w-6 h-6 text-gray-500 dark:text-gray-300" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">{title}</h3>
    <p className="text-gray-500 dark:text-gray-300 text-sm">{description}</p>
  </div>
);
