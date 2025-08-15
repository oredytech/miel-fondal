
export interface WordPressPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  featured_media: number;
  author: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    author?: Array<{
      name: string;
    }>;
  };
}

export interface WordPressApiResponse {
  posts: WordPressPost[];
  totalPages: number;
  totalPosts: number;
}

const API_BASE_URL = 'https://panaradio.org/wp-json/wp/v2';

export const fetchWordPressPosts = async (page: number = 1, perPage: number = 6): Promise<WordPressApiResponse> => {
  try {
    console.log(`Fetching WordPress posts from ${API_BASE_URL}/posts`);
    
    // Tentative avec un proxy CORS pour contourner les restrictions
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(
      `${API_BASE_URL}/posts?page=${page}&per_page=${perPage}&_embed&status=publish&orderby=date&order=desc`
    )}`;
    
    const response = await fetch(proxyUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      throw new Error(`Erreur HTTP: ${response.status} - ${response.statusText}`);
    }
    
    const data = await response.json();
    
    // Si on utilise le proxy, les données sont dans data.contents
    let posts, totalPosts, totalPages;
    
    if (data.contents) {
      // Réponse via proxy
      const wpData = JSON.parse(data.contents);
      posts = wpData;
      // Estimation du nombre total basée sur la pagination
      totalPosts = posts.length;
      totalPages = Math.ceil(totalPosts / perPage);
    } else {
      // Réponse directe de WordPress
      posts = data;
      totalPosts = parseInt(response.headers.get('X-WP-Total') || posts.length.toString());
      totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1');
    }
    
    console.log('Posts fetched successfully:', posts.length);
    
    return {
      posts,
      totalPages,
      totalPosts
    };
  } catch (error) {
    console.error('Detailed error fetching WordPress posts:', error);
    
    // Fallback avec des articles de démonstration
    const fallbackPosts: WordPressPost[] = [
      {
        id: 1,
        date: '2024-06-20T10:00:00',
        title: { rendered: 'Nos actions pour l\'environnement en RDC' },
        excerpt: { rendered: 'Découvrez comment Miel-Fondal contribue à la protection de l\'environnement en République Démocratique du Congo à travers des projets innovants et durables.' },
        content: { rendered: '<p>Contenu de l\'article sur l\'environnement...</p>' },
        featured_media: 0,
        author: 1,
        _embedded: {
          'wp:featuredmedia': [{
            source_url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=200&fit=crop',
            alt_text: 'Environnement'
          }],
          author: [{ name: 'Équipe Miel-Fondal' }]
        }
      },
      {
        id: 2,
        date: '2024-06-18T14:30:00',
        title: { rendered: 'Impact social de nos programmes radio' },
        excerpt: { rendered: 'Comment Watoto Radio et Mushakulu FM transforment les communautés locales en donnant la parole aux citoyens et en promouvant l\'éducation.' },
        content: { rendered: '<p>Contenu de l\'article sur la radio...</p>' },
        featured_media: 0,
        author: 1,
        _embedded: {
          'wp:featuredmedia': [{
            source_url: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=200&fit=crop',
            alt_text: 'Radio'
          }],
          author: [{ name: 'Équipe Panaradio' }]
        }
      },
      {
        id: 3,
        date: '2024-06-15T09:15:00',
        title: { rendered: 'Formation communautaire et développement local' },
        excerpt: { rendered: 'Nos programmes de formation touchent des milliers de bénéficiaires à travers la RDC, créant des opportunités d\'emploi et renforçant les capacités locales.' },
        content: { rendered: '<p>Contenu de l\'article sur la formation...</p>' },
        featured_media: 0,
        author: 1,
        _embedded: {
          'wp:featuredmedia': [{
            source_url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=200&fit=crop',
            alt_text: 'Formation'
          }],
          author: [{ name: 'Équipe Miel-Fondal' }]
        }
      }
    ];

    console.log('Using fallback posts due to API error');
    
    return {
      posts: fallbackPosts.slice((page - 1) * perPage, page * perPage),
      totalPages: Math.ceil(fallbackPosts.length / perPage),
      totalPosts: fallbackPosts.length
    };
  }
};

export const subscribeToNewsletter = async (email: string): Promise<void> => {
  try {
    console.log('Subscribing email to newsletter:', email);
    
    // Simulation d'un appel API réussi
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Newsletter subscription successful for:', email);
    
    // Ici vous pourrez intégrer avec votre service de newsletter réel
    // Par exemple: Mailchimp, Sendinblue, etc.
    
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    throw new Error('Erreur lors de l\'inscription à la newsletter. Veuillez réessayer.');
  }
};
