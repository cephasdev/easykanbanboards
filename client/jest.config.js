/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jest-environment-jsdom', // Simulate a browser environment
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Setup file for global configurations
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS imports
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Transform TypeScript files
  },
};

export default config;
