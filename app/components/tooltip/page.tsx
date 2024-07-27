// app/components/tooltip/page.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Tooltip",
    description: "Tooltips are used to provide additional information when hovering over an element.",
};

const TooltipPageClient = dynamic(() => import('../../../components/Tooltip/TooltipPageClient'), { ssr: false });

const TooltipPage: React.FC = () => {
    return <TooltipPageClient />;
};

TooltipPage.displayName="TooltipPage"
export default TooltipPage;
