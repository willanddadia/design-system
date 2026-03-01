import { HTMLAttributes } from 'react';
export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    onClose: () => void;
    variant?: 'fullscreen' | 'popup' | 'side';
    title?: string;
}
export declare const Modal: import('react').ForwardRefExoticComponent<ModalProps & import('react').RefAttributes<HTMLDivElement>>;
export declare const FullscreenModal: import('react').ForwardRefExoticComponent<Omit<ModalProps, "variant"> & import('react').RefAttributes<HTMLDivElement>>;
export declare const PopupModal: import('react').ForwardRefExoticComponent<Omit<ModalProps, "variant"> & import('react').RefAttributes<HTMLDivElement>>;
export declare const SideModal: import('react').ForwardRefExoticComponent<Omit<ModalProps, "variant"> & import('react').RefAttributes<HTMLDivElement>>;
