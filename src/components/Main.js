import React, { Component } from 'react';
import Card from './Card';
import './Main.css';
import profilePhoto from '../messi.jpg';

class Main extends Component {

  // The Model
  artists = {
    artistOne: {
      trackNr: "01",
      artist: "Klezmer Karaoke Kit",
      trackName: "Uptap",
      lenght: "02:48",
      credits: "Pablo Elimbaum Guitarras y Producción",
      review: "Noticia y comentario, generalmente de corta extensión, que se hace sobre una obra literaria, de arte o científica y se publica en un periódico o en una revista."
    },
    artistTwo: {
      name: "Checho ",
      song: "Yum Yum",
      credits: "palmas, pals fsk, bombo, fsafd"
    },
    artistThree: {
      name: "Andres Mantello",
      song: "Cuando pasa el amor",
      credits: "guitarra, pals fsk, bombo, fsafd"
    },
    artistFour: {
      name: "Checho ",
      song: "Yum Yum",
      credits: "palmas, pals fsk, bombo, fsafd"
    },
    artistFive: {
      name: "Andres Mantello",
      song: "Cuando pasa el amor",
      credits: "guitarra, pals fsk, bombo, fsafd"
    },
    artistSix: {
      name: "Checho ",
      song: "Yum Yum",
      credits: "palmas, pals fsk, bombo, fsafd"
    },
    artistSeven: {
      name: "Andres Mantello",
      song: "Cuando pasa el amor",
      credits: "guitarra, pals fsk, bombo, fsafd"
    },
    artistEight: {
      name: "Checho ",
      song: "Yum Yum",
      credits: "palmas, pals fsk, bombo, fsafd"
    }
  }
  
  render() {
    return (
      <div className="Main_Container">

        <h2>Tracks Credits</h2>
        <h3>Músicos</h3>
        {/* Index */}
        <div className="Musicians_List_Container">
          
          <div className="Musicians_List_Row">
            <ul>
              <li>Klezmer Karaoke Kit</li>
              <li>Blunke</li>
              <li>EGBA</li>
              <li>Dj Cutx</li>
              <li>Gina Valenti</li>
              <li>Charlie Egg</li>
              <li>Irina Cagnin</li>
              <li>Lalo And-Rex</li>
              <li>Alpha Centauri</li>
              <li>Lxs Peces</li>
              <li>Luko</li>
              <li>Audiodélica</li>
            </ul>
          </div>

          <div className="Musicians_List_Row">
            <ul>
              <li>Checho</li>
              <li>Mariano Cambiaso</li>
              <li>Antena y Juani Favre</li>
              <li>P8 y NMR</li>
              <li>Martim Arce</li>
              <li>Martín Arias</li>
              <li>MXWK</li>
              <li>Oscar Favre</li>
              <li>Rodrigo Jávega</li>
              <li>Andrés Mantello</li>
              <li>Aníbal Perez</li>
              <li>Fer Mariño</li>
            </ul>
          </div>


        </div>

        {/* trackNr: "01",
      artist: "Klezmer Karaoke Kit",
      trackName: "Uptap",
      lenght: "02:48",
      credits: "Pablo Elimbaum Guitarras y Producción",
      review: "Noticia y comentario, generalmente de corta extensión, que se hace sobre una obra literaria, de arte o científica y se publica en un periódico o en una revista." */}


        {/* Cards */}
        <Card trackNr={this.artists.artistOne.trackNr}
              artist={this.artists.artistOne.artist}
              trackName={this.artists.artistOne.trackName}
              lenght={this.artists.artistOne.lenght}
              credits={this.artists.artistOne.credits}
              review={this.artists.artistOne.review}      
        />
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

        <iframe className="bancamp" 
                src="https://bandcamp.com/EmbeddedPlayer/album=564362740/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless><a href="http://planetax.bandcamp.com/album/px-100">PX 100 by Planeta X</a>
        </iframe>

      </div>
    );
  }
}

export default Main;