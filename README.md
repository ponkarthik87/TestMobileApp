# TestMobileApp - Enterprise React Native Application

An enterprise-grade React Native application built with TypeScript, featuring modern architecture patterns, best practices, and a complete authentication flow.

## 🌟 Features

- ✅ **TypeScript** with strict mode
- ✅ **React Navigation** (Stack + Bottom Tabs)
- ✅ **State Management** (Zustand + React Query)
- ✅ **Form Validation** (React Hook Form + Zod)
- ✅ **API Layer** (Axios + React Query)
- ✅ **Encrypted Storage** (MMKV)
- ✅ **UI Components** (React Native Paper + Custom)
- ✅ **Code Quality** (ESLint + Prettier + Husky)
- ✅ **Path Aliases** (@features, @shared, etc.)
- ✅ **Authentication Flow** (Login/Register)

## 🚀 Quick Start

### Prerequisites

- Node.js >= 20
- React Native development environment ([Setup Guide](https://reactnative.dev/docs/environment-setup))
- Android Studio (for Android)
- Xcode (for iOS, macOS only)

### Installation

```bash
# Install dependencies
npm install

# iOS only - Install pods
cd ios && pod install && cd ..
```

### Run the App

```bash
# Start Metro bundler
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios
```

## 📱 App Flow

1. **Login Screen** - Enter credentials to login
2. **Main App** - 4 tabs (Home, Search, Notifications, Settings)
3. **Settings** - Logout to return to login screen

## 🏗️ Project Structure

```
src/
├── features/          # Feature modules (auth, home, etc.)
├── navigation/        # Navigation configuration
├── services/          # API & storage services
├── store/            # Global state (Zustand)
├── shared/           # Shared components, hooks, utils
└── types/            # TypeScript type definitions
```

## 🛠️ Development

### Available Scripts

```bash
npm start              # Start Metro bundler
npm run android        # Run on Android
npm run ios            # Run on iOS
npm run lint           # Check linting
npm run lint:fix       # Fix linting issues
npm run format         # Format code
npm run type-check     # TypeScript type checking
npm test               # Run tests
```

### Code Quality

Pre-commit hooks automatically run:

- ESLint (with auto-fix)
- Prettier (with auto-format)
- TypeScript type checking

## 📚 Documentation

- **[QUICKSTART.md](./QUICKSTART.md)** - Get started in 5 minutes
- **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** - Complete project overview
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Architecture details
- **[SETUP.md](./SETUP.md)** - Detailed setup guide

## 🎯 Tech Stack

### Core

- React Native 0.82.1
- TypeScript 5.8+
- React 19.1

### Navigation & State

- React Navigation 7
- Zustand (client state)
- React Query (server state)

### Forms & Validation

- React Hook Form
- Zod

### API & Storage

- Axios
- MMKV
- AsyncStorage (fallback)

### UI

- React Native Paper
- Custom components

### Code Quality

- ESLint
- Prettier
- Husky
- Lint-staged

## 🔐 Authentication

The app includes a complete authentication flow:

- Login/Register screens with validation
- Token-based authentication
- Persistent storage (MMKV)
- Automatic token injection in API calls
- Auto-logout on 401 responses

## 🎨 Customization

### Update API Endpoint

Edit `src/services/api/client.ts`:

```typescript
const API_BASE_URL = 'https://your-api.com';
```

### Add New Features

Create feature folders in `src/features/`:

```
src/features/your-feature/
├── screens/
├── components/
└── hooks/
```

### Customize Colors

Edit `src/shared/constants/index.ts`:

```typescript
export const COLORS = {
  primary: '#007AFF',
  // ... your colors
};
```

## 🐛 Troubleshooting

### Clear Cache

```bash
npm run clean:cache
```

### Clean Build

```bash
# Android
cd android && ./gradlew clean && cd ..

# iOS
cd ios && xcodebuild clean && cd ..
```

### Reinstall Dependencies

```bash
rm -rf node_modules
npm install
```

## 📖 Learn More

- [React Native Docs](https://reactnative.dev/)
- [TypeScript Docs](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/)
- [React Query](https://tanstack.com/query/latest)
- [Zustand](https://github.com/pmndrs/zustand)

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

Please read the architecture documentation before contributing.

---

**Built with ❤️ using React Native**
