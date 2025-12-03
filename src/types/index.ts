// Global type definitions
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  page: number;
  totalPages: number;
  totalItems: number;
}
