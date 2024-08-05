"use client"

import React, { useState } from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Modal from './Modal';
import ModalDocumentation from './ModalDocumentation';

const ModalPageClient: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [modalType, setModalType] = useState<'default' | 'form' | 'custom'>('default');

    const handleOpen = (type: 'default' | 'form' | 'custom') => {
        setModalType(type);
        setIsOpen(true);
    };

    const handleClose = () => setIsOpen(false);

    const renderModalContent = () => {
        switch (modalType) {
            case 'default':
                return (
                    <>
                        <h2 id="modal-title" className="text-xl font-semibold text-gray-900 dark:text-gray-700">Default Modal</h2>
                        <p id="modal-description" className="mt-4 text-gray-700 dark:text-gray-600">
                            This is a simple modal with a title and some content.
                        </p>
                    </>
                );
            case 'form':
                return (
                    <>
                        <h2 id="modal-title" className="text-xl font-semibold text-gray-900 dark:text-gray-700">Form Modal</h2>
                        <form className="mt-4 space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-600">Name</label>
                                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-600">Email</label>
                                <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </div>
                            <button type="submit" className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Submit
                            </button>
                        </form>
                    </>
                );
            case 'custom':
                return (
                    <div className="text-center">
                        <h2 id="modal-title" className="text-xl font-semibold text-gray-900 dark:text-gray-700">Custom Modal</h2>
                        <div className="mt-4 p-4 bg-green-100 rounded-lg">
                            <p className="text-green-700">This is a custom styled modal with a green background. XOXO.</p>
                        </div>
                        <button onClick={handleClose} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                            Close Modal
                        </button>
                    </div>
                );
        }
    };

    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Modal</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    An overlay window that appears on top of the main content.
                </p>
            </div>
            <section className="mb-5">
                <h2 className="text-lg md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Variants</h2>
                <div className="space-y-4 flex flex-col justify-around">
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                            Base Modal
                        </h3>
                        <button 
                            className="px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-black rounded-lg shadow-sm hover:bg-gray-800 dark:hover:bg-gray-200" 
                            onClick={() => handleOpen('default')}>
                            Open Default Modal
                        </button>
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                            Form Modal
                        </h3>  
                        <button 
                            className="px-4 py-2 bg-blue-700 dark:bg-blue-600 text-white dark:text-black rounded-lg shadow-sm hover:bg-blue-600 dark:hover:bg-blue-500" 
                            onClick={() => handleOpen('form')}>
                            Open Form Modal
                        </button>
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                            Custom Modal
                        </h3>
                        <button 
                            className="px-4 py-2 bg-green-600 dark:bg-green-500 text-black rounded-lg shadow-sm hover:bg-green-600 dark:hover:bg-green-400" 
                            onClick={() => handleOpen('custom')}>
                            Open Custom Modal
                        </button>
                    </div>
                </div>
            </section>
            <Modal 
                isOpen={isOpen} 
                onClose={handleClose} 
                className="max-w-lg"
            >
                {renderModalContent()}
            </Modal>
            <ModalDocumentation />
        </Layout>
    );
};

ModalPageClient.displayName = "ModalPageClient";
export default ModalPageClient;
