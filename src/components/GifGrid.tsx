import { GifItem } from '.';
import { useFetchGifs } from '../hooks';

export interface GifGridProps {
	category: string;
}

export const GifGrid: React.FC<GifGridProps> = ({ category }) => {
	const { images, isLoading, error } = useFetchGifs(category);

	return (
		<div>
			{isLoading && <p>Cargando...</p>}
			<>
				{error ? (
					<p>{error}</p>
				) : (
					<>
						<h3>{category}</h3>
						<div className='card-grid'>
							{images.map((image) => (
								<GifItem key={image.id} {...image} />
							))}
						</div>
					</>
				)}
			</>
		</div>
	);
};
