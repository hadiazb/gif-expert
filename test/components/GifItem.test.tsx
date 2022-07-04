import { render, screen } from '@testing-library/react';

import { GifItem } from '../../src/components';

describe('GifItem', () => {
	const title = 'titulo';
	const url = 'https://one-punch.com/saitama.jpg';

	test('Snapshot the component', () => {
		const { container } = render(<GifItem title={title} url={url} />);
		expect(container).toMatchSnapshot();
	});

	test('should the image with url and alt tags ', () => {
		render(<GifItem title={title} url={url} />);

		const { src, alt } = screen.getByRole('img') as HTMLImageElement;

		expect(src).toBe(url);
		expect(alt).toBe(title);
	});

	test('should the title in the component', () => {
		render(<GifItem title={title} url={url} />);

		expect(screen.getByText(title)).toBeTruthy();
	});
});
