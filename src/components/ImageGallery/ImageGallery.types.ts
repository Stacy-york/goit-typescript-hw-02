import type { Image } from '../../types';

export interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}