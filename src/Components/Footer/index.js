import React, { Component } from 'react';
import Konektey from '../../Images/konektey.png';
import Like from '../../Images/like.png';
import ModalKonektey from '../../Components/ModalKonektey'

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <h1 class="h1Footer">Le site d'Officium est en cours de développement ...</h1>
        <p class="pFooter">En attendant vous pouvez nous suivre sur nos réseau sociaux ...</p>
        <div class="divReseau">
        <div className="Icon"><a href="https://www.facebook.com/officiumconseil/"><i class="fab fa-facebook"></i></a> </div>  
        <div className="Icon"><a href="https://www.linkedin.com/company/infinity-rh/"><i class="fab fa-linkedin-in"></i></a></div>
        </div>
       <div class="divMade"><h2 class="Made">Made with <img src={Like} alt="Like" class="Like"/> by <img src={Konektey} alt="Konektey" data-toggle="modal" class="Konektey animated infinite pulse" data-target={"#exampleModalKonektey"}/></h2></div>
       <ModalKonektey /> 
      </div>
    )
  }
}
