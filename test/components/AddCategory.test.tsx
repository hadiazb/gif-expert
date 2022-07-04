import { render, screen, fireEvent } from '@testing-library/react';

import { AddCategory } from '../../src/components';

describe('AddCategory component', () => {
	const value = 'Vegeta';

	test('should change the box text value', () => {
		const onNewCategory = jest.fn();
		render(<AddCategory onNewCategory={onNewCategory} />);
		const input = screen.getByRole('textbox') as HTMLInputElement;

		fireEvent.input(input, { target: { value } });
		expect(input.value).toBe(value);
	});

	test('should call onSubmit if the input has a value', () => {
		const onNewCategory = jest.fn();
		render(<AddCategory onNewCategory={onNewCategory} />);
		const input = screen.getByRole('textbox') as HTMLInputElement;
		const form = screen.getByRole('form') as HTMLFormElement;
		fireEvent.input(input, { target: { value } });
		fireEvent.submit(form);

		expect(input.value.length).toBe(0);
		expect(input.value).toBe('');
		expect(onNewCategory).toHaveBeenCalled();
		expect(onNewCategory).toHaveBeenCalledTimes(1);
		expect(onNewCategory).toHaveBeenCalledWith(value);
	});

	test('shouldnt call the onSubmit if input value is equal to empty', () => {
		const onNewCategory = jest.fn();
		render(<AddCategory onNewCategory={onNewCategory} />);
		const form = screen.getByRole('form') as HTMLFormElement;

		fireEvent.submit(form);
		expect(onNewCategory).not.toHaveBeenCalled();
	});
});
