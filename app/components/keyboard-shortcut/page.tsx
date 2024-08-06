import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Keyboard Shortcut",
    description: "A visual display of keyboard combinations for quick actions.",
};

const KeyboardShortcutClient = dynamic(() => import("@/components/KeyboardShortcut/KeyboardShortcutClient"), { ssr: false });

const KeyboardShortcutPage: React.FC = () => {
    return <KeyboardShortcutClient />;
};

KeyboardShortcutPage.displayName="KeyboardShortcutPage"
export default KeyboardShortcutPage;
