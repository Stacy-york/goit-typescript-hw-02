import css from './ImageCard.module.css';
import type { ImageCardProps } from './ImageCard.types';

export default function ImageCard({ image, onImageClick }: ImageCardProps) {
  const { urls, alt_description, user } = image;

  return (
    <div className={css.card} onClick={() => onImageClick(image)}>
      <img
        src={urls.small}
        alt={alt_description ?? 'Image'}
        className={css.image}
      />
      <p className={css.author}>By: {user.name}</p>
    </div>
  );
}