/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export const preset = 'ts-jest';
export const roots = ['<rootDir>/src'];
export const testEnvironment = 'jsdom';
export const modulePaths = [
  "<rootDir>"
];
export const moduleDirectories = [
  "node_modules",
  "src"
];
export const transform = {
  '^.+\\.tsx?$': 'ts-jest',
};
export const testRegex = '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$';
export const moduleFileExtensions = ['ts', 'tsx', 'js', 'jsx', 'json', 'node'];