# Architecture Documentation

## Overview

This is an enterprise-grade React Native application built with TypeScript, following modern best practices and patterns.

## Tech Stack

### Core

- **React Native 0.82.1** - Mobile framework
- **TypeScript 5.8+** - Type safety (strict mode enabled)
- **React 19.1** - UI library

### Navigation

- **React Navigation 7** - Navigation library
  - Native Stack Navigator for main navigation
  - Bottom Tabs Navigator for main app tabs

### State Management

- **Zustand** - Lightweight client state management
- **React Query (TanStack Query)** - Server state management, caching, and synchronization

### API & Data

- **Axios** - HTTP client with interceptors
- **MMKV** - Fast, encrypted key-value storage
- **React Query** - Data fetching and caching

### Forms & Validation

- **React Hook Form** - Performant form management
- **Zod** - Schema validation

### UI Components

- **React Native Paper** - Material Design components
- Custom component library in `src/shared/components`

### Code Quality

- **ESLint** - Linting with TypeScript support
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Lint-staged** - Pre-commit checks

## Project Structure

```
src/
├── features/              # Feature-based modules
│   ├── auth/             # Authentication feature
│   │   └── screens/      # Auth screens (Login, Register)
│   ├── home/             # Home feature
│   ├── search/           # Search feature
│   ├── notifications/    # Notifications feature
│   ├── settings/         # Settings feature
│   └── profile/          # Profile feature
│
├── navigation/           # Navigation configuration
│   ├── RootNavigator.tsx # Main navigation container
│   └── MainNavigator.tsx # Tab navigation
│
├── services/            # External services
│   ├── api/            # API client and queries
│   │   ├── client.ts   # Axios configuration
│   │   └── queries.ts  # React Query hooks
│   └── storage/        # Storage utilities (MMKV)
│
├── store/              # Global state management
│   └── authStore.ts    # Authentication store (Zustand)
│
├── shared/             # Shared resources
│   ├── components/     # Reusable UI components
│   ├── hooks/          # Custom React hooks
│   └── utils/          # Utility functions
│
└── types/              # TypeScript type definitions
    ├── index.ts        # Global types
    └── navigation.ts   # Navigation types
```

## Key Patterns

### 1. Feature-Based Architecture

Each feature is self-contained with its own screens, components, hooks, and logic.

### 2. Type Safety

- Strict TypeScript configuration
- Type-safe navigation with typed routes
- Zod schemas for runtime validation

### 3. State Management Strategy

- **Server State**: React Query (API data, caching)
- **Client State**: Zustand (auth, UI state)
- **Local Storage**: MMKV (persistent data)

### 4. API Layer

- Centralized Axios client with interceptors
- Automatic token injection
- Error handling and retry logic
- React Query for data fetching

### 5. Form Handling

- React Hook Form for performance
- Zod for schema validation
- Type-safe form data

## Development Workflow

### Running the App

```bash
# Start Metro bundler
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios
```

### Code Quality

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Type check
npm run type-check

# Run tests
npm test
```

### Clean Build

```bash
# Clear Metro cache
npm run clean:cache

# Clean native builds
npm run clean
```

## Authentication Flow

1. App initializes and checks for stored auth token
2. If token exists, user is authenticated and shown Main navigator
3. If no token, user is shown Login/Register screens
4. After successful login, token is stored in MMKV
5. Token is automatically added to API requests via Axios interceptor
6. On 401 response, token is cleared and user is logged out

## Navigation Structure

```
RootNavigator (Stack)
├── Auth Flow (when not authenticated)
│   ├── Login
│   └── Register
└── Main Flow (when authenticated)
    ├── MainNavigator (Tabs)
    │   ├── Home
    │   ├── Search
    │   ├── Notifications
    │   └── Settings
    └── Profile (Modal)
```

## Best Practices

### Component Design

- Use functional components with hooks
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use TypeScript for prop types

### State Management

- Use React Query for server state
- Use Zustand for global client state
- Use local state (useState) for component-specific state
- Avoid prop drilling - use context or state management

### Error Handling

- Use try-catch for async operations
- Display user-friendly error messages
- Log errors for debugging
- Implement error boundaries for React errors

### Performance

- Use React.memo for expensive components
- Implement proper list virtualization
- Optimize images and assets
- Use Hermes engine (enabled by default)

## Testing Strategy

### Unit Tests

- Test utility functions
- Test custom hooks
- Test business logic

### Component Tests

- Use React Native Testing Library
- Test user interactions
- Test component rendering

### E2E Tests

- Use Detox or Maestro
- Test critical user flows
- Test navigation

## Environment Configuration

Create a `.env` file based on `.env.example`:

- Configure API endpoints
- Set feature flags
- Add API keys and secrets

## Deployment

### Android

```bash
cd android
./gradlew assembleRelease
```

### iOS

```bash
cd ios
xcodebuild -workspace TestMobileApp.xcworkspace -scheme TestMobileApp -configuration Release
```

## Future Enhancements

- [ ] Add Sentry for error monitoring
- [ ] Implement push notifications
- [ ] Add offline support
- [ ] Implement deep linking
- [ ] Add analytics (Firebase/Mixpanel)
- [ ] Add E2E tests with Detox
- [ ] Implement CI/CD pipeline
- [ ] Add code coverage reporting
- [ ] Implement feature flags
- [ ] Add internationalization (i18n)
