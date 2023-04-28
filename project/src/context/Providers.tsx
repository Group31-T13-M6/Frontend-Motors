import React from "react";
import { HomeProvider } from "./HomeContext";
import { AuthProvider } from ".";

interface iProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: iProvidersProps) => {
  return (
    <AuthProvider>
      <HomeProvider>{children}</HomeProvider>
    </AuthProvider>
  );
};

export default Providers;
