import { server } from './src/test/mocks/server';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());
