import type { Metadata } from 'next';
import './globals.css';
import { BackToTop } from '@/components/BackToTop';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'Dicionário etimológico',
  description: 'Dicionário etimológico de termos morfológicos.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><Header /><main>{children}</main><BackToTop /></body></html>;
}
