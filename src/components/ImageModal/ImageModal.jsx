import React, { useEffect } from 'react';
import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

export default function ImageModal({ isOpen, onClose, image }) {
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === 'Escape') {
        onClose();
      }
    }
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!image) return null;

  const {
    urls,
    alt_description,
    user,
    likes,
    description,
    created_at,
  } = image;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={css.modal}
      overlayClassName={css.overlay}
      shouldCloseOnOverlayClick={true}
    >
      <button className={css.closeBtn} onClick={onClose}>&times;</button>
      <img
        src={urls.regular}
        alt={alt_description ?? 'Image'}
        className={css.image}
      />
      <div className={css.info}>
        <p><strong>Author:</strong> {user.name}</p>
        {description && <p><strong>Description:</strong> {description}</p>}
        <p><strong>Likes:</strong> {likes}</p>
        <p><strong>Created:</strong> {new Date(created_at).toLocaleDateString()}</p>
      </div>
    </Modal>
  );
}