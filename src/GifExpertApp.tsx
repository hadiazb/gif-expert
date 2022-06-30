import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState<string[]>([]);

	const onAddCategory = (newCategory: string) => {
		if (categories.includes(newCategory)) return;
		setCategories((categories) => [newCategory, ...categories]);
	};

	return (
		<>
			<h1>GifExpertApp</h1>
			<AddCategory onNewCategory={(event) => onAddCategory(event)} />
			<ol>
				{categories.length > 0 &&
					categories.map((category) => (
						<GifGrid key={category} category={category} />
					))}
			</ol>
		</>
	);
};
