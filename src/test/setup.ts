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
