"use client"

import { useState } from 'react'

export default function PabloNavarroLanding() {
  const [activeSong, setActiveSong] = useState(null)

  const spotifyUrl = 'https://open.spotify.com/artist/3UcC7SDy93ZMm2GqUfx1bq'

  const songs = [
    {
      title: 'Corazón Partío',
      image: '/foto1.jpeg',
      lyric:
        'Ya lo ves, que no hay dos sin tres Que la vida va y viene y que no se detiene Y, qué sé yo Pero miénteme, aunque sea dime que algo queda entre nosotros dos Que en tu habitación nunca sale el sol Ni existe el tiempo ni el dolor Llévame si quieres a perder A ningún destino, sin ningún por qué Ya lo sé, que corazón que no ve Es corazón que no siente O corazón que te miente amor Pero, sabes que en lo más profundo de mi alma Sigue aquel dolor por creer en ti ¿Qué fue de la ilusión y de lo bello que es vivir? Para qué me curaste cuando estaba herido Si hoy me dejas de nuevo el corazón partió Coro ¿Y quién me va a entregar sus emociones? ¿Quién me va a pedir que nunca le abandone? ¿Quién me tapará esta noche si hace frío? ¿Quién me va a curar el corazón partió? ¿Quién llenará de primaveras este enero Y bajará la luna para que juguemos? Dime, si tú te vas, dime cariño mío ¿Quién me va a curar el corazón partió? Quién me va a curar Dar solamente aquello que te sobra Nunca fue compartir, sino dar limosna, amor Si no lo sabes tú, te lo digo yo Después de la tormenta siempre llega la calma Pero, sé que después de ti Después de ti no hay nada Para qué me curaste cuando estaba herido Si hoy me dejas de nuevo con el corazón partió ',
    },
    {
      title: 'Un Osito de Peluche de Taiwán',
      image: '/foto2.jpeg',
      lyric:
        'De repente no puedo respirar, necesito un poco de libertad... Un osito de peluche de Taiwán.',
    },
    {
      title: 'Truco Barato',
      image: '/foto3.jpeg',
      lyric:
        'Te fuiste sin ruido, sin voz, como un truco barato de amor.',
    },
    {
      title: 'Tarde',
      image: '/foto4.jpeg',
      lyric:
        'Siempre llego tarde, tarde cuando ya pasó lo mejor.',
    },
    {
      title: 'Tu Risa Tierna en Inglés',
      image: '/foto5.jpeg',
      lyric:
        'Tu risa tierna en inglés me enloquecía sin razón.',
    },
    {
      title: 'Bendita Perdición',
      image: '/foto6.jpeg',
      lyric:
        'Si amar es perderse entero, bendita sea la perdición.',
    },
  ]

  const heroStyle = {
    backgroundImage: "url('/foto1.jpeg')",
  }

  return (
    <div style={styles.page}>
      <style>{globalStyles}</style>

      <section style={{ ...styles.hero, ...heroStyle }}>
        <div style={styles.heroOverlay} />

        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Pablo
            <br />
            Navarro
            <br />
            Acústico
          </h1>

          <div style={styles.heroMeta}>
            <p>22 de Mayo · 20:30 HS</p>
            <p>Baum Lomas</p>
          </div>

          <div style={styles.heroLinks}>
            <a
              href="https://instagram.com/pabloezenav"
              target="_blank"
              rel="noreferrer"
              style={styles.linkBlock}
            >
              <span style={styles.label}>Instagram</span>
              <span style={styles.value}>@pabloezenav</span>
            </a>

            <a
              href={spotifyUrl}
              target="_blank"
              rel="noreferrer"
              style={styles.linkBlock}
            >
              <span style={styles.label}>Spotify</span>
              <span style={styles.value}>Escuchar</span>
            </a>

            <div style={styles.linkBlock}>
              <span style={styles.label}>Alias</span>
              <span style={styles.value}>pabloezenavarro.mp</span>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.gallerySection}>
        <div style={styles.sectionIntro}>
          <p style={styles.kicker}>Canciones</p>
          <h2 style={styles.sectionTitle}>
            Seis momentos. Seis heridas. Seis canciones.
          </h2>
        </div>

        <div style={styles.grid}>
          {songs.map((song, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveSong(song)}
              style={{ ...styles.card, padding: 0, border: 'none', cursor: 'pointer' }}
            >
              <div style={styles.imageWrap}>
                <img src={song.image} alt={song.title} style={styles.image} />
                <div style={styles.cardOverlay} />
                <div style={styles.cardContent}>
                  <p style={styles.cardKicker}>Canción {index + 1}</p>
                  <h3 style={styles.cardTitle}>{song.title}</h3>
                  <p style={styles.cardHint}>Click para ver la letra completa</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <footer style={styles.footer}>
        <h3 style={styles.footerTitle}>Pablo Navarro</h3>
        <p style={styles.footerText}>canciones para quedarse un rato más</p>
        <a
          href="https://instagram.com/pabloezenav"
          target="_blank"
          rel="noreferrer"
          style={styles.footerButton}
        >
          @pabloezenav
        </a>
      </footer>

      {activeSong && (
        <div style={styles.modalBackdrop} onClick={() => setActiveSong(null)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActiveSong(null)}
              style={styles.closeButton}
              aria-label="Cerrar"
            >
              ×
            </button>

            <img src={activeSong.image} alt={activeSong.title} style={styles.modalImage} />
            <p style={styles.modalKicker}>Canción completa</p>
            <h3 style={styles.modalTitle}>{activeSong.title}</h3>
            <p style={styles.modalLyric}>{activeSong.lyric}</p>
          </div>
        </div>
      )}
    </div>
  )
}

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&family=Cormorant+Garamond:wght@300;400;500&display=swap');

  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    background: #000;
  }

  body {
    font-family: 'Cormorant Garamond', serif;
    color: #f3f0ea;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

const styles = {
  page: {
    minHeight: '100vh',
    background: 'linear-gradient(180deg, #050505 0%, #080808 100%)',
    overflowX: 'hidden',
  },
  hero: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'flex-end',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background:
      'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.58) 55%, rgba(0,0,0,0.82) 100%)',
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    padding: 'clamp(24px, 5vw, 64px)',
    maxWidth: '960px',
  },
  heroTitle: {
    margin: 0,
    fontFamily: 'Oswald, sans-serif',
    fontSize: 'clamp(4rem, 11vw, 8.5rem)',
    lineHeight: 0.88,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: '#f4efe8',
    textShadow: '0 8px 24px rgba(0,0,0,0.45)',
  },
  heroMeta: {
    marginTop: '28px',
    display: 'grid',
    gap: '6px',
    fontFamily: 'Oswald, sans-serif',
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    fontSize: 'clamp(0.85rem, 1.8vw, 1.05rem)',
    color: '#dbd1c7',
  },
  heroLinks: {
    marginTop: '34px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '18px 28px',
  },
  linkBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    minWidth: '220px',
    color: '#c9bfb4',
  },
  label: {
    fontFamily: 'Oswald, sans-serif',
    fontSize: '0.78rem',
    letterSpacing: '0.24em',
    textTransform: 'uppercase',
    color: '#d3564a',
  },
  value: {
    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)',
    lineHeight: 1,
  },
  gallerySection: {
    padding: 'clamp(26px, 5vw, 70px) clamp(18px, 4vw, 64px) 32px',
  },
  sectionIntro: {
    maxWidth: '980px',
    margin: '0 auto 34px',
  },
  kicker: {
    margin: '0 0 10px',
    fontFamily: 'Oswald, sans-serif',
    color: '#d3564a',
    textTransform: 'uppercase',
    letterSpacing: '0.28em',
    fontSize: '0.8rem',
  },
  sectionTitle: {
    margin: 0,
    fontSize: 'clamp(2.4rem, 5vw, 4.8rem)',
    lineHeight: 1.05,
    fontWeight: 400,
    color: '#f6f1eb',
    maxWidth: '14ch',
  },
  grid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '22px',
  },
  card: {
    borderRadius: '28px',
    overflow: 'hidden',
    border: '1px solid rgba(211, 86, 74, 0.22)',
    background: '#0a0909',
    boxShadow: '0 24px 60px rgba(0,0,0,0.28)',
    width: '100%',
    textAlign: 'left',
  },
  imageWrap: {
    position: 'relative',
    minHeight: '620px',
    height: '100%',
  },
  image: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  cardOverlay: {
    position: 'absolute',
    inset: 0,
    background:
      'linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.18) 35%, rgba(0,0,0,0.92) 100%)',
  },
  cardContent: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: '24px 24px 28px',
  },
  cardKicker: {
    margin: '0 0 12px',
    fontFamily: 'Oswald, sans-serif',
    textTransform: 'uppercase',
    letterSpacing: '0.22em',
    fontSize: '0.76rem',
    color: '#d3564a',
  },
  cardTitle: {
    margin: '0 0 10px',
    fontFamily: 'Oswald, sans-serif',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    fontSize: 'clamp(2rem, 3vw, 3.2rem)',
    lineHeight: 0.95,
    color: '#f4efe8',
  },
  cardHint: {
    margin: 0,
    fontSize: '1.05rem',
    color: '#c8b9ab',
  },
  footer: {
    borderTop: '1px solid rgba(255,255,255,0.06)',
    padding: '54px 18px 68px',
    textAlign: 'center',
    background: '#050505',
  },
  footerTitle: {
    margin: 0,
    fontFamily: 'Oswald, sans-serif',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    fontSize: 'clamp(2.4rem, 5vw, 4.6rem)',
    color: '#f4efe8',
  },
  footerText: {
    margin: '12px 0 28px',
    fontSize: 'clamp(1.3rem, 2vw, 1.8rem)',
    color: '#b9aca0',
  },
  footerButton: {
    display: 'inline-block',
    padding: '14px 28px',
    borderRadius: '999px',
    border: '1px solid rgba(211, 86, 74, 0.7)',
    color: '#e6b8b0',
    fontFamily: 'Oswald, sans-serif',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    fontSize: '0.82rem',
    background: 'rgba(211, 86, 74, 0.08)',
  },
  modalBackdrop: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.78)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    zIndex: 50,
  },
  modal: {
    position: 'relative',
    width: 'min(860px, 100%)',
    maxHeight: '90vh',
    overflowY: 'auto',
    borderRadius: '28px',
    background: 'linear-gradient(180deg, #111 0%, #080808 100%)',
    border: '1px solid rgba(211, 86, 74, 0.25)',
    boxShadow: '0 30px 100px rgba(0,0,0,0.55)',
    padding: '20px 20px 28px',
  },
  closeButton: {
    position: 'absolute',
    top: '14px',
    right: '16px',
    width: '42px',
    height: '42px',
    borderRadius: '999px',
    border: '1px solid rgba(255,255,255,0.14)',
    background: 'rgba(255,255,255,0.04)',
    color: '#fff',
    fontSize: '28px',
    lineHeight: 1,
    cursor: 'pointer',
  },
  modalImage: {
    width: '100%',
    height: '360px',
    objectFit: 'cover',
    borderRadius: '22px',
    marginBottom: '18px',
    display: 'block',
  },
  modalKicker: {
    margin: '0 0 10px',
    fontFamily: 'Oswald, sans-serif',
    textTransform: 'uppercase',
    letterSpacing: '0.22em',
    fontSize: '0.78rem',
    color: '#d3564a',
  },
  modalTitle: {
    margin: '0 0 16px',
    fontFamily: 'Oswald, sans-serif',
    textTransform: 'uppercase',
    fontSize: 'clamp(2rem, 4vw, 3.6rem)',
    lineHeight: 0.95,
    color: '#f4efe8',
  },
  modalLyric: {
    margin: 0,
    fontSize: 'clamp(1.7rem, 2.7vw, 2.6rem)',
    lineHeight: 1.08,
    color: '#e7ddd2',
    whiteSpace: 'pre-wrap',
    maxHeight: '42vh',
    overflowY: 'auto',
    paddingRight: '8px',
  },
}

