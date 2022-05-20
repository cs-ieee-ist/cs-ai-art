import { LitElement, html, css, unsafeHTML } from '../third-party/lit-all.min.mjs';
import markdown from '../third-party/markdown.mjs';

export class About extends LitElement {
    static properties = {
    };

    static styles = css`
        :host {
            position: fixed;
            display: none;
            width: 100%;
            height: 100%;
            vertical-align: middle;
            background-color: rgba(0,0,0, 0.5);
            z-index: 1;
        }
        :host(.active) {
            display: flex;
        }

        .about-card {
            position: relative;
            width: 600px;
            margin: auto;
            padding: 0px 26px;
            background-color: #000;
            color: #fef;
            box-shadow: 1px 1px 0 white
        }
        .close-btn {
            position: absolute;
            top: 12px;
            right: 12px;
            background-color: transparent;
            width: 28px;
            height: 28px;
            padding: 1px 0;
            border-radius: 50%;
            border: 1px solid #fef;
            cursor: pointer;
        }
        a {
            color: #fef
        }
    `;

    close() {
        this.classList.remove("active");
    }

    render() {
        return html`
            <div class="about-card">
                <button @click="${this.close}" class="close-btn"><img src="../assets/close.svg" width="24px" height="24px"></button>
                ${unsafeHTML(markdown`
# About

A compilation of images generated using Machine Learning models made by members of the Computer Society at IEEE-IST student branch.

## Technologies Used

* Latent Diffusion
* VQGan+CLIP
* Nvidia's Gaugan 2

## [Our Team](https://ieee-ist.org/cs/membros/)
                `)}
            </div>
        `
    }
}

customElements.define('about-card', About);