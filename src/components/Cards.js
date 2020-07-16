import React, { Component } from 'react';
import Card from './Card';
import './Cards.css';

class Cards extends Component {

  constructor(props) {
    super(props);
    this.state = { 
                    textArtistOne: this.artists.artistOne.review,
                    textArtistTwo: this.artists.artistTwo.review,
                    textArtistThree: '',
                    textArtistFour: '',
                    textArtistFive: '',
                    textArtistSix: '',
                    textArtistSeven: '',
                    textArtistEight: '',
                    reviewOnOne: true,
                    reviewOnTwo: true,
                };


    this.handleClickOne = this.handleClickOne.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
  }

  // The Model
  artists = {
      artistOne: {
        trackNr: "01",
        artist: "Klezmer Karaoke Kit",
        trackName: "Uptap",
        lenght: "[02:48]",
        credits: "Pablo Elimbaum Guitarras y Producción",
        review: "Noticia y comentario, generalmente de corta extensión, que se hace sobre una obra literaria, de arte o científica y se publica en un periódico o en una revista.",
        bio: "jfsalfjdsalkfjsalkfjsaljfsaljfdñiiiiii",
        artistNet: "https://klezmerkaraokekit.bandcamp.com/releases"
      },
      artistTwo: {
        trackNr: "02",
        artist: "Blunke",
        trackName: "BLKN 09",
        lenght: "[04:07]",
        credits: "Pablo Elimbaum Guitarras y Producción",
        review: "Noticia y comentario, generalmente de corta extensión, que se hace sobre una obra literaria, de arte o científica y se publica en un periódico o en una revista.",
        bio: "otra cosa",
        artistNet: "https://klezmerkaraokekit.bandcamp.com/releases"
      },
      artistThree: {
        trackNr: "03",
        artist: "Ensamble Granular Barrio Azcuénaga",
        trackName: "Cidade vazia",
        lenght: "[06:52]",
        credits: "Pablo Elimbaum Guitarras y Producción",
        review: "Noticia y comentario, generalmente de corta extensión, que se hace sobre una obra literaria, de arte o científica y se publica en un periódico o en una revista.",
        artistNet: "https://klezmerkaraokekit.bandcamp.com/releases"
      },
      artistFour: {
        trackNr: "04",
        artist: "Dj Cutx",
        trackName: "Kinkscut",
        lenght: "[04:41]",
        credits: "Pablo Elimbaum Guitarras y Producción",
        review: "Noticia y comentario, generalmente de corta extensión, que se hace sobre una obra literaria, de arte o científica y se publica en un periódico o en una revista.",
        artistNet: "https://klezmerkaraokekit.bandcamp.com/releases"
      },
      artistFive: {
        trackNr: "05",
        artist: "Gina Valenti",
        trackName: "Oriente",
        lenght: "[02:00]",
        credits: "Pablo Elimbaum Guitarras y Producción",
        review: "Noticia y comentario, generalmente de corta extensión, que se hace sobre una obra literaria, de arte o científica y se publica en un periódico o en una revista.",
        artistNet: "https://ginavalenti.wordpress.com/"
      },
      artistSix: {
        trackNr: "06",
        artist: "Charlie Egg",
        trackName: "Aerosilla",
        lenght: "[04:53]",
        credits: "Pablo Elimbaum Guitarras y Producción",
        review: "Noticia y comentario, generalmente de corta extensión, que se hace sobre una obra literaria, de arte o científica y se publica en un periódico o en una revista.",
        artistNet: "https://charlieegg.bandcamp.com/"
      },
      artistSeven: {
        trackNr: "07",
        artist: "Irina Cagnin",
        trackName: "Respiración cutánea",
        lenght: "[03:13]",
        credits: "Pablo Elimbaum Guitarras y Producción",
        review: "Noticia y comentario, generalmente de corta extensión, que se hace sobre una obra literaria, de arte o científica y se publica en un periódico o en una revista.",
        artistNet: "https://irinayelreloj.bandcamp.com/"
      },
      artistEight: {
        trackNr: "08",
        artist: "Lalo and-Rex",
        trackName: "Archu shuffle",
        lenght: "[02:07]",
        credits: "Pablo Elimbaum Guitarras y Producción",
        review: "Noticia y comentario, generalmente de corta extensión, que se hace sobre una obra literaria, de arte o científica y se publica en un periódico o en una revista.",
        artistNet: "https://klezmerkaraokekit.bandcamp.com/releases"
      },
      artistNine: {
        trackNr: "09",
        artist: "Alpha Centauri",
        trackName: "Arquitect of light",
        lenght: "[01:31]",
        credits: "Pablo Elimbaum Guitarras y Producción",
        review: "Noticia y comentario, generalmente de corta extensión, que se hace sobre una obra literaria, de arte o científica y se publica en un periódico o en una revista.",
        artistNet: "https://alphacentauri1.bandcamp.com/"
      },
      artistTen: {
        trackNr: "10",
        artist: "Lxs Peces",
        trackName: "Quietud",
        lenght: "[07:01]",
        credits: "Pablo Elimbaum Guitarras y Producción",
        review: "Noticia y comentario, generalmente de corta extensión, que se hace sobre una obra literaria, de arte o científica y se publica en un periódico o en una revista.",
        artistNet: "https://klezmerkaraokekit.bandcamp.com/releases"
      },
      artistEleven: {
        trackNr: "11",
        artist: "Luko",
        trackName: "Objeto irregular",
        lenght: "[05:24]",
        credits: "Pablo Elimbaum Guitarras y Producción",
        review: "Noticia y comentario, generalmente de corta extensión, que se hace sobre una obra literaria, de arte o científica y se publica en un periódico o en una revista.",
        artistNet: "https://luko.bandcamp.com/"
      },
      artistTwelve: {
        trackNr: "12",
        artist: "Audiodélica",
        trackName: "Valladares",
        lenght: "[11:16]",
        credits: "Pablo Elimbaum Guitarras y Producción",
        review: "Noticia y comentario, generalmente de corta extensión, que se hace sobre una obra literaria, de arte o científica y se publica en un periódico o en una revista.",
        artistNet: "https://audiodelica.bandcamp.com/track/silent-night"
      },
      artistThirteen: {
        trackNr: "13",
        artist: "Checho",
        trackName: "Yin bom",
        lenght: "[03:39]",
        credits: "Pablo Elimbaum Guitarras y Producción",
        review: "Noticia y comentario, generalmente de corta extensión, que se hace sobre una obra literaria, de arte o científica y se publica en un periódico o en una revista.",
        artistNet: "https://juanmanuelgodoy.bandcamp.com/"
      },
      artistFourteen: {
        trackNr: "14",
        artist: "Mariano Cambiaso",
        trackName: "CTRL",
        lenght: "[08:08]",
        credits: "Pablo Elimbaum Guitarras y Producción",
        review: "Noticia y comentario, generalmente de corta extensión, que se hace sobre una obra literaria, de arte o científica y se publica en un periódico o en una revista.",
        artistNet: "https://marianocambiaso.bandcamp.com/"
      },
      artistFifteen: {
        trackNr: "15",
        artist: "Antena y Juani Favre",
        trackName: "Vapor de ciudad",
        lenght: "[05:49]",
        credits: "Pablo Elimbaum Guitarras y Producción",
        review: "Noticia y comentario, generalmente de corta extensión, que se hace sobre una obra literaria, de arte o científica y se publica en un periódico o en una revista.",
        artistNet: "https://klezmerkaraokekit.bandcamp.com/releases"
      },
      artistSixteen: {
        trackNr: "16",
        artist: "P8 y NMR",
        trackName: "Segundo 11",
        lenght: "[02:39]",
        credits: "Pablo Elimbaum Guitarras y Producción",
        review: "Noticia y comentario, generalmente de corta extensión, que se hace sobre una obra literaria, de arte o científica y se publica en un periódico o en una revista.",
        artistNet: "https://p8nmr.bandcamp.com/"
      },
      artistSeventeen: {
        trackNr: "17",
        artist: "Martím Arce",
        trackName: "Prueba 16 con Arrom",
        lenght: "[03:39]",
        credits: "Pablo Elimbaum Guitarras y Producción",
        review: "Noticia y comentario, generalmente de corta extensión, que se hace sobre una obra literaria, de arte o científica y se publica en un periódico o en una revista.",
        artistNet: "https://martimarce.bandcamp.com/"
      },
      artistEighteen: {
        trackNr: "18",
        artist: "Martín Arias",
        trackName: "Decilo",
        lenght: "[04:19]",
        credits: "Pablo Elimbaum Guitarras y Producción",
        review: "Noticia y comentario, generalmente de corta extensión, que se hace sobre una obra literaria, de arte o científica y se publica en un periódico o en una revista.",
        artistNet: "https://klezmerkaraokekit.bandcamp.com/releases"
      },
      artistNineteen: {
        trackNr: "19",
        artist: "MXWK",
        trackName: "A través de la noche",
        lenght: "[02:53]",
        credits: "Pablo Elimbaum Guitarras y Producción",
        review: "Noticia y comentario, generalmente de corta extensión, que se hace sobre una obra literaria, de arte o científica y se publica en un periódico o en una revista.",
        artistNet: "https://klezmerkaraokekit.bandcamp.com/releases"
      },
      artistTwenty: {
        trackNr: "20",
        artist: "Oscar Favre",
        trackName: "Doble impacto",
        lenght: "[02:58]",
        credits: "Pablo Elimbaum Guitarras y Producción",
        review: "Noticia y comentario, generalmente de corta extensión, que se hace sobre una obra literaria, de arte o científica y se publica en un periódico o en una revista.",
        artistNet: "https://oscarfavre.bandcamp.com/"
      },
      artistTwentyone: {
        trackNr: "21",
        artist: "Rodrigo Jávega",
        trackName: "Impresión, expresión",
        lenght: "[04:37]",
        credits: "Pablo Elimbaum Guitarras y Producción",
        review: "Noticia y comentario, generalmente de corta extensión, que se hace sobre una obra literaria, de arte o científica y se publica en un periódico o en una revista.",
        artistNet: "https://rodrigojavega.bandcamp.com/"
      },
      artistTwentytwo: {
        trackNr: "22",
        artist: "Andrés Mantello",
        trackName: "Abacus 700",
        lenght: "[01:34]",
        credits: "Pablo Elimbaum Guitarras y Producción",
        review: "Noticia y comentario, generalmente de corta extensión, que se hace sobre una obra literaria, de arte o científica y se publica en un periódico o en una revista.",
        artistNet: "https://andresmantello.bandcamp.com/"
      },
      artistTwentythree: {
        trackNr: "23",
        artist: "Anibal Perez",
        trackName: "No soy leyenda",
        lenght: "[03:33]",
        credits: "Pablo Elimbaum Guitarras y Producción",
        review: "Noticia y comentario, generalmente de corta extensión, que se hace sobre una obra literaria, de arte o científica y se publica en un periódico o en una revista.",
        artistNet: "https://klezmerkaraokekit.bandcamp.com/releases"
      },
      artistTwentyfour: {
        trackNr: "24",
        artist: "Fer Mariño",
        trackName: "Que",
        lenght: "[16:27]",
        credits: "Pablo Elimbaum Guitarras y Producción",
        review: "Noticia y comentario, generalmente de corta extensión, que se hace sobre una obra literaria, de arte o científica y se publica en un periódico o en una revista.",
        artistNet: "https://fermarino808.bandcamp.com/releases"
      },
    }


  // Task: Actualizar el estado del texto pasándolo de 
  // 'review' a 'bio' respectivamente
  handleClickOne() {
    if (this.state.reviewOnOne) {
      this.setState(
        {
          textArtistOne: this.artists.artistOne.bio,
          reviewOn: !this.state.reviewOn
        })
    } else {
      this.setState(
        {
          textArtistOne: this.artists.artistOne.review,
          reviewOn: !this.state.reviewOn
        })
    }

  }
 
  handleClickTwo() {
    if (this.state.reviewOnTwo) {
      this.setState(
        {
          textArtistTwo: this.artists.artistTwo.bio,
          reviewOnTwo: !this.state.reviewOnTwo
        })
    } else {
      this.setState(
        {
          textArtistTwo: this.artists.artistTwo.review,
          reviewOnTwo: !this.state.reviewOnTwo
        })
    }

  }
 
  render() {
    return (
      <div className="Main_Container">

        {/* Cards */}
        <Card trackNr={this.artists.artistOne.trackNr}
              artist={this.artists.artistOne.artist}
              trackName={this.artists.artistOne.trackName}
              lenght={this.artists.artistOne.lenght}
              credits={this.artists.artistOne.credits}
              text={this.state.textArtistOne}
              artistNet={this.artists.artistOne.artistNet}
              handleClick={this.handleClickOne}      
        />
        <Card trackNr={this.artists.artistTwo.trackNr}
              artist={this.artists.artistTwo.artist}
              trackName={this.artists.artistTwo.trackName}
              lenght={this.artists.artistTwo.lenght}
              credits={this.artists.artistTwo.credits}
              text={this.state.textArtistTwo}
              artistNet={this.artists.artistTwo.artistNet}
              handleClick={this.handleClickTwo}    
        />
        <Card trackNr={this.artists.artistThree.trackNr}
              artist={this.artists.artistThree.artist}
              trackName={this.artists.artistThree.trackName}
              lenght={this.artists.artistThree.lenght}
              credits={this.artists.artistThree.credits}
              text={this.artists.artistOne.text}
              artistNet={this.artists.artistThree.artistNet}
              handleClick={this.handleClick}        
        />
        <Card trackNr={this.artists.artistFour.trackNr}
              artist={this.artists.artistFour.artist}
              trackName={this.artists.artistFour.trackName}
              lenght={this.artists.artistFour.lenght}
              credits={this.artists.artistFour.credits}
              text={this.artists.artistOne.text}
              artistNet={this.artists.artistFour.artistNet}
              handleClick={this.handleClick}     
        />
        <Card trackNr={this.artists.artistFive.trackNr}
              artist={this.artists.artistFive.artist}
              trackName={this.artists.artistFive.trackName}
              lenght={this.artists.artistFive.lenght}
              credits={this.artists.artistFive.credits}
              text={this.artists.artistOne.text}
              artistNet={this.artists.artistFive.artistNet}
              handleClick={this.handleClick}        
        />
        <Card trackNr={this.artists.artistSix.trackNr}
              artist={this.artists.artistSix.artist}
              trackName={this.artists.artistSix.trackName}
              lenght={this.artists.artistSix.lenght}
              credits={this.artists.artistSix.credits}
              text={this.artists.artistOne.text}
              artistNet={this.artists.artistSix.artistNet}
              handleClick={this.handleClick}          
        />
        <Card trackNr={this.artists.artistSeven.trackNr}
              artist={this.artists.artistSeven.artist}
              trackName={this.artists.artistSeven.trackName}
              lenght={this.artists.artistSeven.lenght}
              credits={this.artists.artistSeven.credits}
              text={this.artists.artistOne.text}
              artistNet={this.artists.artistSeven.artistNet}
              handleClick={this.handleClick}       
        />
        <Card trackNr={this.artists.artistEight.trackNr}
              artist={this.artists.artistEight.artist}
              trackName={this.artists.artistEight.trackName}
              lenght={this.artists.artistEight.lenght}
              credits={this.artists.artistEight.credits}
              text={this.artists.artistOne.text}
              artistNet={this.artists.artistEight.artistNet}
              handleClick={this.handleClick}      
        />
        <Card trackNr={this.artists.artistNine.trackNr}
              artist={this.artists.artistNine.artist}
              trackName={this.artists.artistNine.trackName}
              lenght={this.artists.artistNine.lenght}
              credits={this.artists.artistNine.credits}
              text={this.artists.artistOne.text}
              artistNet={this.artists.artistNine.artistNet}
              handleClick={this.handleClick}        
        />
        <Card trackNr={this.artists.artistTen.trackNr}
              artist={this.artists.artistTen.artist}
              trackName={this.artists.artistTen.trackName}
              lenght={this.artists.artistTen.lenght}
              credits={this.artists.artistTen.credits}
              text={this.artists.artistOne.text}
              artistNet={this.artists.artistTen.artistNet}
              handleClick={this.handleClick}        
        />
        <Card trackNr={this.artists.artistEleven.trackNr}
              artist={this.artists.artistEleven.artist}
              trackName={this.artists.artistEleven.trackName}
              lenght={this.artists.artistEleven.lenght}
              credits={this.artists.artistEleven.credits}
              text={this.artists.artistOne.text}   
              artistNet={this.artists.artistEleven.artistNet}
              handleClick={this.handleClick}     
        />
        <Card trackNr={this.artists.artistTwelve.trackNr}
              artist={this.artists.artistTwelve.artist}
              trackName={this.artists.artistTwelve.trackName}
              lenght={this.artists.artistTwelve.lenght}
              credits={this.artists.artistTwelve.credits}
              text={this.artists.artistOne.text}   
              artistNet={this.artists.artistTwelve.artistNet}
              handleClick={this.handleClick}    
        />
        <Card trackNr={this.artists.artistThirteen.trackNr}
              artist={this.artists.artistThirteen.artist}
              trackName={this.artists.artistThirteen.trackName}
              lenght={this.artists.artistThirteen.lenght}
              credits={this.artists.artistThirteen.credits}
              text={this.artists.artistOne.text}
              artistNet={this.artists.artistThirteen.artistNet}
              handleClick={this.handleClick}     
        />
        <Card trackNr={this.artists.artistFourteen.trackNr}
              artist={this.artists.artistFourteen.artist}
              trackName={this.artists.artistFourteen.trackName}
              lenght={this.artists.artistFourteen.lenght}
              credits={this.artists.artistFourteen.credits}
              text={this.artists.artistOne.text} 
              artistNet={this.artists.artistFourteen.artistNet}
              handleClick={this.handleClick}       
        />
        <Card trackNr={this.artists.artistFifteen.trackNr}
              artist={this.artists.artistFifteen.artist}
              trackName={this.artists.artistFifteen.trackName}
              lenght={this.artists.artistFifteen.lenght}
              credits={this.artists.artistFifteen.credits}
              text={this.artists.artistOne.text}
              artistNet={this.artists.artistFifteen.artistNet}
              handleClick={this.handleClick}         
        />
        <Card trackNr={this.artists.artistSixteen.trackNr}
              artist={this.artists.artistSixteen.artist}
              trackName={this.artists.artistSixteen.trackName}
              lenght={this.artists.artistSixteen.lenght}
              credits={this.artists.artistSixteen.credits}
              text={this.artists.artistOne.text}  
              artistNet={this.artists.artistSixteen.artistNet}
              handleClick={this.handleClick}  
        />
        <Card trackNr={this.artists.artistSeventeen.trackNr}
              artist={this.artists.artistSeventeen.artist}
              trackName={this.artists.artistSeventeen.trackName}
              lenght={this.artists.artistSeventeen.lenght}
              credits={this.artists.artistSeventeen.credits}
              text={this.artists.artistOne.text}
              artistNet={this.artists.artistSeventeen.artistNet}
              handleClick={this.handleClick}         
        />
        <Card trackNr={this.artists.artistEighteen.trackNr}
              artist={this.artists.artistEighteen.artist}
              trackName={this.artists.artistEighteen.trackName}
              lenght={this.artists.artistEighteen.lenght}
              credits={this.artists.artistEighteen.credits}
              text={this.artists.artistOne.text}  
              artistNet={this.artists.artistEighteen.artistNet}
              handleClick={this.handleClick}  
        />
        <Card trackNr={this.artists.artistNineteen.trackNr}
              artist={this.artists.artistNineteen.artist}
              trackName={this.artists.artistNineteen.trackName}
              lenght={this.artists.artistNineteen.lenght}
              credits={this.artists.artistNineteen.credits}
              text={this.artists.artistOne.text}   
              artistNet={this.artists.artistNineteen.artistNet}
              handleClick={this.handleClick}     
        />
        <Card trackNr={this.artists.artistTwenty.trackNr}
              artist={this.artists.artistTwenty.artist}
              trackName={this.artists.artistTwenty.trackName}
              lenght={this.artists.artistTwenty.lenght}
              credits={this.artists.artistTwenty.credits}
              text={this.artists.artistOne.text}
              artistNet={this.artists.artistTwenty.artistNet}
              handleClick={this.handleClick}     
        />
        <Card trackNr={this.artists.artistTwentyone.trackNr}
              artist={this.artists.artistTwentyone.artist}
              trackName={this.artists.artistTwentyone.trackName}
              lenght={this.artists.artistTwentyone.lenght}
              credits={this.artists.artistTwentyone.credits}
              text={this.artists.artistOne.text}   
              artistNet={this.artists.artistTwentyone.artistNet}
              handleClick={this.handleClick}     
        />
        <Card trackNr={this.artists.artistTwentytwo.trackNr}
              artist={this.artists.artistTwentytwo.artist}
              trackName={this.artists.artistTwentytwo.trackName}
              lenght={this.artists.artistTwentytwo.lenght}
              credits={this.artists.artistTwentytwo.credits}
              text={this.artists.artistOne.text}  
              artistNet={this.artists.artistTwentytwo.artistNet}
              handleClick={this.handleClick}       
        />
        <Card trackNr={this.artists.artistTwentythree.trackNr}
              artist={this.artists.artistTwentythree.artist}
              trackName={this.artists.artistTwentythree.trackName}
              lenght={this.artists.artistTwentythree.lenght}
              credits={this.artists.artistTwentythree.credits}
              review={this.artists.artistTwentythree.review}  
              artistNet={this.artists.artistTwentythree.artistNet}
              handleClick={this.handleClick}       
        />
        <Card trackNr={this.artists.artistTwentyfour.trackNr}
              artist={this.artists.artistTwentyfour.artist}
              trackName={this.artists.artistTwentyfour.trackName}
              lenght={this.artists.artistTwentyfour.lenght}
              credits={this.artists.artistTwentyfour.credits}
              text={this.artists.artistOne.text} 
              artistNet={this.artists.artistTwentyfour.artistNet}
              handleClick={this.handleClick}       
        />
        <iframe className="Bandcamp" 
                src="https://bandcamp.com/EmbeddedPlayer/album=564362740/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless><a href="http://planetax.bandcamp.com/album/px-100">PX 100 by Planeta X</a>
        </iframe>

      </div>
    );
  }
}

export default Cards;