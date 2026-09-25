import type { MetadataRoute } from 'next';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dicionário etimológico',
    short_name: 'Dicionário',
    description: 'Dicionário etimológico de termos morfológicos.',
    lang: 'pt-BR',
    start_url: `${basePath}/`,
    scope: `${basePath}/`,
    id: `${basePath}/`,
    display: 'standalone',
    orientation: 'portrait-primary',
    background_color: '#f7f4ed',
    theme_color: '#075d61',
    icons: [{ src: `${basePath}/icon.svg`, sizes: 'any', type: 'image/svg+xml', purpose: 'any' }]
  };
}
