'use client';
import { AppProvider } from '@/context/AppContext';
import { ProductProvider } from '@/context/ProductContext';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const Template = ({ children }) => {
    return (
        <div>
            <Toaster position='top-center' />
           <ProductProvider>
                <AppProvider>
                    {children}
                </AppProvider>
                </ProductProvider>
        </div>
    )
}

export default Template