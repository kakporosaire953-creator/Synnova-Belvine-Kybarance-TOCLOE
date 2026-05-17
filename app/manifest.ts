import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Synnova Tocloe - Portfolio Professionnel',
    short_name: 'Synnova Tocloe',
    description: 'Portfolio professionnel de Synnova Tocloe - Animatrice, Communicatrice, Actrice et Entrepreneuse au Bénin',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#C2185B',
    orientation: 'portrait-primary',
    categories: ['business', 'entertainment', 'lifestyle'],
    lang: 'fr',
    dir: 'ltr',
  }
}
