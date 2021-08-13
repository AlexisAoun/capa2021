class MenuHome extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <ul class="menu">
          <li>
            <a href="index.html"><i class="fa fa-home" aria-hidden="true"></i></a>
          </li>
          <li><a href="html/en/information.html">Information</a></li>
          <li><a href="html/en/videos.html">Videos</a></li>
          <li><a href="html/en/equipe.html">The team</a></li>
          <li><a href="html/en/vieDouai.html">Life in Douai</a></li>
          <li><a href="html/en/associations.html">Associations</a></li>
          <li><a href="html/en/contactezNous.html">Contact us</a></li>
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
            <a href="../../index-en.html"><i class="fa fa-home" aria-hidden="true"></i></a>
          </li>
          <li><a href="information.html">Information</a></li>
          <li><a href="videos.html">Videos</a></li>
          <li><a href="team.html">The team</a></li>
          <li><a href="lifeDouai.html">Life in Douai</a></li>
          <li><a href="associations.html">Associations</a></li>
          <li><a href="contactUs.html">Contact us</a></li>
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
          <img src="../../img/logo.png" alt="logo capa 2021" />
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
          <a href="https://instagram.com/capa2021imtld?utm_medium=copy_link" target="_blank">
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="https://www.facebook.com/CAPA-2021-IMT-Lille-Douai-104418761871650/" target="_blank">
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCFL8feTx-XsWBdZkZzEOZeQ" target="_blank">
            <i class="fa fa-youtube-play" aria-hidden="true"></i>
          </a>
          <a href="#" target="_blank">
            <i class="fa fa-cloud" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>

    `;
  }
}

class FooterHome extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <div id="footer">
      <div class="col1">
        <div class="logoTitle">
          <img src="img/logo.png" alt="logo capa 2021" />
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
          <a href="https://instagram.com/capa2021imtld?utm_medium=copy_link" target="_blank">
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="https://www.facebook.com/CAPA-2021-IMT-Lille-Douai-104418761871650/" target="_blank">
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCFL8feTx-XsWBdZkZzEOZeQ" target="_blank">
            <i class="fa fa-youtube-play" aria-hidden="true"></i>
          </a>
          <a href="#" target="_blank">
            <i class="fa fa-cloud" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>

    `;
  }
}

class SocialIcons extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
          <a href="https://instagram.com/capa2021imtld?utm_medium=copy_link" target="_blank">
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="https://www.facebook.com/CAPA-2021-IMT-Lille-Douai-104418761871650/" target="_blank">
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCFL8feTx-XsWBdZkZzEOZeQ" target="_blank">
            <i class="fa fa-youtube-play" aria-hidden="true"></i>
          </a>
          <a href="#" target="_blank">
            <i class="fa fa-cloud" aria-hidden="true"></i>
          </a>
    `
  }

}
customElements.define("menu-home", MenuHome);
customElements.define("menu-page", MenuPage);
customElements.define("pied-de-page", Footer);
customElements.define("pied-de-page-home", FooterHome);
customElements.define("social-icons", SocialIcons);
