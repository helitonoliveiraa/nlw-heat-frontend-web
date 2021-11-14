module.exports = {
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
  testEnvironment: 'jsdom'
};
