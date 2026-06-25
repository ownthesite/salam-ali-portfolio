export type Category =
  | 'Commercial Advertisements'
  | 'Social Media Content'
  | 'Reels & Short-form Videos'
  | 'Fashion Photography'
  | 'Brand Campaigns'
  | 'Corporate Videos'

export const categories: Category[] = [
  'Commercial Advertisements',
  'Social Media Content',
  'Reels & Short-form Videos',
  'Fashion Photography',
  'Brand Campaigns',
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
    title: 'Hermès',
    category: 'Commercial Advertisements',
    client: 'Hermès',
    image: '/works/hermes-commercial.png',
    id: 'xIywP1K02iU', 
    span: 'large',
    description:
      'A cinematic short-form film exploring motion and stillness across a vast desert plain. Shot at golden hour with anamorphic lenses to capture the weightless choreography of light and figure.',
  },
  {
    slug: 'movement',
    title: 'Movement Study',
    category: 'Fashion Photography',
    client: 'Editorial',
    image: '/works/dancer-field.png',
    id: "1189998581",
    span: 'tall',
    description:
      'A monochrome fashion series capturing the grace of contemporary dance against raw natural landscapes. An exercise in form, negative space and the tension of a single frozen gesture.',
  },
  {
    slug: 'silence',
    title: 'Silence',
    category: 'Brand Campaigns',
    client: 'AERA',
    image: '/works/portrait-hands.png',
    id: '',
    span: 'tall',
    description:
      'An intimate portrait-led campaign exploring vulnerability and presence. High-contrast lighting and restrained composition place the subject at the centre of an emotional narrative.',
  },
  {
    slug: 'protocol',
    title: 'Protocol',
    category: 'Corporate Videos',
    client: 'Meridian Group',
    image: '/works/corporate-office.png',
    id: '',
    span: 'standard',
    description:
      'A corporate brand film reframing the workplace as architecture and rhythm. Symmetrical framing and clinical light bring an editorial sensibility to a commercial brief.',
  },
  {
    slug: 'collective',
    title: 'Collective',
    category: 'Social Media Content',
    client: 'FORM Studio',
    image: '/works/dance-collective.png',
    id: '',
    span: 'wide',
    description:
      'A social-first content series built around community and contemporary movement. Designed for short-form delivery while retaining a cinematic, editorial finish.',
  },
  {
    slug: 'atelier',
    title: 'Atelier',
    category: 'Fashion Photography',
    client: 'Maison Lumière',
    image: '/works/fashion-editorial.png',
    id: '',
    span: 'tall',
    description:
      'A sculptural fashion editorial shot in studio with a restrained neutral palette. Soft directional light sculpts garment and form across a sequence of considered frames.',
  },
  {
    slug: 'aura',
    title: 'Aura',
    category: 'Brand Campaigns',
    client: 'Noctis Parfums',
    image: '/works/brand-campaign.png',
    id: '',
    span: 'standard',
    description:
      'A luxury fragrance campaign built on mist, glass and a single beam of light. A study in product cinematography where mood carries the story.',
  },
  {
    slug: 'transit',
    title: 'Transit',
    category: 'Reels & Short-form Videos',
    client: 'Urban Co.',
    image: '/works/social-reel.png',
    id: '',
    span: 'standard',
    description:
      'A fast-cut short-form reel capturing the energy of the city in motion. Handheld camera, lens flares and natural light translate a lifestyle brand into rhythm.',
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}

export function getRelated(slug: string, category: Category) {
  return projects
    .filter((p) => p.slug !== slug && p.category === category)
    .concat(projects.filter((p) => p.slug !== slug && p.category !== category))
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
