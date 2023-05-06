module.exports = {
  testEnvironment: "jsdom",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test|tests).[tj]s?(x)",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.(ts|js|html)$": "ts-jest",
    "^.+\\.tsx?$": "babel-jest",
    '^.+\\.(png|jpg|jpeg|gif|webp|svg)$': 'jest-transform-stub',
  },
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
};
