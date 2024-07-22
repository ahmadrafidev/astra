import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-black">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">404 - Page Not Found</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    The page you are looking for doesn&apos;t exist or has been moved.
                </p>
                <Link href="/">
                    <p className="px-4 py-2 bg-gray-800 text-white rounded-lg dark:bg-gray-200 dark:text-gray-900 hover:bg-gray-800 hover:ring hover:ring-gray-400 dark:hover:ring-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300">
                        &larr; Back to Home
                    </p>
                </Link>
            </div>
        </main>
    );
}
