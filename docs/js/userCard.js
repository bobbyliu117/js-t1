const template = document.createElement('template');
template.innerHTML = `
  <style>
    .container {
      background: red;
    }
  </style>
  <div class="container">
    <h3></h3>
    <p><slot /></p>
  </div>
`

class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
  }
}

window.customElements.define('user-card', UserCard);