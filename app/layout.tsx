import type { Metadata, Viewport } from 'next';
import './globals.css';
import { BackToTop } from '@/components/BackToTop';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { PWAInstallPrompt } from '@/components/PWAInstallPrompt';
import { ServiceWorkerRegistration } from '@/components/ServiceWorkerRegistration';

export const metadata: Metadata = {
  title: 'Dicionário etimológico',
  description: 'Dicionário etimológico de termos morfológicos.',
  manifest: '/manifest.webmanifest',
  icons: { icon: '/icon.svg' }
};

export const viewport: Viewport = {
  themeColor: '#075d61',
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><Header /><main>{children}</main><Footer /><BackToTop /><ServiceWorkerRegistration /><PWAInstallPrompt /></body></html>;
}
