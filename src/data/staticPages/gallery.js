import workshopSession from '../assets/gallery-photos/workshop-session.jpg';

const galleryPage = {
  path: '/Gallery/PhotoGallery',
  title: 'Photo Gallery',
  subtitle: 'A gallery of awards, events, and client milestones.',
  body: [
    {
      type: 'paragraph',
      text: 'Browse highlights from client events, seminars, and training programs. This gallery presents the people, moments, and achievements behind the agency.'
    },
    {
      type: 'gallery',
      items: [
        {
          id: 'gallery-1',
          title: 'Client Meet',
          summary: 'A warm evening with families and new policy discussions.',
          image: workshopSession
        },
        {
          id: 'gallery-2',
          title: 'Workshop Session',
          summary: 'Interactive financial planning workshop for long-term goals.',
          image: workshopSession
        },
        {
          id: 'gallery-3',
          title: 'Award Ceremony',
          summary: 'Recognizing service excellence and community impact.',
          image: 'lash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80'
        },
        {
          id: 'gallery-4',
          title: 'Community Outreach',
          summary: 'A memorable day supporting local families and awareness drives.',
          image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80'
        }
      ]
    },
    {
      type: 'list',
      items: ['Client appreciation events', 'Financial planning workshops', 'Award recognition ceremonies', 'Community outreach activities']
    }
  ]
}

export default galleryPage
