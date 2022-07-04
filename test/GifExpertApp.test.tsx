import { render, screen } from '@testing-library/react';

import { GifExpertApp } from '../src/GifExpertApp';

describe('GifExpertApp', () => {
	test('should first', () => {
		const { container } = render(<GifExpertApp />);

		expect(container).toMatchSnapshot();
	});
});
