import React, { forwardRef } from 'react';
import Image from 'next/image';
import { cn } from "@/lib/utils";

/**
 * Props for the Card component.
 * 
 * @typedef {Object} CardProps
 * @property {string} title - The title of the card.
 * @property {string} description - The description of the card.
 * @property {string} [imageSrc] - The source URL of the image.
 * @property {number} [imageWidth=300] - The width of the image.
 * @property {number} [imageHeight=200] - The height of the image.
 * @property {string} [imageAlt] - The alt text for the image.
 * @property {'default' | 'hover' | 'interactive'} [variant='default'] - The variant of the card.
 * @property {'h2' | 'h3' | 'h4' | 'h5' | 'h6'} [titleElement='h3'] - The HTML element to use for the title.
 * @property {'top' | 'left' | 'right'} [imagePosition='top'] - The position of the image.
 * @property {string} [className] - Additional class names for custom styling.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  imageSrc?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
  variant?: 'default' | 'hover' | 'interactive';
  titleElement?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  imagePosition?: 'top' | 'left' | 'right';
}

/**
 * Card component for displaying content in a card layout.
 * 
 * @component
 * @param {CardProps} props - Props for the Card component.
 * @param {React.Ref<HTMLDivElement>} ref - Ref for the card div element.
 * @returns {JSX.Element} The rendered Card component.
 */
const Card = forwardRef<HTMLDivElement, CardProps>(({
  title,
  description,
  imageSrc,
  imageWidth = 300,
  imageHeight = 200,
  imageAlt,
  className,
  children,
  variant = 'default',
  titleElement: TitleElement = 'h3',
  imagePosition = 'top', 
  ...props
}, ref) => {

  const variantStyles = {
    default: '',
    hover: 'hover:shadow-lg transition-shadow duration-300',
    interactive: 'cursor-pointer hover:shadow-lg active:shadow-md transition-shadow duration-300'
  };

  const isHorizontal = imagePosition === 'left' || imagePosition === 'right';

  return (
    <div 
      ref={ref}
      className={cn(
        "bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden",
        variantStyles[variant],
        className,
        isHorizontal ? 'flex' : 'flex-col'
      )}
      {...props}
    >
      {imageSrc && (
        <div 
          className={cn(
            "relative",
            imagePosition === 'top' ? 'w-full' : 'w-1/3',
            imagePosition === 'top' ? '' : 'flex-shrink-0'
          )}
          style={{ height: imagePosition === 'top' ? imageHeight : 'auto' }}
        >
          <Image 
            quality={100}
            src={imageSrc} 
            alt={imageAlt || title} 
            fill={imagePosition === 'top'}
            width={imagePosition === 'top' ? undefined : imageWidth}
            height={imagePosition === 'top' ? undefined : imageHeight}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      )}
      <div className={cn(
        "p-4 flex flex-col",
        isHorizontal && imagePosition === 'left' ? 'pl-4' : '',
        isHorizontal && imagePosition === 'right' ? 'pr-4' : '',
        isHorizontal ? 'justify-center' : ''
      )}>
        <TitleElement className="text-lg md:text-2xl font-semibold text-gray-900 dark:text-gray-50">
          {title}
        </TitleElement>
        <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
          {children}
      </div>
    </div>
  );
});

Card.displayName = "Card";
export default Card;
