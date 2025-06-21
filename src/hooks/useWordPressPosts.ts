
import { useQuery } from '@tanstack/react-query';
import { fetchWordPressPosts } from '@/services/wordpressApi';

export const useWordPressPosts = (page: number = 1, perPage: number = 6) => {
  return useQuery({
    queryKey: ['wordpress-posts', page, perPage],
    queryFn: () => fetchWordPressPosts(page, perPage),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2
  });
};
