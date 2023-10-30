const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig({
  ...customJestConfig,
  moduleNameMapper: {
    // Add your moduleNameMapper configuration here
    'app/(.*)$': '<rootDir>/app/$1',
    'actions/(.*)$': '<rootDir>/actions/$1',
    'components/(.*)$': '<rootDir>/components/$1',
    'libs/(.*)$': '<rootDir>/libs/$1',
    'hooks/(.*)$': '<rootDir>/hooks/$1',
  },
});
