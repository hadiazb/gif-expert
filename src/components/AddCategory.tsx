import { useState } from 'react';

export interface AddCategoryProps {
	onNewCategory: (category: string) => void;
}

export const AddCategory: React.FC<AddCategoryProps> = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState<string>('');

	const inputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (inputValue.trim().length > 0) {
			onNewCategory(inputValue.trim());
			setInputValue('');
		}
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				type='text'
				placeholder='Buscar gifs'
				value={inputValue}
				onChange={inputOnChange}
			/>
		</form>
	);
};
