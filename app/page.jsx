"use client"

 
import { useState } from 'react'

export default function PabloNavarroLanding() {
  const [activeSong, setActiveSong] = useState(null)

  const spotifyUrl = 'https://open.spotify.com/artist/3UcC7SDy93ZMm2GqUfx1bq'

  const songs = [
    {
      title: 'Corazón Partío',
      image: '/foto9.jpeg',
      lyric:
        `Ya lo ves, que no hay dos sin tres
Que la vida va y viene y que no se detiene
Y, qué sé yo
Pero miénteme, aunque sea dime que algo queda entre nosotros dos
Que en tu habitación nunca sale el sol
Ni existe el tiempo ni el dolor
Llévame si quieres a perder
A ningún destino, sin ningún por qué
  
Ya lo sé, que corazón que no ve
Es corazón que no siente
O corazón que te miente amor
Pero, sabes que en lo más profundo de mi alma
Sigue aquel dolor por creer en ti
¿Qué fue de la ilusión y de lo bello que es vivir?
Para qué me curaste cuando estaba herido
Si hoy me dejas de nuevo el corazón partió
  
¿Y quién me va a entregar sus emociones?
¿Quién me va a pedir que nunca le abandone?
¿Quién me tapará esta noche si hace frío?
¿Quién me va a curar el corazón partió?
¿Quién llenará de primaveras este enero
Y bajará la luna para que juguemos?
Dime, si tú te vas, dime cariño mío
¿Quién me va a curar el corazón partió?
Quién me va a curar
  
Dar solamente aquello que te sobra
Nunca fue compartir, sino dar limosna, amor
Si no lo sabes tú, te lo digo yo
Después de la tormenta siempre llega la calma
Pero, sé que después de ti
Después de ti no hay nada
Para qué me curaste cuando estaba herido
Si hoy me dejas de nuevo con el corazón partió.`,
  },
    {
      title: 'Un Osito de Peluche de Taiwán',
      image: '/foto2.jpeg',
      lyric:
        `De repente no puedo respirar
Necesito un poco de libertad
Que te alejes por un tiempo de mi lado
Que me dejes en paz

Siempre fue mi manera de ser
No me trates de comprender
No hay nada que se pueda hacer
Soy un poco paranoico, lo siento

Al ratito ya te empiezo a extrañar
Me preocupa que te pueda perder
Necesito que te acerques a mí
Para sentir el calor de tu cuerpo

Un osito de peluche de Taiwán
Una cascara de nuez en el mar
Suavecito como alfombra de piel
Delicioso como el dulce de leche.`,
  },
    {
      title: 'Tu Misterioso Alguien',
      image: '/foto7.jpeg',
      lyric:
        `Hay alguien en tu vida que está transformándote
Hay alguien que ha cambiado en ti la forma en que te ves
Hay alguien nuevo que se apareció y que tu corazón robó
Ya lo sé, solo dime quién es

¿Quién es tu nuevo amor, tu nueva ocupación, tu misterioso alguien?
¿A quién has ocultado de mí todo el tiempo para no matarme?
¿Quién es tu seductor, tu rey y tu peón?
¿Quién ocupó el lugar que siempre ocupé yo?
Tu misterioso alguien me robó

Ahora te despiertas y preparas su café
Desde que me he enterado, yo no puedo ni comer
Cariño, no soporto estar sin ti, pero parece que tú sí
¿Quién es él? Dime y lo mataré.`,
   },
    {
  title: 'Truco Barato',
  image: '/foto3.jpeg',
  lyric: `Nos conocimos poco y fue un montón
miradas largas, noches sin reloj
yo te creí incluso cuando dudé
vos ya sabías cómo desaparecer

Después el eco azul del celular
tu nombre fijo, nada que explicar
yo repasando qué hice mal
vos dominando el arte de no estar

Te fuiste sin ruido, sin voz
como un truco barato de amor
no dolió que no me quieras
odio tu manera de decir adiós

Pantalla en negro, corazón
yo creyendo y vos no
no fue el amor lo que se apagó
fue tu forma de decir que no

Te fuiste sin ruido, sin voz
como un truco barato de amor
no dolió que no me quieras
odio tu manera de decir adiós

No sé si fue mi inocencia
o tu talento por la mentira
Pero no se juega así
con quien se anima a creer

Te fuiste sin ruido, sin voz
como un truco barato de amor
no dolió que no me quieras
odio tu manera de decir adiós`,
},
    {
      title: 'Tarde',
      image: '/foto4.jpeg',
      lyric:
        `El día me queda grande en los hombros
se me cae el tiempo al caminar
los relojes me miran de costado
como sabiendo que no voy a llegar

Las veredas cierran antes de tiempo
las luces ensayan su final
yo siempre entrando por la puerta
cuando el mundo aprende a cerrar

Y siempre llego tarde, tarde cuando ya pasó lo mejor
tarde como llegan los trenes que no esperan al corazón
Siempre llego tarde, tarde pero temprano al error
si me esperás cinco minutos
llego... pero llego con dolor

Aplaudo desde afuera del ruido
la canción ya se fue a dormir
en oficinas que huelen a lunes
mi nombre aprende a fingir

A vos te encontré en otra estación
con el invierno ya instalado
yo traía besos vencidos
y vos el amor empaquetado

Y siempre llego tarde, tarde cuando ya pasó lo mejor
tarde como llegan los trenes que no esperan al corazón
Siempre llego tarde, tarde pero temprano al error
si me esperás cinco minutos
llego... pero llego con dolor

Si un día me ves llegar temprano
no confíes en mi puntualidad
seguro me perdí en el intento
de no llegar tarde a amar`,
    },
    {
      title: 'Tu Risa Tierna en Inglés',
      image: '/foto5.jpeg',
      lyric:
        `La noche se terminó
caminaba dando vueltas
por esa esquina de amor
donde aprendimos a hablar
otro idioma, en otro lugar

La ciudad nos vio pasar
sin saber lo que escondía
éramos tiempo prestado
fingiendo que no dolía

Tus manos, tu risa
me acuerdo y muero de amor
fue tan corto, tan nuestro
fue tan real que dolió soltar

Y hoy volvimos a la rutina
Ese lugar que nos domina
miles de kilómetros atrás
tu voz me vuelve a buscar

Tu risa tierna en inglés
me enloquecía sin razón
no entendía las palabras
pero sí la intención

Na Na Na naaa

Fue fugaz, fue inevitable
fue tan lejos y tan acá
si el tiempo nos separó
el amor no se quiso bajar

Y hoy volvimos a la rutina
Ese lugar que nos domina
miles de kilómetros atrás
tu voz me vuelve a buscar

Tu risa tierna en inglés
me enloquecía sin razón
no entendía las palabras
pero sí la intención

Na Na Na naaa`,
},
    {
      title: 'Amor Completo',
      image: '/foto6.jpeg',
      lyric:
        `No, no hay nada mejor
Que probar un primer beso, y más de ti
Veo tantos colores y todos mis sentidos
Estallarán de tanto amarte

¿Cómo se puede sentir
Tantas cosas en tan poco tiempo, y no morir?
Tú puedes hacer un gran nido en mi universo
Puedes hacer lo que quieras conmigo

Yo siento que tú me querí
Como yo te quiero
Acuéstate a mi lado
Esta noche te quiero vivir

Arrúllame, ahógame, aplástame
Desármame, cómeme y fúmame
Amor inquieto
Amor drogado
Amor completo

Oh
Cada vez que yo
Te veo y que te pienso
Siento que florezco

Me duele estar tan lejos
No es fácil que no estés aquí
Y aún así puedes hacer
Lo que quieras de mí

Yo siento que tú me querí
Como yo te quiero
Acuéstate a mi lado
Esta noche te quiero vivir

Arrúllame, ahógame, aplástame
Desármame, cómeme y fúmame
Amor inquieto
Amor drogado
Amor completo
Amor inquieto
Amor completo`,
    },
     {
      title: 'Luces de Neón',
  image: '/foto1.jpeg',
  lyric: `Se apagan las luces de neón
que un día encendí
tu voz en mi mente no quiere salir
promesas que el viento decidió llevar
y yo acá, juntando pedazos de amor

Jugaste con mis miedos y mi debilidad
tus besos sabían a eternidad

Duele, mirar atrás y entender la verdad
Duele, que todo era un disfraz de falsedad
Quizás es temprano para decidir
si quedarme una noche más o huir
Aunque el alma esté rota, me cuesta admitir
que amarte tanto fue dejarme morir

Las horas no pasan
se clavan en mí
tu sombra en la cama no quiere morir
te pienso en las cosas más simples, amor
y todo me duele con más intensidad

Fui ciego creyendo en tu claridad
armando un futuro de pura ilusión
y ahora camino sin dirección
con el corazón hecho desilusión

Duele, mirar atrás y entender la verdad
Duele, que todo era un disfraz de falsedad
Quizás es temprano para decidir
si quedarme una noche más o huir
Aunque el alma esté rota, me cuesta admitir
que amarte tanto fue dejarme morir

Tal vez algún día logre soltar
las huellas que dejaste al marchar
pero hoy me abrazo a este dolor
porque es lo único que queda de vos

Duele, mirar atrás y entender la verdad
Duele, que todo era un disfraz de falsedad
Quizás es temprano para decidir
si quedarme una noche más o huir
Aunque el alma esté rota, me cuesta admitir
que amarte tanto fue dejarme morir`,
},
      {
      title: 'Bendita Perdición',
  image: '/foto8.jpeg',
  lyric: `Te di mis horas malas, mis domingos rotos
mi forma torpe de creer

Te abrí la puerta justo cuando juré no volver a perder
Yo puse el cuerpo, vos el silencio, yo puse fe, vos el tal vez
y en ese juego tan injusto siempre perdía el que quería bien

Me hice valiente para mirarte, aunque sabía el final
porque el miedo nunca fue excusa para dejar de intentar
Amar no fue el error, lo sé, el error fue quedarme de más
confundir migajas con promesas y el frío con paz

Porque el único que sale ileso al amor es aquel que nunca amó
el que nunca puso el alma ni tembló de emoción
Yo prefiero esta herida abierta a vivir con el corazón en prisión
si amar es perderse entero, bendita sea la perdición

Te di mis horas malas, mis domingos rotos, mi forma torpe de querer
Te abrí la puerta justo cuando juré no volver a perder
Yo puse el cuerpo, vos el silencio, yo puse fe, vos el tal vez
y en ese juego tan injusto siempre perdía...

Porque el único que sale ileso al amor es aquel que nunca amó
el que nunca puso el alma ni tembló de emoción
Yo prefiero esta herida abierta a vivir con el corazón en prisión
si amar es perderse entero, bendita sea la perdición

No me arrepiento del miedo
ni del temblor en la voz
hay derrotas que salvan
y amores que enseñan quién sos

Porque el único que sale ileso al amor es aquel que nunca amó
el que nunca puso el alma ni tembló de emoción
Yo prefiero esta herida abierta a vivir con el corazón en prisión
si amar es perderse entero, bendita sea la perdición`,
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
</h1>

<div style={styles.heroMeta}>
  <p>Show acústico</p>
</div>

<div style={styles.heroLinks}>
  <a
    href="https://instagram.com/pabloezenav"
    target="_blank"
    rel="noreferrer"
    style={styles.iconLink}
    aria-label="Instagram"
  >
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#f1e6dc"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ opacity: 0.9 }}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37a4 4 0 1 1-7.75 1.27 4 4 0 0 1 7.75-1.27z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  </a>

  <a
    href="https://open.spotify.com/artist/3UcC7SDy93ZMm2GqUfx1bq"
    target="_blank"
    rel="noreferrer"
    style={styles.iconLink}
    aria-label="Spotify"
  >
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#f1e6dc"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ opacity: 0.9 }}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M8 15c2.5-1 5.5-.8 8 .5"></path>
      <path d="M7 11.5c3-1 6.5-.8 10 1"></path>
      <path d="M7 8.5c4-1.2 8.5-.8 12 1.5"></path>
    </svg>
  </a>

  <div style={styles.linkBlock}>
    <span style={styles.label}>Alias</span>
    <span style={styles.value}>pabloezenavarro.mp</span>
  </div>
</div>

      <section style={styles.gallerySection}>
        <div style={styles.sectionIntro}>
          <p style={styles.kicker}>Canciones</p>
          <h2 style={styles.sectionTitle}>
  Nueve momentos.
  <br />
  Nueve heridas.
  <br />
  Nueve canciones.
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
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;700&family=Cormorant+Garamond:wght@300;400;500&display=swap');
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
 iconLink: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '52px',
  height: '52px',
  borderRadius: '999px',
  border: '1px solid rgba(255,255,255,0.08)',
  background: 'rgba(255,255,255,0.03)',
},
  smallTitle: {
  display: 'block',
  fontSize: '0.38em',
  letterSpacing: '0.25em',
  marginBottom: '8px',
  },
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
  letterSpacing: '0.32em',
  textTransform: 'uppercase',
 fontSize: 'clamp(1.4rem, 2.2vw, 2rem)',
  color: '#d7c9bb',
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
  fontFamily: '"Oswald", sans-serif',
  fontWeight: 300,
  letterSpacing: '0.09em',
  fontSize: 'clamp(1.2rem, 1.9vw, 1.55rem)',
  lineHeight: 1,
  color: '#f1e6dc',
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

