import '@testing-library/jest-dom';
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from 'vitest-axe/matchers';
import 'vitest-axe/extend-expect';

// Extend Vitest's expect method with methods from vitest-axe
expect.extend(matchers);

// Cleanup after each test case (e.g. unmounting React components)
afterEach(() => {
    cleanup();
});

declare module 'vitest' {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unused-vars
    export interface Assertion<T = any> extends matchers.AxeMatchers { }
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    export interface AsymmetricMatchersContaining extends matchers.AxeMatchers { }
}
