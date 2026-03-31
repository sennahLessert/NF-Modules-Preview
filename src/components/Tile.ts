import {customElement, property} from "lit/decorators.js"
import {when} from "lit/directives/when.js";
import {map} from "lit/directives/map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import {css, CSSResultGroup, html, LitElement, TemplateResult} from "lit";

@customElement("nf-tile")
export default class NfTile extends LitElement{

    @property()
    title: string = "Package Basic";
    
    @property({ type: Boolean})
    isFree: boolean = false

    @property()
    firstButtonText: string = "Learn more";

    @property()
    secondButtonText: string = "Activate Package Basic";

    @property()
    headline?: string = "Package Basic included";

    @property()
    description?: string;

    @property({type: Array})
    items: string[] = [
        "NEXT Farming App", 
        "NEXT crop planning and documentation", 
        "NEXT Waylineconverter",
        "Talking Fields products"
    ];

    static styles?: CSSResultGroup = css `
        :host {
            display: flex;
            height: 450px;

            .container {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;

                .header {
                    display: flex;
                    flex-direction: row;
                    background: #333333;
                    gap: 10px;
                    color: #FFFFFF;
                    padding: 1rem 10rem;
                    font: "Arial";
                    font-weight: 700;
                    font-style: bold;
                    font-size: 1rem;
                    
                }

                .background {
                    background: rgba(116, 181, 110, 0.5);
                }

                .text {
                    font: "Arial";
                    font-weight: 400;
                    font-size: 14px;
                }
                
                .body {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    padding: 1rem;
                    flex-grow: 10;

                    .headline {
                        font: "Arial";
                        font-weight: 700;
                        font-style: bold;
                        font-size: 16px;
                    }

                    ul {
                        margin: 0;
                    }
                }

                .footer {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    padding: 0.5rem 1rem 0 1rem;
                    height: 130px;

                    button {
                        border: solid 1px black;
                        border-radius: 4px;
                        padding: 16px 20px;
                        font-size: 1rem;
                        color: black;
                        border: solid 1px #BFBFBF;
                    }

                    .secondBtn {
                        background: #44A12C;
                        color: white;
                        border: solid 1px #000000;
                    }
                }
            }
        }
    `;

    private renderHeader(): TemplateResult {
        return html `
            <div class="header">
                ${this.title}
            </div>
        `;
    }

    private renderFooter(): TemplateResult {
        return html `
            <div class="footer background">
                <button>${this.firstButtonText}</button>
                <button class="secondBtn">${this.secondButtonText}</button>
            </div>
        `;
    }

    private renderHeadline(): TemplateResult {
        return html `<div class="headline">${this.headline}</div>`;
    }

    private renderDescription(): TemplateResult {
        return html `<div innerHTML=${ifDefined(this.description)}></div>`;
    }

    private renderNothing(): TemplateResult { return html ``;}

    private renderBody(): TemplateResult {
        return html `
            <div class="body background">
                ${when(this.title, () => this.renderHeadline(), () => this.renderNothing())}
                ${when(this.description, () => this.renderDescription(), () => this.renderNothing())}
                <ul>
                    ${map(this.items, (item: string) => html `<li>${item}</li>`)}
                </ul>
            </div>
        `;
    }

    render() {
        return html `
        <div class="container">
            ${this.renderHeader()}
            ${this.renderBody()}
            ${this.renderFooter()}
        </div>`;
    }
}