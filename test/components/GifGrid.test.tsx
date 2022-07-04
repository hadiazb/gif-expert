import { render, screen } from '@testing-library/react';

import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('GifGrid component', () => {
	const category = 'One Punch';
	const isLoading = 'Cargando...';

	test('should show the loading view in the start', () => {
		(useFetchGifs as jest.Mock).mockReturnValue({
			images: [],
			isLoading: true,
			error: '',
		});

		render(<GifGrid category={category} />);

		expect(screen.getByText(isLoading));
		expect(screen.getByText(category));
	});

	test('should show items when the images has been loaded from api', () => {
		(useFetchGifs as jest.Mock).mockReturnValue({
			images: [
				{
					id: '123bnmDSGSg',
					title: 'Saitama',
					url: 'https://localhost/saitama.jpg',
				},
				{
					id: '123bnasdSGSg',
					title: 'Goku',
					url: 'https://localhost/Goku.jpg',
				},
			],
			isLoading: false,
			error: '',
		});

		render(<GifGrid category={category} />);

		expect(screen.getAllByRole('img').length).toBe(2);
	});
});
