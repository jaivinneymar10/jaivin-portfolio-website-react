import { useEffect, useState } from 'react';
import { aboutMarkup } from '../content.js';

export default function About() {
  const [photoOpen, setPhotoOpen] = useState(false);

  useEffect(() => {
    const photo = document.querySelector('#about .abp');
    if (!photo) return;
    const openPhoto = () => setPhotoOpen(true);
    photo.addEventListener('click', openPhoto);
    photo.setAttribute('tabindex', '0');
    photo.setAttribute('role', 'button');
    photo.setAttribute('aria-label', 'Open profile picture');
    photo.setAttribute('title', 'Click to view photo');
    const onKeyDown = (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openPhoto();
      }
    };
    photo.addEventListener('keydown', onKeyDown);
    return () => {
      photo.removeEventListener('click', openPhoto);
      photo.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!photoOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setPhotoOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [photoOpen]);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: aboutMarkup }} />
      {photoOpen && (
        <div className="about-photo-lightbox" role="dialog" aria-modal="true" aria-label="Profile picture preview" onClick={() => setPhotoOpen(false)}>
          <button className="about-photo-close" type="button" aria-label="Close photo" onClick={() => setPhotoOpen(false)}>×</button>
          <img src="/images/jaivin.jpg" alt="Jaivin A" onClick={(event) => event.stopPropagation()} />
          <span>Jaivin A</span>
        </div>
      )}
    </>
  );
}
