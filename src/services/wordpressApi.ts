
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
    const response = await fetch(
      `${API_BASE_URL}/posts?page=${page}&per_page=${perPage}&_embed&status=publish&orderby=date&order=desc`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const posts = await response.json();
    const totalPosts = parseInt(response.headers.get('X-WP-Total') || '0');
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1');
    
    return {
      posts,
      totalPages,
      totalPosts
    };
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    throw error;
  }
};
