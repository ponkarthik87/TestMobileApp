# Setup Guide

## Prerequisites

- **Node.js**: >= 20.x
- **npm** or **yarn**
- **React Native CLI**: `npm install -g react-native-cli`
- **Android Studio** (for Android development)
- **Xcode** (for iOS development, macOS only)

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd TestMobileApp
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install iOS dependencies (macOS only)

```bash
cd ios
pod install
cd ..
```

### 4. Configure environment variables

```bash
cp .env.example .env
# Edit .env with your configuration
```

## Running the App

### Start Metro Bundler

```bash
npm start
```

### Run on Android

```bash
npm run android
```

### Run on iOS (macOS only)

```bash
npm run ios
```

## Development

### Code Quality Commands

#### Linting

```bash
# Check for linting errors
npm run lint

# Fix linting errors automatically
npm run lint:fix
```

#### Formatting

```bash
# Format all files
npm run format

# Check formatting without making changes
npm run format:check
```

#### Type Checking

```bash
# Run TypeScript type checking
npm run type-check
```

#### Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

### Clean Build

#### Clear Metro cache

```bash
npm run clean:cache
```

#### Clean native builds

```bash
npm run clean
```

## Project Structure

```
TestMobileApp/
├── src/
│   ├── features/          # Feature modules
│   ├── navigation/        # Navigation configuration
│   ├── services/          # API and external services
│   ├── store/            # State management
│   ├── shared/           # Shared components, hooks, utils
│   └── types/            # TypeScript types
├── android/              # Android native code
├── ios/                  # iOS native code
├── __tests__/           # Test files
├── .husky/              # Git hooks
├── App.tsx              # Root component
└── index.js             # Entry point
```

## Key Technologies

- **React Native 0.82.1** - Mobile framework
- **TypeScript** - Type safety
- **React Navigation** - Navigation
- **Zustand** - State management
- **React Query** - Server state & caching
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **Axios** - HTTP client
- **MMKV** - Storage
- **React Native Paper** - UI components

## Git Workflow

### Pre-commit Hooks

The project uses Husky and lint-staged to run checks before commits:

- ESLint (auto-fix)
- Prettier (auto-format)

### Commit Message Format

Follow conventional commits:

```
feat: add new feature
fix: fix bug
docs: update documentation
style: format code
refactor: refactor code
test: add tests
chore: update dependencies
```

## Troubleshooting

### Metro Bundler Issues

```bash
# Clear cache and restart
npm run clean:cache
```

### Android Build Issues

```bash
# Clean Android build
cd android
./gradlew clean
cd ..
```

### iOS Build Issues

```bash
# Clean iOS build
cd ios
xcodebuild clean
pod install
cd ..
```

### Node Modules Issues

```bash
# Remove and reinstall
rm -rf node_modules
npm install
```

## Environment Variables

Create a `.env` file with the following variables:

```env
# API Configuration
API_BASE_URL=https://api.yourapp.com
API_TIMEOUT=30000

# Feature Flags
ENABLE_ANALYTICS=true
ENABLE_CRASH_REPORTING=true

# Storage
STORAGE_ENCRYPTION_KEY=your-encryption-key-here

# Sentry (Error Monitoring)
SENTRY_DSN=your-sentry-dsn-here
```

## Additional Resources

- [React Native Documentation](https://reactnative.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/)
- [React Query](https://tanstack.com/query/latest)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Hook Form](https://react-hook-form.com/)

## Support

For issues and questions, please create an issue in the repository.
