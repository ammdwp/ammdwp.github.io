class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Molina Medina Adrian.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
