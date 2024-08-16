import React, { useEffect, useRef, useState, useCallback } from 'react';
import { X } from 'lucide-react';

/**
 * Props for the Modal component.
 * 
 * @typedef {Object} ModalProps
 * @property {boolean} isOpen - Whether the modal is open.
 * @property {boolean} [closeOnOutsideClick=true] - Whether to close the modal on outside click.
 * @property {string} [title] - The title of the modal.
 * @property {string} [description] - The description of the modal.
 * @property {string} [className] - Additional class names for custom styling.
 * @property {React.ReactNode} children - The content of the modal.
 * @property {React.ReactNode} [closeButton] - Custom close button element.
 * @property {React.ReactNode} [footerContent] - Content to be displayed in the modal footer.
 * @property {() => void} onClose - Function to call when the modal is closed.
 * @property {'sm' | 'md' | 'lg' | 'full'} [size='md'] - Size of the modal.
 */
export interface ModalProps {
  isOpen: boolean;
  closeOnOutsideClick?: boolean;
  title?: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
  closeButton?: React.ReactNode;
  footerContent?: React.ReactNode;
  onClose: () => void;
  size?: 'sm' | 'md' | 'lg' | 'full';
}

/**
 * Modal component for displaying content in a modal dialog.
 * 
 * @component
 * @param {ModalProps} props - Props for the Modal component.
 * @returns {JSX.Element} The rendered Modal component.
 */
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  description,
  className,
  closeOnOutsideClick = true,
  closeButton,
  footerContent,
  size = 'md'
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleClose]);

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOutsideClick && event.target === event.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen && !isClosing) return null;

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    full: 'max-w-full mx-4'
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${
        isClosing ? 'animate-fadeOut' : 'animate-fadeIn'
      }`}
      onClick={handleOutsideClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
      aria-describedby={description ? 'modal-description' : undefined}
    >
      <div
        ref={contentRef}
        className={`bg-white p-6 rounded-lg shadow-xl relative w-full max-h-[90vh] overflow-y-auto ${
          isClosing ? 'animate-zoomOut' : 'animate-zoomIn'
        } ${sizeClasses[size]} ${className}`}
      >
        {title && (
          <h2 id="modal-title" className="text-xl font-semibold mb-4">
            {title}
          </h2>
        )}
        {description && (
          <p id="modal-description" className="text-gray-600 mb-4">
            {description}
          </p>
        )}
        <button 
          onClick={handleClose} 
          className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close"
        >
          {closeButton || <X />}
        </button>
        {children}
        {footerContent && (
          <div className="mt-6 flex justify-end space-x-2">
            {footerContent}
          </div>
        )}
      </div>
    </div>
  );
};

Modal.displayName = 'Modal';
export default Modal;
