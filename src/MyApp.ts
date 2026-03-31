import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "./components/Tile.js"


@customElement("my-app")
class MyApp extends LitElement {

    static styles = css `
        :host {
            display: flex;
        }
    `;
    render() {
        return html `
            <nf-tile></nf-tile>
        `;
    }
}