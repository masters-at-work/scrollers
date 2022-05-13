// How to Create Custom Elements
// https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header>
          <nav>
            <ul>
              <li><a href="../home/">home</a></li>
              <li><a href="../horizontal-snapping/">horizontal snapping</a></li>
              <li><a href="../reveal/">reveal</a></li>
              <!-- <li><a href="../light-touch/">light touch</a></li> -->
            </ul>
          </nav>
        </header>
      `;
    }
}

customElements.define("header-component", Header);
