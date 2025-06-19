import type { Image } from '../../types';

export interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: Image | null;
}