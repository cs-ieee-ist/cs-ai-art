import { LitElement, html, css } from '../third-party/lit-all.min.mjs';

export class CardList extends LitElement {
    static properties = {
        images: [],
    };

    static styles = css`
        :host {
            width: 100%;
            min-height: 100px;
            display: flex;
            flex-wrap: wrap
        }
    `;

    constructor() {
        super();
        this.images = [{ src: "artistic-network-colorful,-black-background.png", title: "Artistic Network Colorful" },
        { src: "chaos-picasso.png", title: "Chaos Picasso" },
         { src: "chaos-theory.png", title: "Chaos Theory" },
         { src: "clouds-pop-art.png", title: "Cloud Pop Art" },
         { src: "Colorful-art-networks.png", title: "Colorful Art Networks" },
         { src: "gaugan_river_2.png", title: "River 2" },
         { src: "colorful-surrealism-art,-with-black-background.png", title: "Colorful Surrealism Art with black background" },
         { src: "colorful-surrealism-dancing-art,-with-black-background.png", title: "Colorful Surrealism Dancing Art" },
         { src: "complex-mind-trees-painting.png", title: "Complex mind trees painting" },
         { src: "gaugan_forest.png", title: "Creepy Forest" },
         { src: "moon-made-of-oreos.png", title: "Moon made of oreos" },
         { src: "mural-humans-and-robots.png", title: "Mural Humans and Robots" },
         { src: "gaugan_river_1.png", title: "River 1" },
         { src: "gaugan-cosmic-bridges.png", title: "Cosmic Bridges" },
         { src: "mural-robots-and-networks.png", title: "Mural Robots and Networks" },
         { src: "girl-walking-in-the-park.png", title: "Girl walking in the park" },
         { src: "mural-robots.png", title: "Mural Robots" },
         { src: "mural-robots-and-networks.png", title: "Mural Robots and Networks" },
         { src: "picasso-artistic-colorful-tree,-dark-background.png", title: "Picasso Artistic Colorful Tree" },
         { src: "rainbow-banana.png", title: "Rainbow Banana" },
         { src: "surrealism-dancing-art,-with-black-background.png", title: "Surrealism Dancing Art" },
         { src: "surrealist-colorful-tree-network,-black-background.png", title: "Surrealist Colorful Tree Network" },
         { src: "surrealist-robots.png", title: "Surrealist Robots" },
         { src: "ugly-art.png", title: "Ugly Art" },
         { src: "university-surrealism.png", title: "University Surrealism" },
         { src: "van-gogh-tree-network-.png", title: "Van Gogh tree network" },
         { src: "gaugan_dreamy_island.png", title: "Dreamy Island" },
         { src: "van-gogh,-with-black-background.png", title: "Van Gogh with black background" },
         { src: "gaugan_river_3.png", title: "River 3" },
        ]
    }

    render() {
        return html`
            ${this.images.map(image => html`
                <ai-card image="./images/${image.src}" title="${image.title}"></ai-card>
            `)}
        `
    }
}

customElements.define('card-list', CardList);