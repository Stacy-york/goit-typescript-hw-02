import type { Image } from '../../../types';

export interface ImageCardProps {
  image: Image;
  onImageClick: (image: Image) => void;
}