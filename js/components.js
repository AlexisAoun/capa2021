class MenuHome extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <ul class="menu">
          <li>
            <a href="index.html"><i class="fa fa-home" aria-hidden="true"></i></a>
          </li>
          <li><a href="html/information.html">Informations</a></li>
          <li><a href="html/videos.html">Vidéos</a></li>
          <li><a href="html/equipe.html">L'équipe</a></li>
          <li><a href="html/vieDouai.html">La vie à Douai</a></li>
          <li><a href="html/associations.html">Associations</a></li>
          <li><a href="html/contactezNous">Contactez-nous</a></li>
        </ul>
    `;
  }
}

class MenuPage extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <ul class="menu">
          <li>
            <a href="../index.html"><i class="fa fa-home" aria-hidden="true"></i></a>
          </li>
          <li><a href="information.html">Informations</a></li>
          <li><a href="videos.html">Vidéos</a></li>
          <li><a href="equipe.html">L'équipe</a></li>
          <li><a href="vieDouai.html">La vie à Douai</a></li>
          <li><a href="associations.html">Associations</a></li>
          <li><a href="contactezNous.html">Contactez-nous</a></li>
        </ul>
    `;
  }
}

class Footer extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <div id="footer">
      <div class="col1">
        <div class="logoTitle">
          <img src="../img/logo.png" alt="logo capa 2021" />
          <h1>CAPA 2021</h1>
        </div>
        <div class="aPropos">
          <h3>A propos</h3>
          <p>
            Le CAPA c'est le Comité d'Accueil des Premiers Arrivants de IMT
            Lille Douai. Tous les membres de l'équipe sont là pour préparer ton
            arrivée à Douai et te faire kiffer ton intégration !
          </p>
        </div>
      </div>
      <div class="col2">
        <div class="joinUs">
          <h3>Rejoins-nous</h3>
          <p>
            Sur Facebook, Instagram et YouTube tu auras accès à toutes les
            informations utiles et tu pourras voir nos vidéos.
          </p>
        </div>
        <div class="socialIcons">
          <a href="#">
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i class="fa fa-youtube-play" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i class="fa fa-cloud" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
    
    `;
  }
}

customElements.define("menu-home", MenuHome);
customElements.define("menu-page", MenuPage);
customElements.define("pied-de-page", Footer);
