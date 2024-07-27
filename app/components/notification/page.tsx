// app/components/notification/page.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Notification",
    description: "Notification component for displaying messages to users.",
};

const NotificationPageClient = dynamic(() => import('../../../components/Notification/NotificationPageClient'), { ssr: false });

const NotificationPage: React.FC = () => {
    return <NotificationPageClient />;
};

NotificationPage.displayName="NotificationPage"
export default NotificationPage;
