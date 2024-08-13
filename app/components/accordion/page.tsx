import React from 'react';
import type { Metadata } from "next";
import dynamic from 'next/dynamic';

import Layout from '@/components/Layout/Layout';
import Badge from '@/components/Badge/Badge';

import { Accordion } from '@/components/Accordion/Accordion';
import { AccordionItem } from '@/components/Accordion/AccordionItem';
import AccordionDocumentation from '@/components/Accordion/AccordionDocumentation';

export const metadata: Metadata = {
    title: "Accordion",
    description: "A vertically stacked set of interactive headings that expand to reveal associated content.",
};

const AccordionClient = dynamic(() => import('@/components/Accordion/AccordionClient'), { ssr: false });

const AccordionPage: React.FC = () => {
    return (
        <AccordionClient />
    );
};

AccordionPage.displayName = "AccordionPage";
export default AccordionPage;

