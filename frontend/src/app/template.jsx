'use client';
import { AppProvider } from '@/context/AppContext';
import { ProductProvider } from '@/context/ProductContext';
import { VoiceProvider } from '@/context/VoiceContext';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const Template = ({ children }) => {
    return (
        <div>
            <Toaster position='top-center' />
            <VoiceProvider>
            <ProductProvider>
                <AppProvider>
                    {children}
                </AppProvider>
            </ProductProvider>
            </VoiceProvider>
        </div>
    )
}

export default Template