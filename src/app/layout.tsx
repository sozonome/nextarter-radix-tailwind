import type { Metadata } from 'next';

import Layout from '@/lib/components/layout';
import { fontSans } from '@/lib/styles/fonts';
import { cn } from '@/lib/utils';

import '@radix-ui/themes/styles.css';
import '@/lib/styles/globals.css';

const APP_NAME = 'nextarter-radix-tailwind';

export const metadata: Metadata = {
  title: APP_NAME,
  description: 'Next.js + Radix + TailwindCSS v3 + TypeScript template',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  themeColor: '#FFFFFF',
  openGraph: {
    url: 'https://nextarter-radix-tailwind.sznm.dev',
    title: APP_NAME,
    description: 'Next.js + Radix + TailwindCSS v3 + TypeScript template',
    images: {
      url: `https://og-image.sznm.dev/**${APP_NAME}**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250`,
      alt: `${APP_NAME}.sznm.dev og-image`,
    },
  },
  twitter: {
    creator: '@sozonome',
    card: 'summary_large_image',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen antialiased', fontSans.variable)}>
        <Layout>
          <div className="flex-1">{children}</div>
        </Layout>
      </body>
    </html>
  );
};

export default RootLayout;
