class MenuHome extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <ul class="menu">
          <li>
            <a href="index.html"><i class="fa fa-home" aria-hidden="true"></i></a>
          </li>
          <li class="dropMenu">
            <a href="#">Informations &nbsp; &nbsp; v</a>
            <ul class="dropSub">
              <li><a href="#">Guide meudien</a></li>
              <li><a href="#">Questionnaire Parrain-fillot</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </li>
          <li><a href="html/videos.html">Vidéos</a></li>
          <li><a href="html/equipe.html">L'équipe</a></li>
          <li><a href="html/vieDouai.html">La vie à Douai</a></li>
          <li><a href="html/associations.html">Associations</a></li>
          <li><a href="html/contactezNous">Contactez-nous</a></li>
        </ul>
    `
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
          <li class="dropMenu">
            <a href="#">Informations &nbsp; &nbsp; v</a>
            <ul class="dropSub">
              <li><a href="#">Guide meudien</a></li>
              <li><a href="#">Questionnaire Parrain-fillot</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </li>
          <li><a href="videos.html">Vidéos</a></li>
          <li><a href="equipe.html">L'équipe</a></li>
          <li><a href="vieDouai.html">La vie à Douai</a></li>
          <li><a href="associations.html">Associations</a></li>
          <li><a href="contactezNous.html">Contactez-nous</a></li>
        </ul>
    `
  }
}

customElements.define('menu-home', MenuHome);
customElements.define('menu-page', MenuPage);