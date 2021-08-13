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
          <h3>About us</h3>
          <p>
            CAPA is the Welcome Committee for First Arrivals of IMT Lille Douai.
            All the members of the team are there to prepare your arrival in
            Douai and make sure you enjoy your integration!
          </p>
        </div>
      </div>
      <div class="col2">
        <div class="joinUs">
          <h3>Come and join the party</h3>
          <p>
            On Facebook, Instagram and YouTube you will have access to all
            the useful information and you will be able to see our videos.
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
          <h3>About us</h3>
          <p>
            CAPA is the Welcome Committee for First Arrivals of IMT Lille Douai.
            All the members of the team are there to prepare your arrival in
            Douai and make sure you enjoy your integration!
          </p>
        </div>
      </div>
      <div class="col2">
        <div class="joinUs">
          <h3>Come and join the party</h3>
          <p>
            On Facebook, Instagram and YouTube you will have access to all
            the useful information and you will be able to see our videos.
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
