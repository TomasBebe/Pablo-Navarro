export default function PabloNavarroLanding() {
  const songs = [
    {
      title: 'Corazón Partío',
      image: '/Foto 1.jpeg',
      lyric:
        '¿Y quién me va a entregar sus emociones? ¿Quién me va a pedir que nunca le abandone? ¿Quién me va a curar el corazón partío?',
    },
    {
      title: 'Un Osito de Peluche de Taiwán',
      image: '/Foto 2.jpeg',
      lyric:
        'De repente no puedo respirar, necesito un poco de libertad... Un osito de peluche de Taiwán.',
    },
    {
      title: 'Truco Barato',
      image: '/Foto 3.jpeg',
      lyric:
        'Te fuiste sin ruido, sin voz, como un truco barato de amor.',
    },
    {
      title: 'Tarde',
      image: '/Foto 4.jpeg',
      lyric:
        'Siempre llego tarde, tarde cuando ya pasó lo mejor.',
    },
    {
      title: 'Tu Risa Tierna en Inglés',
      image: '/Foto 5.jpeg',
      lyric:
        'Tu risa tierna en inglés me enloquecía sin razón.',
    },
    {
      title: 'Bendita Perdición',
      image: '/Foto 6.jpeg',
      lyric:
        'Si amar es perderse entero, bendita sea la perdición.',
    },
  ]

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&family=Cormorant+Garamond:wght@300;400;500&display=swap');

        body {
          background: black;
        }

        .title-font {
          font-family: 'Oswald', sans-serif;
          letter-spacing: 0.08em;
        }

        .serif-font {
          font-family: 'Cormorant Garamond', serif;
        }

        .film-grain::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 3px 3px;
          opacity: 0.15;
          pointer-events: none;
        }
      `}</style>

      <section
        className="relative h-screen flex items-end bg-cover bg-center film-grain"
        style={{ backgroundImage: "url('/Foto 1.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 p-8 md:p-16 max-w-5xl">
          <h1 className="title-font text-6xl md:text-9xl leading-[0.9] uppercase text-white drop-shadow-2xl">
            Pablo
            <br />
            Navarro
            <br />
            Acústico
          </h1>

          <div className="mt-8 space-y-2 text-zinc-300 title-font text-sm md:text-lg tracking-[0.25em] uppercase">
            <p>22 de Mayo · 20:30 HS</p>
            <p>Baum Lomas</p>
          </div>

          <div className="mt-10 flex flex-col md:flex-row gap-6 md:gap-12 text-zinc-400">
            <a
              href="https://instagram.com/pabloezenav"
              target="_blank"
              className="hover:text-red-400 transition duration-300"
            >
              <p className="title-font uppercase tracking-[0.25em] text-xs">
                Instagram
              </p>
              <p className="serif-font text-2xl">@pabloezenav</p>
            </a>

            <div>
              <p className="title-font uppercase tracking-[0.25em] text-xs">
                Alias
              </p>
              <p className="serif-font text-2xl">
                pabloezenavarro.mp
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto mb-20">
          <p className="title-font text-red-500 tracking-[0.3em] uppercase text-sm mb-4">
            Canciones
          </p>

          <h2 className="serif-font text-4xl md:text-6xl text-zinc-100 max-w-3xl leading-tight">
            Seis momentos. Seis heridas. Seis canciones.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {songs.map((song, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[2rem] bg-zinc-950 border border-red-950/40"
            >
              <div className="relative h-[650px] overflow-hidden">
                <img
                  src={song.image}
                  alt={song.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <p className="title-font text-red-500 tracking-[0.25em] uppercase text-xs mb-3">
                    Canción {index + 1}
                  </p>

                  <h3 className="title-font text-4xl md:text-5xl uppercase leading-none mb-6">
                    {song.title}
                  </h3>

                  <p className="serif-font text-2xl md:text-3xl text-zinc-200 leading-relaxed max-w-xl opacity-90">
                    “{song.lyric}”
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-zinc-900 py-16 px-6 md:px-16 text-center bg-black">
        <h3 className="title-font text-4xl md:text-6xl uppercase mb-4 text-white">
          Pablo Navarro
        </h3>

        
        <p className="serif-font text-zinc-400 text-xl mb-8">
          canciones para quedarse un rato más
        </p>

        <a
          href="https://instagram.com/pabloezenav"
          target="_blank"
          className="inline-block border border-red-700 text-red-400 px-8 py-4 rounded-full title-font tracking-[0.2em] uppercase text-sm hover:bg-red-700 hover:text-white transition duration-300"
        >
          @pabloezenav
        </a>
      </footer>
    </div>
  )
}
