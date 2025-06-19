import { useEffect, useState } from 'react';
import css from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import ImageModal from '../ImageModal/ImageModal';
import ImageGallery from '../ImageGallery/ImageGallery';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { toast, Toaster } from 'react-hot-toast';
import { fetchImages } from '../../unsplashAPI';

export default function App() {
  const [imageCollection, setImageCollection] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [modalImage, setModalImage] = useState(null);
const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSearch = (newImage) => {
    setSearchQuery(newImage);
    setCurrentPage(1);
    setImageCollection([]);

    toast.success('Let’s see what the lens has found!');
  };

  const openModal = (image) => {
  setModalImage(image);
  setModalIsOpen(true);
};

  const incrementPage = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    async function fetchData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchImages(searchQuery, currentPage);
        setImageCollection((prev) => [...prev, ...data.images]);
        setTotalPages(data.totalPages);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [currentPage, searchQuery]);

  const isLastPage = currentPage === totalPages;
  const hasImages = imageCollection.length > 0;

  const closeModal = () => {
  setModalIsOpen(false);
  setModalImage(null);
};

  return (
    <div className={css.container}>
     <div className={css.searchBarWrapper}>
        <SearchBar onSearch={handleSearch} />
        <Toaster position="top-right" />
  {(isError || isLoading) && (
    <div className={css.statusWrapper}>
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
    </div>
  )}
</div>
      {hasImages && <ImageGallery images={imageCollection} onImageClick={openModal} />}
      {hasImages && !isLoading && !isLastPage && (
        <LoadMoreBtn onClick={incrementPage} />
      )}
       {modalIsOpen && (
        <ImageModal
          image={modalImage}
          isOpen={modalIsOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
