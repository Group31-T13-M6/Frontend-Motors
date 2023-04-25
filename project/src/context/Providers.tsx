import React from 'react';
import { HomeProvider } from './HomeContext';

interface iProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: iProvidersProps) => {
  return <HomeProvider>{children}</HomeProvider>;
};

export default Providers;
