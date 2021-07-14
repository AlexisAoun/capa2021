
class Club extends HTMLElement {
  constructor(data) {
    this.data=data;
    super();
    this.innerHTML = `
        <p></p>
    `;
  }
}

customElements.define("club-component", MenuHome);
