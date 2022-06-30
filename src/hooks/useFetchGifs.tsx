import { useEffect, useState } from 'react';

import { getGifs, GifImages } from '../helpers';

export const useFetchGifs = (category: string) => {
	const [images, setImages] = useState<GifImages[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>('');

	const getGifsByName = async () => {
		setIsLoading(true);
		const gifs = await getGifs(category);

		if (typeof gifs !== 'string') {
			setImages(gifs);
			setIsLoading(false);
		} else {
			setError(gifs);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getGifsByName();
	}, []);

	return {
		images,
		isLoading,
		error,
	};
};
