module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ["/node_modules/", "/.husky/"],
  setupFilesAfterEnv: [
    "<rootDir>/src/tests/setupTests.ts"
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
  },
  moduleNameMapper: {
    "\\.svg": "<rootDir>/src/__mocks__/fileMock.ts"
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.tsx",
    "!src/**/*.spec.tsx",
    "!**/node_modules/**",
  ],
  coverageReporters: ["json", "lcov"]
};
