// https://mswjs.io/docs/migrations/1.x-to-2.x#requestresponsetextencoder-is-not-defined-jest
import JSDOMEnvironment from 'jest-environment-jsdom';

export default class JestEnvironment extends JSDOMEnvironment {
  constructor(...args: ConstructorParameters<typeof JSDOMEnvironment>) {
    super(...args);

    this.global.fetch = fetch;
    this.global.Headers = Headers;
    this.global.Request = Request;
    this.global.Response = Response;
    this.global.TextEncoder = TextEncoder;
    this.global.TextDecoder = TextDecoder;
  }
}
