# Project Context Document

**Last Updated**: December 2, 2025  
**Project**: TestMobileApp - Enterprise React Native Application  
**Developer**: ponkarthik87  
**GitHub**: https://github.com/ponkarthik87/TestMobileApp

---

## 📋 Project Overview

This is a **production-ready, enterprise-grade React Native mobile application** built with modern best practices, TypeScript strict mode, and a complete authentication flow. The app is fully functional and has been successfully deployed to both Android emulator and physical devices.

### Project Status: ✅ FULLY FUNCTIONAL

- ✅ Development environment configured
- ✅ All dependencies installed and working
- ✅ TypeScript compilation passing
- ✅ ESLint/Prettier configured and passing
- ✅ App builds successfully on Android
- ✅ App runs on emulator
- ✅ App runs on physical device (Samsung One UI 8)
- ✅ Git repository initialized
- ✅ Code pushed to GitHub

---

## 🏗️ Architecture & Tech Stack

### **Core Technologies**

- **React Native**: 0.82.1
- **React**: 19.1.1
- **TypeScript**: 5.8+ (strict mode enabled)
- **Node.js**: >= 20

### **Navigation**

- **React Navigation**: 7.x
  - Stack Navigator (authentication flow)
  - Bottom Tab Navigator (main app)
  - Type-safe navigation with TypeScript

### **State Management**

- **Zustand**: Client-side state (auth, user data)
- **React Query (TanStack Query)**: Server state, caching, data fetching

### **Forms & Validation**

- **React Hook Form**: Form management
- **Zod**: Schema validation (v3.23.8 - downgraded from v4 for compatibility)

### **API & Networking**

- **Axios**: HTTP client with interceptors
- Automatic token injection
- Auto-logout on 401 responses

### **Storage**

- **MMKV**: Fast, encrypted storage (primary)
- **AsyncStorage**: Fallback storage
- Custom storage abstraction layer

### **UI Components**

- **React Native Paper**: Material Design components
- Custom components (Button, Input, LoadingSpinner)
- React Native Vector Icons

### **Code Quality**

- **ESLint**: TypeScript rules, React Query plugin
- **Prettier**: Code formatting
- **Husky**: Git hooks
- **lint-staged**: Pre-commit linting

### **Build Tools**

- **Metro**: Bundler with custom resolver for path aliases
- **Babel**: Module resolver for path aliases
- **Gradle**: Android builds

---

## 📁 Project Structure

```
TestMobileApp/
├── src/
│   ├── features/              # Feature-based modules
│   │   ├── auth/             # Login, Register screens
│   │   ├── home/             # Home screen
│   │   ├── search/           # Search screen
│   │   ├── notifications/    # Notifications screen
│   │   ├── settings/         # Settings screen
│   │   └── profile/          # Profile screen
│   ├── navigation/           # Navigation configuration
│   │   ├── RootNavigator.tsx # Root navigation (Auth/Main)
│   │   └── MainNavigator.tsx # Bottom tab navigation
│   ├── services/             # External services
│   │   ├── api/             # Axios client, React Query hooks
│   │   └── storage/         # MMKV/AsyncStorage abstraction
│   ├── store/               # Zustand stores
│   │   └── authStore.ts     # Authentication state
│   ├── shared/              # Shared resources
│   │   ├── components/      # Reusable UI components
│   │   ├── hooks/          # Custom hooks (useDebounce, useKeyboard)
│   │   ├── utils/          # Utility functions
│   │   └── constants/      # App constants, colors, config
│   └── types/              # TypeScript type definitions
│       ├── index.ts        # Global types
│       └── navigation.ts   # Navigation types
├── android/                # Android native code
├── ios/                    # iOS native code
├── .husky/                 # Git hooks
├── App.tsx                 # Root component
├── metro.config.js         # Metro bundler config (with path aliases)
├── babel.config.js         # Babel config (with module resolver)
├── tsconfig.json           # TypeScript config (strict mode)
├── .eslintrc.js           # ESLint configuration
├── .prettierrc.js         # Prettier configuration
└── package.json           # Dependencies and scripts
```

---

## 🔧 Configuration Details

### **Path Aliases** (Configured in 3 places)

1. **tsconfig.json** - TypeScript resolution
2. **babel.config.js** - Babel module resolver
3. **metro.config.js** - Metro bundler resolver

```typescript
@features → src/features
@shared → src/shared
@navigation → src/navigation
@services → src/services
@store → src/store
@types → src/types
```

### **Key Configuration Files**

#### **metro.config.js**

- Custom resolver with `extraNodeModules` for path aliases
- Required for Metro to resolve @ imports

#### **babel.config.js**

- `babel-plugin-module-resolver` configured
- Maps path aliases for runtime resolution

#### **android/settings.gradle**

- Includes `react-native-nitro-modules` (required by MMKV v4)
- Custom configuration added to fix build issues

#### **src/services/storage/index.ts**

- Dynamic `require()` for MMKV to avoid TypeScript errors
- Fallback to AsyncStorage if MMKV unavailable
- ESLint rules disabled for require statements

---

## 🚀 Available Scripts

```bash
# Development
npm start                  # Start Metro bundler
npm run android           # Run on Android
npm run ios              # Run on iOS

# Code Quality
npm run lint             # Check linting
npm run lint:fix         # Fix linting issues
npm run format           # Format all files
npm run type-check       # TypeScript type checking

# Maintenance
npm test                 # Run tests
npm run clean:cache      # Clear Metro cache
```

---

## 📱 App Features & Screens

### **Authentication Flow**

- **LoginScreen** (`src/features/auth/screens/LoginScreen.tsx`)
  - Email + Password validation
  - Form validation with Zod
  - Token storage on successful login
- **RegisterScreen** (`src/features/auth/screens/RegisterScreen.tsx`)
  - Name, Email, Password, Confirm Password
  - Zod validation schema
  - Navigate to login after registration

### **Main App (Bottom Tabs)**

- **HomeScreen**: Dashboard with user stats
- **SearchScreen**: Search functionality placeholder
- **NotificationsScreen**: Notifications list
- **SettingsScreen**: User profile, app settings, logout

### **Navigation Logic**

- Zustand `authStore` tracks authentication state
- `RootNavigator` conditionally renders Auth or Main stack
- Type-safe navigation with TypeScript

---

## 🐛 Known Issues & Solutions

### **Issue 1: MMKV Build Failure**

**Problem**: `react-native-nitro-modules` not found  
**Solution**: Added to `android/settings.gradle`:

```gradle
include ':react-native-nitro-modules'
project(':react-native-nitro-modules').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-nitro-modules/android')
```

### **Issue 2: Zod v4 Compatibility**

**Problem**: Export namespace transform error  
**Solution**: Downgraded to Zod v3.23.8

```bash
npm install zod@^3.23.8
```

### **Issue 3: Path Aliases Not Resolving**

**Problem**: Metro couldn't resolve @ imports  
**Solution**: Added `extraNodeModules` to `metro.config.js`

### **Issue 4: Metro Bundler Connection**

**Problem**: "Unable to load script" error  
**Solution**:

```bash
adb reverse tcp:8081 tcp:8081
npm start -- --reset-cache
```

---

## 🔐 Environment & Secrets

### **Environment Variables** (`.env.example`)

```bash
API_BASE_URL=https://api.example.com
API_TIMEOUT=30000
ENABLE_LOGGING=true
```

**Note**: Create `.env` file for local development (not committed to Git)

---

## 📦 Dependencies (Key Packages)

### **Production Dependencies**

```json
{
  "@react-navigation/native": "^7.0.15",
  "@react-navigation/stack": "^7.1.2",
  "@react-navigation/bottom-tabs": "^7.2.0",
  "@tanstack/react-query": "^5.62.11",
  "axios": "^1.7.9",
  "react-hook-form": "^7.54.2",
  "zod": "^3.23.8",
  "zustand": "^5.0.2",
  "react-native-mmkv": "^4.0.0",
  "react-native-paper": "^5.12.5",
  "react-native-vector-icons": "^10.2.0"
}
```

### **Dev Dependencies**

```json
{
  "@typescript-eslint/eslint-plugin": "^8.18.1",
  "@typescript-eslint/parser": "^8.18.1",
  "babel-plugin-module-resolver": "^5.0.2",
  "husky": "^9.1.7",
  "lint-staged": "^15.2.11",
  "prettier": "^3.4.2"
}
```

---

## 🔨 Build & Deployment

### **Android Build**

```bash
# Debug build
cd android && ./gradlew assembleDebug

# Release build
cd android && ./gradlew assembleRelease
```

**APK Location**: `android/app/build/outputs/apk/debug/app-debug.apk`

### **Device Testing**

- **Emulator**: Works perfectly
- **Physical Device**: Samsung One UI 8 tested and working
  - USB Debugging enabled
  - Device ID: `RFCWC0YWYJH`
  - Run: `npx react-native run-android --deviceId=RFCWC0YWYJH`

---

## 🎯 Development Workflow

### **Starting Development**

1. Start Metro: `npm start`
2. Run on device: `npm run android` (or use WebStorm run config)
3. Make changes - Hot reload active
4. Pre-commit hooks run automatically

### **Making Changes**

1. All code in `src/` directory
2. Use path aliases for imports
3. TypeScript strict mode enforced
4. ESLint + Prettier run on save/commit

### **Adding New Features**

1. Create feature folder in `src/features/`
2. Add screens, components, hooks
3. Update navigation if needed
4. Add types to `src/types/`

---

## 📝 Git & GitHub

### **Repository**

- **URL**: https://github.com/ponkarthik87/TestMobileApp
- **Branch**: main
- **Visibility**: Public

### **Git Configuration**

```bash
git config user.name "ponkarthik87"
git config user.email "ponkarthik87@gmail.com"
```

### **Commit Convention**

Using conventional commits:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation
- `refactor:` - Code refactoring
- `style:` - Code style changes
- `test:` - Tests

---

## 🚦 Current State

### **What's Working**

✅ TypeScript compilation  
✅ ESLint/Prettier  
✅ Metro bundler  
✅ Android builds  
✅ App runs on emulator  
✅ App runs on physical device  
✅ Authentication flow  
✅ Navigation  
✅ State management  
✅ Form validation  
✅ Storage (MMKV)  
✅ Git repository  
✅ GitHub sync

### **What's Not Implemented**

❌ Real API integration (using mock data)  
❌ iOS testing (not tested yet)  
❌ Unit tests (basic setup only)  
❌ E2E tests  
❌ CI/CD pipeline  
❌ App store deployment  
❌ Push notifications  
❌ Analytics  
❌ Error monitoring (Sentry, etc.)

---

## 🎓 Important Notes for Future Sessions

### **Critical Files to Check**

1. **metro.config.js** - Path alias resolution
2. **android/settings.gradle** - Native module includes
3. **src/services/storage/index.ts** - Storage abstraction
4. **package.json** - Zod version must be 3.x

### **Common Commands**

```bash
# Clear everything and restart
npm run clean:cache
npm start -- --reset-cache

# Rebuild Android
cd android && ./gradlew clean && cd ..
npm run android

# Check devices
adb devices

# Reverse port for Metro
adb reverse tcp:8081 tcp:8081
```

### **WebStorm Run Configuration**

- **Name**: Run on Phone
- **Command**: run
- **Scripts**: android
- **Arguments**: `-- --deviceId=RFCWC0YWYJH`

### **If Metro Won't Start**

```bash
# Kill all node processes
taskkill /F /IM node.exe

# Restart Metro
npm start -- --reset-cache
```

---

## 📚 Documentation Files

- **README.md** - Main project documentation
- **QUICKSTART.md** - Quick start guide
- **ARCHITECTURE.md** - Detailed architecture
- **SETUP.md** - Setup instructions
- **PROJECT_SUMMARY.md** - Project overview
- **PROJECT_CONTEXT.md** - This file (session context)

---

## 🔮 Next Steps & Roadmap

### **Immediate Next Steps**

1. Implement real API endpoints
2. Add more screens/features
3. Implement proper error handling
4. Add loading states
5. Implement refresh functionality

### **Future Enhancements**

1. Add unit tests (Jest)
2. Add E2E tests (Detox)
3. Setup CI/CD (GitHub Actions)
4. Add error monitoring (Sentry)
5. Add analytics (Firebase, Amplitude)
6. Implement push notifications
7. Add offline support
8. Optimize performance
9. Add animations
10. Prepare for app store release

---

## 🆘 Troubleshooting Guide

### **App Won't Build**

1. Check `android/settings.gradle` for nitro-modules
2. Clean build: `cd android && ./gradlew clean`
3. Check Gradle version compatibility

### **Path Aliases Not Working**

1. Verify `metro.config.js` has extraNodeModules
2. Verify `babel.config.js` has module-resolver
3. Restart Metro with `--reset-cache`

### **Device Not Connecting**

1. Enable USB debugging on phone
2. Change USB mode to "File Transfer"
3. Run `adb devices` to verify
4. Run `adb reverse tcp:8081 tcp:8081`

### **Metro Bundler Issues**

1. Kill all node processes
2. Clear cache: `npm run clean:cache`
3. Restart: `npm start -- --reset-cache`

---

## 👤 Developer Information

- **Name**: ponkarthik87
- **GitHub**: https://github.com/ponkarthik87
- **Email**: ponkarthik87@gmail.com
- **Device**: Samsung One UI 8 (Android)

---

## 📊 Project Statistics

- **Total Files**: 89
- **Lines of Code**: ~18,093
- **Screens**: 6 (Login, Register, Home, Search, Notifications, Settings)
- **Components**: 3 custom (Button, Input, LoadingSpinner)
- **Hooks**: 2 custom (useDebounce, useKeyboard)
- **Dependencies**: 56 packages
- **Dev Dependencies**: 38 packages

---

## ✅ Session Completion Checklist

When resuming work, verify:

- [ ] Metro bundler is running
- [ ] Device is connected (if testing on phone)
- [ ] Git status is clean
- [ ] All dependencies installed
- [ ] TypeScript compiling
- [ ] ESLint passing

---

**End of Project Context Document**

_This document should be updated after major changes or milestones._
