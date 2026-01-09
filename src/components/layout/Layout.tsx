'use client';

import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { StickyCTA } from "./StickyCTA";

interface LayoutProps {
  children: ReactNode;
  currentPath?: string;
}

export function Layout({ children, currentPath }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPath={currentPath} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}