# Savvy Tech List Management

A modern, responsive list management application built with Next.js, TypeScript, and Mantine UI. Features include real-time list updates, analytics, and persistent storage.

## 🚀 Features

- **Modern UI/UX**: Built with Mantine UI components and Tailwind CSS
- **Type-Safe**: Full TypeScript support
- **Persistent Storage**: Local storage integration with Zustand
- **Analytics Dashboard**: Track item statistics
- **Responsive Design**: Mobile-first approach
- **Modular Architecture**: Component-based structure
- **Testing**: Jest for unit tests and Cypress for E2E testing

## 📦 Tech Stack

- **Framework**: Next.js 16
- **UI Library**: Mantine UI 8.3
- **State Management**: Zustand 5.0
- **Styling**: Tailwind CSS 4
- **Icons**: Tabler Icons
- **Testing**: Jest + Testing Library, Cypress
- **Form Handling**: Mantine Form + Yup

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/SinaShateri/savvy-tech.git
cd savvy-tech
```

2. Install dependencies:
```bash
npm install
# If you encounter peer dependency issues, use:
npm install --legacy-peer-deps
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧪 Testing

### Unit Tests

Run Jest unit tests:
```bash
npm test           # Run tests once
npm run test:watch # Run in watch mode
```

### E2E Tests

1. Ensure the development server is running:
```bash
npm run dev
```

2. Run Cypress tests:
```bash
npm run cypress:open # Open Cypress UI
# or
npm run cypress:run # Run in headless mode
```

#### E2E Test Coverage

The E2E test suite covers:
- Item Creation
- Item Editing
- Item Deletion
- Form Validation
- UI State Management

## 📁 Project Structure

```
app/                  # Next.js app router
components/
├── pages/           # Page-specific components
├── providers/       # Context providers
└── shared/          # Reusable components
stores/              # Zustand stores
utils/               # Utility functions
cypress/             # E2E tests
```

## 🔧 Configuration

- `next.config.ts` - Next.js configuration
- `cypress.config.ts` - Cypress configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.mjs` - PostCSS configuration
- `jest.config.cjs` - Jest configuration

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm test` - Run unit tests
- `npm run cypress:open` - Open Cypress UI
- `npm run cypress:run` - Run Cypress tests headless

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

This project is licensed under the MIT License.
