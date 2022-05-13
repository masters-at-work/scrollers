class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header>
          <nav>
            <ul>
              <li><a href="../home/index.html">home</a></li>
              <li><a href="../horizontal-snapping/index.html">horizontal snapping</a></li>
              <li><a href="../reveal/index.html">reveal</a></li>
              <li><a href="../light-touch/index.html">light touch</a></li>
            </ul>
          </nav>
        </header>
      `;
    }
}

customElements.define("header-component", Header);
