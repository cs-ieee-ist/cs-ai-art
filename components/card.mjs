import { LitElement, html, css } from '../third-party/lit-all.min.mjs';

export class Card extends LitElement {
    static properties = {
        image: "",
        title: ""
    };

    static styles = css`
        :host {
            position: relative;
            width: auto;
            height: 100%;
            box-sizing: border-box
        }
        
        .card__title {
            position: absolute;
            bottom: 0;
            opacity: 0;
            transition: opacity 0.3s ease;
            color: white;
            padding: 12px;
            background-color: rgba(0,0,0,0.8)
        }

        img {
            width: 100%;
            height: 100%;
            max-height: 300px;
            object-fit: cover; 
        }

        :host(:hover) .card__title {
            opacity: 1
        }
    `;

    render() {
        return html`
            <img src="${this.image}" alt="${this.title}">
            <div class="card__title">${this.title}</div>
        `
    }
}

customElements.define('ai-card', Card);