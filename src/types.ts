export interface Image {
    id: string;
  alt_description: string | null;
  description: string | null;
  created_at: string;
  likes: number;
    urls: {
        small: string;
        regular: string;
        full: string;
    };
    user: {
    name: string;
  };
}

export interface FetchImagesResult {
  images: Image[];
  totalPages: number;
}