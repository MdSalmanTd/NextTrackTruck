// API endpoint constants
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/api/users/login",
    LOGOUT: "/api/users/logout",
    REGISTER: "/api/users/register",
    ME: "/api/users/me",
  },
  TRIPS: {
    ALL: "/api/trips/all",
    CREATE: "/api/trips/create",
    UPDATE: (id: string) => `/api/trips/update/${id}`,
  },
} as const;

export const APP_ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  DASHBOARD: "/dashboard",
  TRIPS: {
    ALL: "/all-trips",
    ADD: "/add-trip",
    EDIT: (id: string) => `/edit-trip/${id}`,
  },
} as const;

export const API_TIMEOUT = 30000;

// Pagination defaults
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
} as const;
