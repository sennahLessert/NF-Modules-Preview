import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import "./components/Tile.js"
import { Package } from "./types.js";


@customElement("my-app")
class MyApp extends LitElement {

    static styles = css `
        :host {
            display: flex;
            gap: 2rem;
            padding: 3rem 5rem;
        }
    `;

    private getPackages(): Package[] {
        return [
            {
                title: "PACKAGE BASIC",
                description: "GPS supported documentation and automatic <br /> tracking of tasks",
                items: [
                    "NEXT Farming App", 
                    "NEXT crop planning and documentation", 
                    "NEXT Waylineconverter",
                    "Talking Fields products"
                ]
            }, {
                title: "PACKAGE PLUS",
                headline: "Package Basic included",
                items: [
                    "NEXT Crop Planning and documentation pro",
                    "NEXT Fertilization"
                ]
            },
            {
                title: "PACKAGE PROFI",
                headline: "Package Basic & plus included",
                description: "Package Profi contains all modules from Package <br /> Basic and Package plus",
                items: [
                    "NEXT Prescription map center",
                    "NEXT wayline manager",
                    "NEXT machine management",
                    "TaskDoc connection",
                    "John Deere operations center"
                ]
            }
        ];
    }
    render() {
        return html `
            ${map(this.getPackages(), (pkg: Package) => {
                return html `<nf-tile class="package"
                    title=${pkg.title} headline=${ifDefined(pkg.headline)}
                    .items=${pkg.items} description=${ifDefined(pkg.description)}
                ></nf-tile>`
            })}
        `;
    }
}