import { compilerOptions } from './tsconfig.json';
import type { Config } from 'jest';
import { pathsToModuleNameMapper } from 'ts-jest';

const jestConfig: Config = {
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: '<rootDir>/jest.environment.ts',
  // https://mswjs.io/docs/migrations/1.x-to-2.x#cannot-find-module-mswnode-jsdom
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
};

export default jestConfig;
