import { Theme } from '@radix-ui/themes';
import type { ReactNode } from 'react';

import { ThemeProvider } from '@/lib/components/theme-provider';

import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Theme>
        <div className="flex min-h-screen flex-col font-sans">
          <Header />
          <main className="wrapper">{children}</main>
          <Footer />
        </div>
      </Theme>
    </ThemeProvider>
  );
};

export default Layout;
