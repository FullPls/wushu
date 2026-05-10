import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

/**
 * Карусель фото филиала (аналог Bootstrap carousel из filials.php).
 * Изображения — те же статические файлы из public/img, без перекодирования.
 */
export default function FilialPhotoCarousel({ photos, address }) {
  if (!photos?.length) return null;

  return (
    <div className="photos filial-photo-carousel">
      <Carousel interval={5000} indicators controls pause="hover">
        {photos.map((src, idx) => (
          <Carousel.Item key={`${src}-${idx}`}>
            <img className="d-block w-100" src={src} alt={`${address} — фото ${idx + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
