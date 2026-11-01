export type Category =
  | 'Creative Advertisments'
  | 'Social & Short-form Videos'
  | 'Corporate Videos'

export const categories: Category[] = [
  'Creative Advertisments',
  'Social & Short-form Videos',
  'Corporate Videos',
]

export type Project = {
  slug: string
  title: string
  category: Category
  client: string
  image: string
  id: string
  /** layout span hints for the editorial masonry grid */
  span: 'wide' | 'tall' | 'large' | 'standard'
  description: string
}

export const projects: Project[] = [
  {
    slug: 'hermes',
    title: 'Creative Reel',
    category: 'Creative Advertisments',
    client: 'Hermès',
    image: '/works/abpizza.png',
    id: 'yGKDGx7ih9A',
    span: 'tall',
    description:
      'A cinematic short-form film exploring motion and stillness across a vast desert plain. Shot at golden hour with anamorphic lenses to capture the weightless choreography of light and figure.',
  },
  {
    slug: 'Promotion',
    title: 'Al Quoz: Dubai’s Underground Creative Hub',
    category: 'Social & Short-form Videos',
    client: 'Cultural Showcase',
    image: '/works/portrait-hands.png',
    id: 'Wh-V2iVQc6w',
    span: 'tall',
    description:
      'A cinematic vertical lookbook capturing the raw industrial pulse and underground artistic energy of Dubai’s premier cultural district.',
  },
  {
    slug: 'movement',
    title: 'Agency Showreel',
    category: 'Corporate Videos',
    client: 'Editorial',
    image: '/works/agency.png',
    id: 'UF0er5qIExc',
    span: 'wide',
    description:
      'This footage was provided by the company, along with a creative brief and script from the creative direction team. Using Adobe After Effects and Adobe Premiere Pro, I developed the edit in my own style, creating motion graphics, pacing, transitions, and overall visual storytelling to bring the concept to life.',
  },
  {
    slug: 'Commerical',
    title: 'Social Commerce Reel',
    category: 'Social & Short-form Videos',
    client: 'Splash',
    image: '/works/corporate-office.png',
    id: '9Mpe2dAqvGo',
    span: 'tall',
    description:
      'A high-energy, vertical-format cinematic Reel blending fast-paced match-cuts with high-street fashion to maximize Gen-Z engagement for the Middle East’s fast-fashion retailer.',
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}

export function getRelated(slug: string, category: Category) {
  return projects
    .filter((p) => p.slug !== slug && p.category === category)
    .concat(
      projects.filter((p) => p.slug !== slug && p.category !== category)
    )
    .slice(0, 3)
}

export type Photo = {
  src: string
  alt: string
  orientation: 'portrait' | 'landscape'
  group: 'Fashion' | 'Portrait' | 'Creative' | 'Editorial'
}

export const photographs: Photo[] = [
  {
    src: '/photography/photo-1.png',
    alt: 'Black and white fashion portrait with dramatic side lighting',
    orientation: 'portrait',
    group: 'Fashion',
  },
  {
    src: '/photography/photo-3.png',
    alt: 'Close-up creative portrait with a beam of light across the eyes',
    orientation: 'landscape',
    group: 'Creative',
  },
  {
    src: '/photography/photo-2.png',
    alt: 'Model in flowing neutral dress against a sand-colored wall',
    orientation: 'portrait',
    group: 'Editorial',
  },
  {
    src: '/photography/photo-4.png',
    alt: 'Elegant black and white portrait against a soft grey background',
    orientation: 'portrait',
    group: 'Portrait',
  },
  {
    src: '/photography/photo-5.png',
    alt: 'Two models in coordinated outfits in a concrete architectural space',
    orientation: 'landscape',
    group: 'Editorial',
  },
  {
    src: '/photography/photo-6.png',
    alt: 'Model draped in flowing sheer fabric caught in motion',
    orientation: 'portrait',
    group: 'Creative',
  },
]
