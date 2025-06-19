import css from './ImageGallery.module.css';
import ImageCard from './ImageCard/ImageCard';
import type { ImageGalleryProps } from './ImageGallery.types';

export default function ImageGallery({ images, onImageClick }: ImageGalleryProps) {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
         <ImageCard key={image.id} image={image} onImageClick={onImageClick}/>
      ))}
    </ul>
  );
}