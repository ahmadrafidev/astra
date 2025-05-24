import { Metadata } from 'next';
import { BASE_URL } from '@/utils/constants/route';

/**
 * Generates consistent metadata for pages
 * 
 * @param title The page title
 * @param description The page description
 * @param path The page path, excluding domain
 * @returns Metadata object for Next.js pages
 */
export function generateMetadata(
  title: string,
  description: string,
  path: string = ''
): Metadata {
  const url = `${BASE_URL}${path}`;
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      locale: 'en_US',
      siteName: 'AstraUI',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
} 