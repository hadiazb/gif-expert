import axios, { AxiosError } from 'axios';

import { GifsResponse } from '../components';

export interface GifImages {
	id: string;
	title: string;
	url: string;
}

export const gifsApi = axios.create({
	baseURL: 'https://api.giphy.com/v1',
	params: {
		api_key: 'TBuKxoZLlHWXMWECF8zgFGpEXofHoOTm',
		limit: 10,
	},
});

export const getGifs = async (
	search: string
): Promise<string | GifImages[]> => {
	const url = `/gifs/search?q=${search}`;

	try {
		const { data } = await gifsApi.get<GifsResponse>(url, {});
		const { data: resp } = data;

		return resp.map<GifImages>((img) => ({
			id: img.id,
			title: img.title,
			url: img.images.downsized_medium.url,
		}));
	} catch (error) {
		const err = error as AxiosError;
		return `El gif: ${search} no se pudo encontrar, Error:  ${err.message}`;
	}
};
