import React, { Component } from 'react';
import Card from './Card';
import './Cards.css';

class Cards extends Component {

  // The Model
  artists = {
      artistOne: {
        trackNr: "01",
        artist: "Klezmer Karaoke Kit",
        trackName: "Uptap",
        lenght: "[02:48]",
        credits: "Pablo Elimbaum Guitarras y Producción",
        review: "Obra sonora montada con fragmentos de improvisación ejecutados de forma telemática y un poco telepática.",
        bio: "Ensamble de improvisación formado en 2017. Está integrado por Lucas Mizrahi (químico, docente y explorador sonoro) y Pablo Elinbaum (urbanista profesional e improvisador silvestre).",
        artistNet: "https://klezmerkaraokekit.bandcamp.com/releases"
      },
      artistTwo: {
        trackNr: "02",
        artist: "Blunke",
        trackName: "BLKN 09",
        lenght: "[04:07]",
        review: "La electrónica y el post rock coquetean al ritmo de una danza oscura y profunda",
        bio: "Fernando Blunke es compositor y productor de música ambient y electrónica experimental.",
        artistNet: "https://soundcloud.com/user-448319176?ref=whatsapp"
      },
      artistThree: {
        trackNr: "03",
        artist: "Ensamble Granular Barrio Azcuénaga",
        trackName: "Cidade vazia",
        lenght: "[06:52]",
        credits: "Pablo Elimbaum Guitarras y Producción",
        review: "Teorías de síntesis granular, llevadas al plano del jazz-activismo.",
        bio: "Ensamble Granular Barrio Azcuénaga es un colectivo de musicxs  y entusiastas de la ciencia  recientemente formado en la zona oeste de la ciudad de Rosario. Esta integrados por Alejandra Beresi (Percusión, Producción técnica por ordenador),   Rhodelius Matusalem (Piano Eléctrico), Wanda Brizuela (Contrabajo), Yamal Lasey  (Vientos).",
        artistNet: ""
      },
      artistFour: {
        trackNr: "04",
        artist: "Dj Cutx",
        trackName: "Kinkscut",
        lenght: "[04:41]",
        credits: "Pablo Elimbaum Guitarras y Producción",
        review: "Collage compuesto con recortes de diferentes tracks: cortar, procesar y pegar.",
        bio: "DJ y productora musical, también conocida como Mariu Velazquez.",
        artistNet: "https://m.mixcloud.com/djcutex/"
      },
      artistFive: {
        trackNr: "05",
        artist: "Gina Valenti",
        trackName: "Oriente",
        lenght: "[02:00]",
        credits: "Pablo Elimbaum Guitarras y Producción",
        review: "Un torbellino de notas y emociones nos adentran en el singular y exquisito universo de la genial pianista Gina Valenti.",
        bio: "Gina Valenti es artista y Docente Titular en la Facultad de Humanidades y Artes de la U.N.R. Es Creadora y Directora del 404 Festival Internacional de Arte y Tecnología. Como compositora se ha presentado en Inglaterra, Italia, Suiza, Taiwán, Japón, Rusia, , Suiza, Bélgica, Austria, Estados Unidos y Argentina. Actualmente dirige la Academia de Arte y Tecnología “Ctrl+Z”.",
        artistNet: "https://ginavalenti.com.ar"
      },
      artistSix: {
        trackNr: "06",
        artist: "Charlie Egg",
        trackName: "Aerosilla",
        lenght: "[04:53]",
        credits: "Pablo Elimbaum Guitarras y Producción",
        review: "Aerosilla combina elementos orgánicos y sintéticos en un clima onírico y atemporal. Producido por Egg con la participación en trompeta de Eduardo Vignoli.",
        bio: "Músico y productor, pionero de la música electrónica en la ciudad de Rosario. Fundador de Sinapsis.",
        artistNet: "https://linktr.ee/charlieegg"
      },
      artistSeven: {
        trackNr: "07",
        artist: "Irina Cagnin",
        trackName: "Respiración cutánea",
        lenght: "[03:13]",
        credits: "Pablo Elimbaum Guitarras y Producción",
        review: "Plena expresión de los sentimientos volcados sin filtros. Voz y guitarra acompañada por los artilugios de la tecnología. Grabación y colaboración; Lautaro Vial.",
        bio: "Cantante, trompetista, guitarrista, compositora. Integrante de Irina y el reloj y Eterno Retorno.",
        artistNet: "https://irinayelreloj.bandcamp.com/"
      },
      artistEight: {
        trackNr: "08",
        artist: "Lalo and-Rex",
        trackName: "Archu shuffle",
        lenght: "[02:07]",
        review: "Diálogo de R2-D2 compuesto de guitarras grabadas por Andrés Mantello sobre un ritmo de batería, en ludo de delays",
        bio: "Pseudónimo de Leandro Giandomenico, músico, profesor, percusionista. Integrante de Los Señores, Cromattista y Salaon. También fue baterista de Sumergido y Sinapsis.",
        artistNet: ""
      },
      artistNine: {
        trackNr: "09",
        artist: "Alpha Centauri",
        trackName: "Arquitect of light",
        lenght: "[01:31]",
        review: "'Architec of Light' es una composición de Cristian Leonardo Abaca. La misma fue realizada por el músico en una sesión de improvisación con sintetizadores y fue incluida también en su disco  'Post mortem'",
        bio: "Proyecto musical de Cristian Leonardo Abaca, el cual lleva adelante desde el año 2006 junto a destacados invitados de la escena musical. Rock progresivo, psicodelia y kraut rock son algunos de las influencias que abordan en sus cinco discos editados.",
        artistNet: "https://alphacentauri1.bandcamp.com/"
      },
      artistTen: {
        trackNr: "10",
        artist: "Lxs Peces",
        trackName: "Quietud",
        lenght: "[07:01]",
        review: "Improvisación registrada en vivo pocos días antes del confinamiento. Así como llegó, desapareció. La letra deja entrever lo porvenir.",
        bio: "'Pensar antes de actuar, actuar antes de pensar” es una de las premisas fundamentales de este colectivo de improvisación fundado a fines de los noventas. “Vivimos en nuestro limbo, no tenemos referentes concretos. Devenir sonoro colectivo, cada sensación, sonido, silencio, forma parte de la extraña trama que componemos o nos compone.'",
        artistNet: "https://soundcloud.com/vuelodepeces"
      },
      artistEleven: {
        trackNr: "11",
        artist: "Luko",
        trackName: "Objeto irregular",
        lenght: "[05:24]",
        review: "Profundidad de los graves - De un ritmo oscilante - Afinado desafinado - Sobre un piso de hielo.",
        bio: "Compositor, guitarista y programador. Con dos discos publicados: '1500 kilómetros' y 'Delay parte a'",
        artistNet: "https://luko.bandcamp.com/"
      },
      artistTwelve: {
        trackNr: "12",
        artist: "Audiodélica",
        trackName: "Valladares",
        lenght: "[11:16]",
        credits: "Pablo Elimbaum Guitarras y Producción",
        review: "La vidala santiagueña “Por esos montes” sometida a una  alteración extrema de su velocidad de reproducción.",
        bio: "Proyecto de experimentación e investigación sonora.",
        artistNet: "https://audiodelica.bandcamp.com/track/silent-night"
      },
      artistThirteen: {
        trackNr: "13",
        artist: "Checho",
        trackName: "Yin bom",
        lenght: "[03:39]",
        review: "Ejercicio lúdico musical en el que lo vocal  y lo rítmico se conjugan en pos del baile.",
        bio: "Músico, compositor y productor musical. Integrante de los grupos musicales Matilda y Cursi y melancólico.",
        artistNet: "https://juanmanuelgodoy.bandcamp.com/"
      },
      artistFourteen: {
        trackNr: "14",
        artist: "Mariano Cambiaso",
        trackName: "CTRL",
        lenght: "[08:08]",
        review: "Ctrl es un experimento sonoro-musical compuesto en soledad a partir de samples radiofónicos, sintetizadores virtuales y loops rítmicos.",
        bio: "Músico, compositor y productor musical. Fue integrante del grupo Los Codos y El deshollinador.",
        artistNet: "https://marianocambiaso.bandcamp.com/"
      },
      artistFifteen: {
        trackNr: "15",
        artist: "Antena y Juani Favre",
        trackName: "Vapor de ciudad",
        lenght: "[05:49]",
        review: "Improvisación efímera donde los instrumentos musicales de funden con el sonido ambiente.",
        bio: "Antena es cantante, guitarrista y compositora, además integra el grupo Lxs Peces. Juani Favre es compositor, cantante, multi instrumentista, productor, ingeniero de sonido y docente.",
        artistNet: "https://juanifavre.bandcamp.com/"
      },
      artistSixteen: {
        trackNr: "16",
        artist: "P8 y NMR",
        trackName: "Segundo 11",
        lenght: "[02:39]",
        review: "El concepto del futuro, en las artes, ha sido explotado por completo. Lo usamos en los 60 y 70 y de nuevo en los 80, y finalmente con el techno-rave en los 90. Entonces es difícil ir más allá de las imágenes y sonidos que connotan “futuro” y que fueron distribuidas con tal abundancia durante estos periodos. Lo genuinamente desconocido, NO escuchado y NO visto con anterioridad no será lustroso, magnifico ni brillante o todos esos clichés de 'futurístico' juntos.",
        bio: "P8 (Voz,samplers y sintetizado) y NMR (Voz,samplers y sintetizador)  se auto perciben como performers musicales y son apadrinados por su manager Martím Arce, destacado y polifacético músico experimental de la ciudad de Rosario.",
        artistNet: "https://p8nmr.bandcamp.com/"
      },
      artistSeventeen: {
        trackNr: "17",
        artist: "Martím Arce",
        trackName: "Prueba 16 con Arrom",
        lenght: "[03:39]",
        review: "Grabado íntegramente con I-MPC de iPhone. Podría definirse como 'Música concreta urbana y portable'. Agradecimiento para Guillermo Arrom, sin él no hubiese sido posible hacer este track.",
        bio: "Pseudo algo.",
        artistNet: "https://martimarce.bandcamp.com/"
      },
      artistEighteen: {
        trackNr: "18",
        artist: "Martín Arias",
        trackName: "Decilo",
        lenght: "[04:19]",
        review: "Transcurre en el límite difuso de la canción y paisajes sonoros oníricos.",
        bio: "Integrante de Sumergido, Sinapsis, Oscar Favre y Equus (entre muchas más colaboraciones).",
        artistNet: "https://linktr.ee/martinxarias"
      },
      artistNineteen: {
        trackNr: "19",
        artist: "MXWK",
        trackName: "A través de la noche",
        lenght: "[02:53]",
        credits: "Pablo Elimbaum Guitarras y Producción",
        review: "Casi como el sound-track de una película de ciencia ficción, 'A través de la noche' logra abducirnos por un instante, haciéndonos viajar al espacio exterior.",
        bio: "Un no-músico que en ocasiones, disfruta hacer composiciones sonoras de estilo electrónico. En 2003 edito el álbum 'Ambient'",
        artistNet: ""
      },
      artistTwenty: {
        trackNr: "20",
        artist: "Oscar Favre",
        trackName: "Doble impacto",
        lenght: "[02:58]",
        review: "Composición basada en la unión de dos ritmos (polirítmia), sonidos aleatorios disparados desde un sintetizador DX7 y voces entre el canto y el recitado.",
        bio: "Compositor, cantautor, productor musical. Fue integrante de Sumergido, Pulmón, Maitreya y Hermanxs.",
        artistNet: "https://oscarfavre.bandcamp.com/"
      },
      artistTwentyone: {
        trackNr: "21",
        artist: "Rodrigo Jávega",
        trackName: "Impresión, expresión",
        lenght: "[04:37]",
        review: "Los ruidos rítmicos de unas máquinas de impresión offset prefiguran un viaje musical.",
        bio: "Músico y compositor. Integrante de Cursi y melancólico.",
        artistNet: "https://rodrigojavega.bandcamp.com/"
      },
      artistTwentytwo: {
        trackNr: "22",
        artist: "Andrés Mantello",
        trackName: "Abacus 700",
        lenght: "[01:34]",
        credits: "Pablo Elimbaum Guitarras y Producción",
        review: "Breve pieza instrumental ejecutada íntegramente en violín.",
        bio: "Cantante, violinista y compositor.",
        artistNet: "https://linktr.ee/andresmantello"
      },
      artistTwentythree: {
        trackNr: "23",
        artist: "Aníbal Pérez",
        trackName: "No soy leyenda",
        lenght: "[03:33]",
        review: "Composición espontánea, grabada en Barcelona en febrero de 2019 entre Aníbal Pérez (Groovebox  Roland Mc 505) y Martim Arce (Sintetizadores virtuales). Posproducción realizada en mayo de 2020 por A. Pérez y Maximiliano Vaccarini.",
        bio: "Baterista y percusionista de los grupos San Dimas, Päl Das Shutter y Korben Dallas",
        artistNet: "https://otrokorbendallas.bandcamp.com/"
      },
      artistTwentyfour: {
        trackNr: "24",
        artist: "Fer Mariño",
        trackName: "Que",
        lenght: "[16:27]",
        credits: "Grabaciones y programación Fer Mariño",
        review: "Un track que por su extensión y dinámica opera como un disco dentro del disco. Un viaje onírico donde la oscuridad se vuelve seductora.",
        bio: "DJ y productor musical. Fue integrante del grupo experimental Etaro.",
        artistNet: "https://fermarino808.bandcamp.com/releases"
      },
    }

 
  render() {
    return (
      <div className="Main_Container">

        {/* Cards */}

        {/* 1 - Puma */}
        <Card trackNr={this.artists.artistOne.trackNr}
              artist={this.artists.artistOne.artist}
              trackName={this.artists.artistOne.trackName}
              lenght={this.artists.artistOne.lenght}
              review={this.artists.artistOne.review}
              bio={this.artists.artistOne.bio} 
              artistNet={this.artists.artistOne.artistNet}    
        />

        {/* 2 - Blue */}
        <Card trackNr={this.artists.artistTwo.trackNr}
              artist={this.artists.artistTwo.artist}
              trackName={this.artists.artistTwo.trackName}
              lenght={this.artists.artistTwo.lenght}
              review={this.artists.artistTwo.review}
              bio={this.artists.artistTwo.bio} 
              artistNet={this.artists.artistTwo.artistNet}
        />

        {/* 3 - Bere */}
        <Card trackNr={this.artists.artistThree.trackNr}
              artist={this.artists.artistThree.artist}
              trackName={this.artists.artistThree.trackName}
              lenght={this.artists.artistThree.lenght}
              review={this.artists.artistThree.review}
              bio={this.artists.artistThree.bio} 
              artistNet={this.artists.artistThree.artistNet}      
        />

        {/* 4 - Mariu */}
        <Card trackNr={this.artists.artistFour.trackNr}
              artist={this.artists.artistFour.artist}
              trackName={this.artists.artistFour.trackName}
              lenght={this.artists.artistFour.lenght}
              review={this.artists.artistFour.review}
              bio={this.artists.artistFour.bio} 
              artistNet={this.artists.artistFour.artistNet}  
        />

        {/* 5 - Gina */}
        <Card trackNr={this.artists.artistFive.trackNr}
              artist={this.artists.artistFive.artist}
              trackName={this.artists.artistFive.trackName}
              lenght={this.artists.artistFive.lenght}
              review={this.artists.artistFive.review}
              bio={this.artists.artistFive.bio} 
              artistNet={this.artists.artistFive.artistNet}     
        />

        {/* 6 - Charlie */}
        <Card trackNr={this.artists.artistSix.trackNr}
              artist={this.artists.artistSix.artist}
              trackName={this.artists.artistSix.trackName}
              lenght={this.artists.artistSix.lenght}
              review={this.artists.artistSix.review}
              bio={this.artists.artistSix.bio} 
              artistNet={this.artists.artistSix.artistNet}       
        />

        {/* 7 - Irina */}
        <Card trackNr={this.artists.artistSeven.trackNr}
              artist={this.artists.artistSeven.artist}
              trackName={this.artists.artistSeven.trackName}
              lenght={this.artists.artistSeven.lenght}
              review={this.artists.artistSeven.review}
              bio={this.artists.artistSeven.bio} 
              artistNet={this.artists.artistSeven.artistNet}     
        />

        {/* 8 - Lalo */}
        <Card trackNr={this.artists.artistEight.trackNr}
              artist={this.artists.artistEight.artist}
              trackName={this.artists.artistEight.trackName}
              lenght={this.artists.artistEight.lenght}
              review={this.artists.artistEight.review}
              bio={this.artists.artistEight.bio} 
              artistNet={this.artists.artistEight.artistNet}     
        />

        {/* 9 - CLA */}
        <Card trackNr={this.artists.artistNine.trackNr}
              artist={this.artists.artistNine.artist}
              trackName={this.artists.artistNine.trackName}
              lenght={this.artists.artistNine.lenght}
              review={this.artists.artistNine.review}
              bio={this.artists.artistNine.bio} 
              artistNet={this.artists.artistNine.artistNet} 
        />

        {/* 10. Peces */}
        <Card trackNr={this.artists.artistTen.trackNr}
              artist={this.artists.artistTen.artist}
              trackName={this.artists.artistTen.trackName}
              lenght={this.artists.artistTen.lenght}
              review={this.artists.artistTen.review}
              bio={this.artists.artistTen.bio} 
              artistNet={this.artists.artistTen.artistNet}      
        />

        {/* 11. Luko */}
        <Card trackNr={this.artists.artistEleven.trackNr}
              artist={this.artists.artistEleven.artist}
              trackName={this.artists.artistEleven.trackName}
              lenght={this.artists.artistEleven.lenght}
              review={this.artists.artistEleven.review}
              bio={this.artists.artistEleven.bio} 
              artistNet={this.artists.artistEleven.artistNet}  
        />

        {/* 12 - Tito */}
        <Card trackNr={this.artists.artistTwelve.trackNr}
              artist={this.artists.artistTwelve.artist}
              trackName={this.artists.artistTwelve.trackName}
              lenght={this.artists.artistTwelve.lenght}
              review={this.artists.artistTwelve.review}
              bio={this.artists.artistTwelve.bio}  
              artistNet={this.artists.artistTwelve.artistNet} 
        />

        {/* 13 - Checho */}
        <Card trackNr={this.artists.artistThirteen.trackNr}
              artist={this.artists.artistThirteen.artist}
              trackName={this.artists.artistThirteen.trackName}
              lenght={this.artists.artistThirteen.lenght}
              review={this.artists.artistThirteen.review}
              bio={this.artists.artistThirteen.bio}
              artistNet={this.artists.artistThirteen.artistNet} 
        />

        {/* 14 - Cafrune */}
        <Card trackNr={this.artists.artistFourteen.trackNr}
              artist={this.artists.artistFourteen.artist}
              trackName={this.artists.artistFourteen.trackName}
              lenght={this.artists.artistFourteen.lenght}
              review={this.artists.artistFourteen.review}
              bio={this.artists.artistFourteen.bio}
              artistNet={this.artists.artistFourteen.artistNet}     
        />

        {/* 15 - Antena y Juani */}
        <Card trackNr={this.artists.artistFifteen.trackNr}
              artist={this.artists.artistFifteen.artist}
              trackName={this.artists.artistFifteen.trackName}
              lenght={this.artists.artistFifteen.lenght}
              review={this.artists.artistFifteen.review}
              bio={this.artists.artistFifteen.bio}
              artistNet={this.artists.artistFifteen.artistNet}      
        />

        {/* 16 - P8 NMR */}
        <Card trackNr={this.artists.artistSixteen.trackNr}
              artist={this.artists.artistSixteen.artist}
              trackName={this.artists.artistSixteen.trackName}
              lenght={this.artists.artistSixteen.lenght}
              credits={this.artists.artistSixteen.credits}
              review={this.artists.artistSixteen.review}
              bio={this.artists.artistSixteen.bio}
              artistNet={this.artists.artistSixteen.artistNet}   
        />

        {/* 17 - Arce */}
        <Card trackNr={this.artists.artistSeventeen.trackNr}
              artist={this.artists.artistSeventeen.artist}
              trackName={this.artists.artistSeventeen.trackName}
              lenght={this.artists.artistSeventeen.lenght}
              review={this.artists.artistSeventeen.review}
              bio={this.artists.artistSeventeen.bio}  
              artistNet={this.artists.artistSeventeen.artistNet}        
        />

        {/* 18 - VGT */}
        <Card trackNr={this.artists.artistEighteen.trackNr}
              artist={this.artists.artistEighteen.artist}
              trackName={this.artists.artistEighteen.trackName}
              lenght={this.artists.artistEighteen.lenght}
              credits={this.artists.artistEighteen.credits}
              review={this.artists.artistEighteen.review}
              bio={this.artists.artistEighteen.bio}  
              artistNet={this.artists.artistEighteen.artistNet}   
        />

        {/* 19 - MXWK */}
        <Card trackNr={this.artists.artistNineteen.trackNr}
              artist={this.artists.artistNineteen.artist}
              trackName={this.artists.artistNineteen.trackName}
              lenght={this.artists.artistNineteen.lenght}
              review={this.artists.artistNineteen.review}
              bio={this.artists.artistNineteen.bio}    
              artistNet={this.artists.artistNineteen.artistNet}  
        />

        {/* 20 - Oscar */}
        <Card trackNr={this.artists.artistTwenty.trackNr}
              artist={this.artists.artistTwenty.artist}
              trackName={this.artists.artistTwenty.trackName}
              lenght={this.artists.artistTwenty.lenght}
              credits={this.artists.artistTwenty.credits}
              review={this.artists.artistTwenty.review}
              bio={this.artists.artistTwenty.bio}  
              artistNet={this.artists.artistTwenty.artistNet}
        />

        {/* 21 - Buitre */}
        <Card trackNr={this.artists.artistTwentyone.trackNr}
              artist={this.artists.artistTwentyone.artist}
              trackName={this.artists.artistTwentyone.trackName}
              lenght={this.artists.artistTwentyone.lenght}
              review={this.artists.artistTwentyone.review}
              bio={this.artists.artistTwentyone.bio} 
              artistNet={this.artists.artistTwentyone.artistNet}
        />

        {/* 22 - Mantello */}
        <Card trackNr={this.artists.artistTwentytwo.trackNr}
              artist={this.artists.artistTwentytwo.artist}
              trackName={this.artists.artistTwentytwo.trackName}
              lenght={this.artists.artistTwentytwo.lenght}
              review={this.artists.artistTwentytwo.review}
              bio={this.artists.artistTwentytwo.bio}
              artistNet={this.artists.artistTwentytwo.artistNet}     
        />

        {/* 23 - Tortu */}
        <Card trackNr={this.artists.artistTwentythree.trackNr}
              artist={this.artists.artistTwentythree.artist}
              trackName={this.artists.artistTwentythree.trackName}
              lenght={this.artists.artistTwentythree.lenght}
              review={this.artists.artistTwentythree.review}
              bio={this.artists.artistTwentythree.bio}
              artistNet={this.artists.artistTwentythree.artistNet}  
        />

        {/* 24 - Fer */}
        <Card trackNr={this.artists.artistTwentyfour.trackNr}
              artist={this.artists.artistTwentyfour.artist}
              trackName={this.artists.artistTwentyfour.trackName}
              lenght={this.artists.artistTwentyfour.lenght}
              review={this.artists.artistTwentyfour.review}
              bio={this.artists.artistTwentyfour.bio}
              artistNet={this.artists.artistTwentyfour.artistNet}     
        />
      </div>
    );
  }
}

export default Cards;