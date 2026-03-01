import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useIsMobile } from '../use-mobile';

describe('useIsMobile', () => {
    beforeEach(() => {
        // Reset window.innerWidth and matchMedia mock
        vi.stubGlobal('matchMedia', vi.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: vi.fn(), // deprecated
            removeListener: vi.fn(), // deprecated
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            dispatchEvent: vi.fn(),
        })));
    });

    it('should return false for desktop width', () => {
        vi.stubGlobal('innerWidth', 1024);
        const { result } = renderHook(() => useIsMobile());
        expect(result.current).toBe(false);
    });

    it('should return true for mobile width', () => {
        vi.stubGlobal('innerWidth', 375);
        // Mock matchMedia to return true for (max-width: 767px)
        vi.stubGlobal('matchMedia', vi.fn().mockImplementation(query => ({
            matches: query === '(max-width: 767px)',
            media: query,
            onchange: null,
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
        })));

        const { result } = renderHook(() => useIsMobile());
        expect(result.current).toBe(true);
    });
});
