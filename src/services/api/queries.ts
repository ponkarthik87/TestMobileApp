import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from './client';
import type { User } from '../../types/index';

// Query Keys
export const queryKeys = {
  user: ['user'] as const,
  users: ['users'] as const,
  posts: ['posts'] as const,
};

// Example: Fetch current user
export const useCurrentUser = () => {
  return useQuery({
    queryKey: queryKeys.user,
    queryFn: async () => {
      const { data } = await apiClient.get<User>('/user/me');
      return data;
    },
  });
};

// Example: Update user profile
export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (userData: Partial<User>) => {
      const { data } = await apiClient.patch<User>('/user/me', userData);
      return data;
    },
    onSuccess: () => {
      // Invalidate and refetch user data
      queryClient.invalidateQueries({ queryKey: queryKeys.user });
    },
  });
};
