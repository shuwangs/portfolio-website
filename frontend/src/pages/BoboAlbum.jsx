import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { boboPhotos } from '../data/bobo/photos';
import './BoboAlbum.css';

function PhotoDate({ date }) {
  if (!date) return null;
  const label = new Intl.DateTimeFormat('en-US', {
    month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
  return <time dateTime={date}>{label}</time>;
}

function PhotoViewer({ index, onClose, onChange }) {
  const dialogRef = useRef(null);
  const photo = boboPhotos[index];
  const hasMultiple = boboPhotos.length > 1;

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);

  function handleKeyDown(event) {
    if (!hasMultiple) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      onChange(event.key === 'ArrowLeft' ? -1 : 1);
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="bobo-lightbox"
      aria-label="Bobo photo viewer"
      onCancel={onClose}
      onKeyDown={handleKeyDown}
      onClick={event => { if (event.target === event.currentTarget) onClose(); }}
    >
      <div className="bobo-lightbox-content">
        <div className="bobo-lightbox-toolbar">
          <span aria-live="polite">{index + 1} / {boboPhotos.length}</span>
          <button type="button" autoFocus onClick={onClose} aria-label="Close photo viewer">Close ×</button>
        </div>
        <img src={photo.src} alt={photo.alt} />
        <div className="bobo-lightbox-caption" aria-live="polite">
          <p>{photo.caption}</p>
          <PhotoDate date={photo.date} />
        </div>
        {hasMultiple && (
          <div className="bobo-lightbox-navigation">
            <button type="button" onClick={() => onChange(-1)} aria-label="Previous photo">← Previous</button>
            <button type="button" onClick={() => onChange(1)} aria-label="Next photo">Next →</button>
          </div>
        )}
      </div>
    </dialog>
  );
}

export default function BoboAlbum() {
  const [activeIndex, setActiveIndex] = useState(null);
  function changePhoto(direction) {
    setActiveIndex(index => (index + direction + boboPhotos.length) % boboPhotos.length);
  }

  return (
    <div className="bobo-album">
      <div className="bobo-album-inner">
        <Link className="bobo-album-back" to="/bobo">← Back to Bobo</Link>
        <header className="bobo-album-header">
          <p className="bobo-album-eyebrow">Life off the keyboard</p>
          <h1>Bobo’s little moments.</h1>
          <p>Cozy naps, quiet company, and a little mischief along the way.</p>
        </header>
        {boboPhotos.length > 0 ? (
          <div className="bobo-album-grid">
            {boboPhotos.map((photo, index) => (
              <figure className="bobo-album-card" key={photo.id}>
                <button type="button" onClick={() => setActiveIndex(index)} aria-label={`Enlarge photo: ${photo.alt}`}>
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                  <span className="bobo-album-enlarge" aria-hidden="true">View photo ↗</span>
                </button>
                <figcaption>
                  <p>{photo.caption}</p>
                  <PhotoDate date={photo.date} />
                </figcaption>
              </figure>
            ))}
          </div>
        ) : <p className="bobo-album-empty">Bobo’s first little moment is coming soon.</p>}
        {activeIndex !== null && <PhotoViewer index={activeIndex} onClose={() => setActiveIndex(null)} onChange={changePhoto} />}
      </div>
    </div>
  );
}
