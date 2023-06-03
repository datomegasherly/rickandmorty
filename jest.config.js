module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>__tests__/setup/setupEnzyme.js"],
  testPathIgnorePatterns: ["<rootDir>/__tests__/setup/"],
  transform: {
    ".(ts|tsx)": "ts-jest",
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  moduleFileExtensions: ["ts", "tsx", "js"],
  moduleNameMapper: {
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@css/(.*)$": "<rootDir>/__mocks__/styleMock.js",
    "^@actions$": "<rootDir>/src/redux/actions.ts",
    "^@queries$": "<rootDir>/src/queries/index.ts",
    "^@config$": "<rootDir>/config.ts",
    "^@store$": "<rootDir>/src/redux/store.ts",
    "^@src/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
};
