import React, { Component } from 'react';
import './Header.css';
import pxLogo from '../xsola.png'; 
import TextyAnim from 'rc-texty';

class Header extends Component {
  render() {
    return (
      <div className="Header_Container">
        <img className="Header_Logo_PX"
             src={pxLogo} 
             alt="Logo" />

        <h3 className="Header_PXDiscos">Planeta X Discos presenta</h3>
 
        <h1 className="Header_Title">PXVA 2020</h1>
        <TextyAnim className="Header_Text">Ciento veinte ediciones alcanza Planeta X Discos con este nuevo compilado PXVA 2020. Una idea que nació en medio del aislamiento que provocó la pandemia por el Covid-19. El tiempo libre y las ganas de volver a emprender un nuevo proyecto juntxs jugaron a favor a la hora de plasmar este nuevo álbum, del cual participaron casi la totalidad de quienes son o formaron parte del colectivo editorial. Con la premisa inicial de realizar un track o canción “experimental” con las herramientas disponibles en el hogar, todxs y cada unx de lxs participantes fueron dándole forma a veinticuatro tracks que se desarrollan más allá de cualquier tendencia impuesta.  
        </TextyAnim>
      </div>
    );
  }
}

export default Header;