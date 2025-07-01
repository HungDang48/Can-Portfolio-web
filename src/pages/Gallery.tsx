import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Gallery.css';

interface Artwork {
  id: number;
  title: string;
  description: string;
  image: string;
  videoFile?: string;
  pdfUrl?: string;
  category: string;
  year: string;
  medium: string;
  thumbnail?: string;
}

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [showPdfViewer, setShowPdfViewer] = useState<boolean>(false);

  const artworks: Artwork[] = [
    {
      id: 1,
      title: t('gallery.portrait'),
      description: t('gallery.portrait_desc', 'Bức chân dung thể hiện vẻ đẹp và sự duyên dáng của người phụ nữ Việt Nam'),
      image: '👩',
      category: 'portrait',
      year: '2024',
      medium: 'Digital Painting'
    },
    {
      id: 2,
      title: t('gallery.landscape'),
      description: t('gallery.landscape_desc', 'Khám phá vẻ đẹp hoang dã của thiên nhiên qua góc nhìn nghệ thuật'),
      image: '🏔️',
      category: 'landscape',
      year: '2023',
      medium: 'Oil on Canvas'
    },
    {
      id: 3,
      title: t('gallery.character'),
      description: t('gallery.character_desc', 'Nhân vật trong thế giới tưởng tượng với chi tiết phức tạp'),
      image: '🧙‍♂️',
      category: 'character',
      year: '2024',
      medium: 'Digital Art'
    },
    {
      id: 4,
      title: t('gallery.concept'),
      description: t('gallery.concept_desc', 'Concept art về thành phố trong tương lai với kiến trúc độc đáo'),
      image: '🏙️',
      category: 'concept',
      year: '2023',
      medium: 'Digital Painting'
    },
    {
      id: 5,
      title: t('gallery.still_life'),
      description: t('gallery.still_life_desc', 'Tranh hoa sen với màu sắc tươi mới và bố cục hài hòa'),
      image: '🌸',
      category: 'still-life',
      year: '2024',
      medium: 'Watercolor'
    },
    {
      id: 6,
      title: t('gallery.character'),
      description: t('gallery.character_desc2', 'Nhân vật chiến binh với trang phục và vũ khí cổ đại'),
      image: '⚔️',
      category: 'character',
      year: '2023',
      medium: 'Digital Painting'
    },
    {
      id: 7,
      title: t('gallery.landscape'),
      description: t('gallery.landscape_desc2', 'Cảnh biển lúc hoàng hôn với ánh sáng vàng cam ấm áp'),
      image: '🌅',
      category: 'landscape',
      year: '2024',
      medium: 'Acrylic'
    },
    {
      id: 8,
      title: t('gallery.concept'),
      description: t('gallery.concept_desc2', 'Concept thiết kế....'),
      image: '🎨',
      category: 'concept',
      year: '2024',
      medium: 'Digital Design'
    },
    {
      id: 9,
      title: t('CYBERCRUSH'),
      description: t('gallery.concept_desc2'),
      image: '',
      videoFile: 'CYBERCRUSH.mp4',
      category: 'video',
      year: '2024',
      medium: 'Digital Design',
      thumbnail: '/img-thumbs/CYBERCRUSH.png'
    },
    {
      id: 10,
      title: t('ICHI'),
      description: t('gallery.concept_desc2', 'Concept thiết kế....'),
      image: '',
      videoFile: 'ICHI.mp4',
      category: 'video',
      year: '2024',
      medium: 'Digital Design',
      thumbnail: '/img-thumbs/ICHI.png'
    },
    // {
    //   id: 11,
    //   title: t('i made my favorite hamburger and waited...'),
    //   description: t('gallery.concept_desc2', 'Concept thiết kế....'),
    //   image: '',
    //   videoFile: 'yellowCAT1.mp4',
    //   category: 'video',
    //   year: '2024',
    //   medium: 'Digital Design',
    //   thumbnail: '/img-thumbs/yellowCAT1.png'
    // },
    // {
    //   id: 12,
    //   title: t('I tried dancing AI dance'),
    //   description: t('gallery.concept_desc2', 'Concept thiết kế....'),
    //   image: '',
    //   videoFile: 'yellowCAT2.mp4',
    //   category: 'video',
    //   year: '2024',
    //   medium: 'Digital Design',
    //   thumbnail: '/img-thumbs/yellowCAT2.png'
    // },
    // {
    //   id: 13,
    //   title: t('Iam really not doing anything today'),
    //   description: t('gallery.concept_desc2', 'Concept thiết kế....'),
    //   image: '',
    //   videoFile: 'yellowCAT3.mp4',
    //   category: 'video',
    //   year: '2024',
    //   medium: 'Digital Design',
    //   thumbnail: '/img-thumbs/yellowCAT3.png'
    // },
    // {
    //   id: 14,
    //   title: t('Preparing dinner...'),
    //   description: t('gallery.concept_desc2', 'Concept thiết kế....'),
    //   image: '',
    //   videoFile: 'yellowCAT4.mp4',
    //   category: 'video',
    //   year: '2024',
    //   medium: 'Digital Design',
    //   thumbnail: '/img-thumbs/yellowCAT4.png'
    // },
    // {
    //   id: 15,
    //   title: t('You might be a genius who skips work'),
    //   description: t('gallery.concept_desc2', 'Concept thiết kế....'),
    //   image: '',
    //   videoFile: 'yellowCAT5.mp4',
    //   category: 'video',
    //   year: '2024',
    //   medium: 'Digital Design',
    //   thumbnail: '/img-thumbs/yellowCAT5.png'
    // },
    {
      id: 16,
      title: t('Bitget Wallet Card - Upgrade Your Life'),
      description: t('gallery.concept_desc2', 'Concept thiết kế....... '),
      image: '',
      videoFile: 'Bitget1.mp4',
      category: 'video',
      year: '2024',
      medium: 'Digital Design',
      pdfUrl: '/pdf/Bitget Wallet Card - Upgrade Your Life (1).pdf',
      thumbnail: '/img-thumbs/Bitget1.png'
    },
    {
      id: 17,
      title: t('Bitget wallet'),
      description: t('gallery.concept_desc2', 'Concept thiết kế .....'),
      image: '',
      videoFile: 'Bitget2.mp4',
      category: 'video',
      year: '2024',
      medium: 'Digital Design',
      thumbnail: '/img-thumbs/Bitget2.png'
    },
    {
      id: 18,
      title: t('Solana Chain Limit Order Video'),
      description: t('gallery.concept_desc2', 'Concept thiết kế....'),
      image: '',
      videoFile: 'Bitget3.mp4',
      category: 'video',
      year: '2024',
      medium: 'Digital Design',
      thumbnail: '/img-thumbs/Bitget3.png'
    },
    {
      id: 19,
      title: t('Bitget Wallet Card - Upgrade Your Life'),
      description: t('This is a PDF document showcasing my work'),
      image: '📄',
      category: 'pdf',
      year: '2025',
      medium: 'PDF Document',
      pdfUrl: '/pdf/Bitget Wallet Card - Upgrade Your Life (1).pdf',
      thumbnail: '/pdf-thumbs/Bitget Wallet Card - Upgrade Your Life.png'
    },
    {
      id: 20,
      title: t('EP21 Eat Vegetables Song_UPDATE'),
      description: t('This is a PDF document showcasing my work'),
      image: '📄',
      category: 'pdf',
      year: '2025',
      medium: 'PDF Document',
      pdfUrl: '/pdf/EP21 Eat Vegetables Song_UPDATE (1).pdf',
      thumbnail: '/pdf-thumbs/EP21 Eat Vegetables Song_UPDATE.png'
    },
    {
      id: 21,
      title: t('EP23 Follow Me'),
      description: t('This is a PDF document showcasing my work'),
      image: '📄',
      category: 'pdf',
      year: '2025',
      medium: 'PDF Document',
      pdfUrl: '/pdf/EP23 Follow Me (1).pdf',
      thumbnail: '/pdf-thumbs/EP23 Follow Me.png'
    },
    {
      id: 22,
      title: t('EP26 A Tisket A Tasket_UPDATE'),
      description: t('This is a PDF document showcasing my work'),
      image: '📄',
      category: 'pdf',
      year: '2025',
      medium: 'PDF Document',
      pdfUrl: '/pdf/EP26 A Tisket A Tasket_UPDATE (1).pdf',
      thumbnail: '/pdf-thumbs/EP26 A Tisket A Tasket_UPDATE.png'
    },
    {
      id: 23,
      title: t('MY BABY IS SUPERHERO'),
      description: t('This is a PDF document showcasing my work'),
      image: '📄',
      category: 'pdf',
      year: '2025',
      medium: 'PDF Document',
      pdfUrl: '/pdf/MY BABY IS SUPERHERO (1).pdf',
      thumbnail: '/pdf-thumbs/MY BABY IS SUPERHERO.png'
    },
    {
      id: 24,
      title: t('WOOLY becomes VENOM ! Banban IRONMAN vs. Banban VENOM (Amanda the Adventurer Animation)'),
      description: t('This is a PDF document showcasing my work'),
      image: '📄',
      category: 'pdf',
      year: '2025',
      medium: 'PDF Document',
      pdfUrl: '/pdf/WOOLY becomes VENOM ! Banban IRONMAN vs. Banban VENOM (Amanda the Adventurer Animation) (1).pdf',
      thumbnail: '/pdf-thumbs/WOOLY becomes VENOM ! Banban IRONMAN vs. Banban VENOM (Amanda the Adventurer Animation).png'
    }
  ];

  const filters = [
    { id: 'all', label: t('gallery.all') },
    { id: 'portrait', label: t('gallery.portrait') },
    { id: 'landscape', label: t('gallery.landscape') },
    { id: 'character', label: t('gallery.character') },
    { id: 'concept', label: t('gallery.concept') },
    { id: 'video', label: t('gallery video') },
    { id: 'still-life', label: t('gallery.still_life') },
    { id: 'pdf', label: t('PDF') }
  ];

  const filteredArtworks = activeFilter === 'all'
    ? artworks
    : artworks.filter(artwork => artwork.category === activeFilter);

  const openModal = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    setShowPdfViewer(false);
  };

  const closeModal = () => {
    setSelectedArtwork(null);
    setShowPdfViewer(false);
  };

  const openPdfViewer = () => {
    setShowPdfViewer(true);
  };

  const closePdfViewer = () => {
    setShowPdfViewer(false);
  };

  const isMobile = () => {
    if (typeof navigator === 'undefined') return false;
    return /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
  };

  return (
    <div className="gallery-page page-transition">
      <section className="gallery-hero">
        <div className="container">
          <h1 className="gallery-title">{t('gallery.title')}</h1>
          <p className="gallery-subtitle">{t('gallery.subtitle')}</p>
        </div>
      </section>

      <section className="gallery-content">
        <div className="container">
          <div className="gallery-filters">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="artworks-grid">
            {filteredArtworks.map(artwork => (
              <div key={artwork.id} className="artwork-card" onClick={() => openModal(artwork)}>
                <div className="artwork-image">
                  <div className="artwork-placeholder">
                    {artwork.category === 'video' && artwork.thumbnail ? (
                      <img
                        src={artwork.thumbnail}
                        alt={artwork.title + ' thumbnail'}
                        width="100%"
                        height="160"
                        style={{ objectFit: 'cover', borderRadius: '8px', background: '#000' }}
                      />
                    ) : artwork.category === 'video' ? (
                      <video
                        src={process.env.PUBLIC_URL + '/video/' + artwork.videoFile}
                        width="100%"
                        height="160"
                        style={{ objectFit: 'cover', borderRadius: '8px', background: '#000' }}
                        muted
                        playsInline
                        preload="metadata"
                        controls={false}
                        onContextMenu={e => e.preventDefault()}
                        poster=""
                      />
                    ) : artwork.category === 'pdf' && artwork.thumbnail ? (
                      <img
                        src={artwork.thumbnail}
                        alt={artwork.title + ' thumbnail'}
                        width="100%"
                        height="160"
                        style={{ objectFit: 'cover', borderRadius: '8px', background: '#fafafa' }}
                      />
                    ) : artwork.category === 'pdf' ? (
                      <div className="pdf-thumbnail">
                        <span role="img" aria-label="pdf">📄</span>
                      </div>
                    ) : (
                      artwork.image
                    )}
                  </div>
                </div>
                <div className="artwork-info">
                  <h3 className="artwork-title">{artwork.title}</h3>
                  <p className="artwork-description">{artwork.description}</p>
                  <div className="artwork-meta">
                    <span className="artwork-year">{artwork.year}</span>
                    <span className="artwork-medium">{artwork.medium}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredArtworks.length === 0 && (
            <div className="no-artworks">
              <p>{t('gallery.no_artworks')}</p>
            </div>
          )}
        </div>
      </section>

      {selectedArtwork && !showPdfViewer && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-artwork">
              <div className="modal-image">
                <div className="modal-placeholder">
                  {selectedArtwork.category === 'video' && selectedArtwork.videoFile ? (
                    <video
                      src={process.env.PUBLIC_URL + '/video/' + selectedArtwork.videoFile}
                      controls
                      autoPlay
                      width="450"
                      height="260"
                      style={{ borderRadius: '12px', background: '#000' }}
                    />
                  ) : selectedArtwork.category === 'pdf' && selectedArtwork.pdfUrl ? (
                    <div className="pdf-modal-preview">
                      {isMobile() ? (
                        <a
                          href={selectedArtwork.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="download-pdf-btn"
                          style={{ display: 'inline-block', margin: '16px 0', padding: '10px 20px', background: '#f5f5f5', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none' }}
                        >
                          📥 {t('Tải hoặc mở PDF')}
                        </a>
                      ) : (
                        <>
                          <iframe
                            src={selectedArtwork.pdfUrl}
                            width="100%"
                            height="300px"
                            style={{ border: 'none', borderRadius: '12px' }}
                            title={selectedArtwork.title}
                          />
                          <button className="view-full-pdf-btn" onClick={openPdfViewer}>
                            <span>📄</span>
                            <span>View Full PDF</span>
                          </button>
                        </>
                      )}
                    </div>
                  ) : (
                    selectedArtwork.image
                  )}
                </div>
              </div>
              <div className="modal-info">
                <h2 className="modal-title">{selectedArtwork.title}</h2>
                <p className="modal-description">{selectedArtwork.description}</p>
                <div className="modal-meta">
                  <div className="meta-item">
                    <strong>{t('gallery.year')}:</strong> {selectedArtwork.year}
                  </div>
                  <div className="meta-item">
                    <strong>{t('gallery.medium')}:</strong> {selectedArtwork.medium}
                  </div>
                  <div className="meta-item">
                    <strong>{t('gallery.category')}:</strong> {filters.find(f => f.id === selectedArtwork.category)?.label}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showPdfViewer && selectedArtwork && selectedArtwork.pdfUrl && (
        <div className="pdf-viewer-overlay" onClick={closePdfViewer}>
          <div className="pdf-viewer-content" onClick={(e) => e.stopPropagation()}>
            <button className="pdf-viewer-close" onClick={closePdfViewer}>×</button>
            <div className="pdf-viewer-header">
              <h2>{selectedArtwork.title}</h2>
              <div className="pdf-viewer-actions">
                <a 
                  href={selectedArtwork.pdfUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="download-pdf-btn"
                >
                  📥 Download PDF
                </a>
              </div>
            </div>
            <div className="pdf-viewer-body">
              {isMobile() ? (
                <div style={{textAlign: 'center', marginTop: '40px'}}>
                  <a
                    href={selectedArtwork.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-pdf-btn"
                    style={{ display: 'inline-block', margin: '16px 0', padding: '10px 20px', background: '#f5f5f5', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none' }}
                  >
                    📥 {t('Tải hoặc mở PDF')}
                  </a>
                  <p style={{marginTop: '12px', color: '#888'}}>{t('PDF không thể xem trực tiếp trên thiết bị di động. Vui lòng tải về hoặc mở bằng ứng dụng PDF.')}</p>
                </div>
              ) : (
                <iframe
                  src={selectedArtwork.pdfUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 'none' }}
                  title={selectedArtwork.title}
                  allow="fullscreen"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
