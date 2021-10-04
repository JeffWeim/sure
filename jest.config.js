module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setupTests.tsx'],
  roots: ['__tests__'],
  testMatch: [
    '<rootDir>/__tests__/**/*.test.{ts,tsx}',
  ],
  coveragePathIgnorePatterns: [
    'node_modules',
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  moduleNameMapper: {
    '@mui/styled-engine': '@mui/styled-engine-sc',
  },
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
}
