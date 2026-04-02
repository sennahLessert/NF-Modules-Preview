import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
import { map } from "lit/directives/map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import "./components/Tile.js"
import { Package } from "./types.js";


@customElement("my-app")
class MyApp extends LitElement {

    static styles = css `
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 32px;
            width: 96vw;
            
            .header {
                font-size: 21px;
                font-weight: 400;
                font: "Arial";
                background: #44A12C;
                text-align: center;
                padding: 12px 0px;
                color: white;
                width: 100%;
            }

            .spacer {
                flex-grow: 0.89;
                width: 100px;
            }

           .packageContainer {
                display: flex;
                justify-content: center;
                gap: 16px;
                width: 1204px;
                flex-wrap: wrap;
                padding: 0px 3rem;
           }
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
                ],
                secondBtnText: "Activate Package Basic",
                tag: "FREE",
                isBigTile: false
            }, {
                title: "PACKAGE PLUS",
                headline: "Package Basic included",
                items: [
                    "NEXT Crop Planning and documentation pro",
                    "NEXT Fertilization"
                ],
                secondBtnText: "Activate Package Plus",
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
                ],
                secondBtnText: "Activate Package Profi"
            },
            {
                title: "CONNECTED APPLICATIONS",
                headline: "Tunen App",
                description: "If you select Package PLUS or Package PROFI you are eligible to use Tunen mobile app",
                items: [
                    "advantage/benefit/option/feature 1",
                    "advantage/benefit/option/feature 2",
                    "advantage/benefit/option/feature 3"
                ],
                tag: "OPTIONAL",
                isBigTile: true,
                subsection: "for additional information see NEXT Farming web page"
            }
        ];
    }
    render() {
        return html `
            <div class="header">Modules</div>
            <div class="packageContainer">
                ${map(this.getPackages(), (pkg: Package) => {
                    
                    return html `${when(pkg.isBigTile, () => html `<div class="spacer"></div>`, () => html ``)} 
                    <nf-tile class="package"
                        title=${pkg.title} headline=${ifDefined(pkg.headline)}
                        .items=${pkg.items} description=${ifDefined(pkg.description)}
                        secondButtonText=${pkg.secondBtnText} tag=${ifDefined(pkg.tag)}
                        ?hideFooter=${pkg.hideFooter} ?isBigTile=${pkg.isBigTile}
                        subsection=${ifDefined(pkg.subsection)}
                    ></nf-tile>`
                })}
            </div>
        `;
    }
}