import { renderHook, waitFor } from '@testing-library/react';

import { useFetchGifs } from '../../src/hooks';

describe('useFetchGifs hook', () => {
	const category = 'One Punch';
	test('should return the initialstate', () => {
		const { result } = renderHook(() => useFetchGifs(category));
		const { images, error, isLoading } = result.current;

		expect(images.length).toBe(0);
		expect(error).toBe('');
		expect(isLoading).toBe(true);
	});

	test('should return the images array', async () => {
		const { result } = renderHook(() => useFetchGifs(category));
		await waitFor(() =>
			expect(result.current.images.length).toBeGreaterThan(0)
		);
		const { images, error, isLoading } = result.current;

		expect(images.length).toBe(10);
		expect(isLoading).toBe(false);
	});
});
