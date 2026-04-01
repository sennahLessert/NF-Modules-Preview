import {customElement, property} from "lit/decorators.js"
import {when} from "lit/directives/when.js";
import {map} from "lit/directives/map.js";
import {css, CSSResultGroup, html, LitElement, TemplateResult} from "lit";

@customElement("nf-tile")
export default class NfTile extends LitElement{

    @property()
    title: string = "Package Basic";
    
    @property()
    tag?: string;

    @property()
    firstButtonText: string = "Learn more";

    @property()
    secondButtonText: string = "";

    @property()
    headline?: string = "";

    @property()
    description?: string;

    @property({type: Array})
    items: string[] = [
        "NEXT Farming App", 
        "NEXT crop planning and documentation", 
        "NEXT Waylineconverter",
        "Talking Fields products"
    ];

    @property({type: Boolean})
    hideFooter: boolean = false;

    @property({type: Boolean})
    isBigTile: boolean = false;

    @property()
    subsection?: string

    static styles?: CSSResultGroup = css `
        :host {
            display: flex;
            height: 450px;

            .container {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                min-width: 380px;

                .header {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-evenly;
                    background: #333333;
                    color: #FFFFFF;

                    .badgeLeft, .badgeRight {
                        flex-grow: 1;
                        display: flex;
                        justify-content: flex-end;
                        max-width: 15%;
                    }
                 
                    .title {
                        flex-grow: 1;
                        text-align: center;
                        font-family: Arial;
                        font-weight: 700;
                        font-style: bold;
                        font-size: 16px;
                        max-width: 50%;
                        padding: 16px;
                    }
                }

                .tag {
                    background: #F39200;
                    border: 0.4px solid #FFFFFF;
                    border-radius: 4px;
                    padding: 2px 7.46px;
                    font-size: 12px;
                }

                .background {
                    background: #BFEE90;
                }

                .text {
                    font-family: Arial;
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
                        font-family: Arial;
                        font-weight: bold;
                        font-size: 16px;
                    }

                    ul {
                        margin: 0;
                    }

                    .subsection {
                        color: #44A12C;
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

            .bigTileContainer {
                min-width: 792px;

                .header {
                    background: #DDDDDD;

                    .title {
                        color: #333333;
                    }
                }

                .body {
                    .headline {
                        color: #44A12C;
                    }
                }

                .body, .footer {
                    background: #FFFFFF;                  
                }
            }
        }
    `;

    private renderTag(): TemplateResult {
        return html `
            <div class="tag">${this.tag}</div>
        `;
    }

    private renderHeader(): TemplateResult {
        return html `
            <div class="header">
                <div class="badgeLeft"></div>
                <div class="title">${this.title}</div>
                <div class="badgeRight">
                    ${when(this.tag, () => this.renderTag(), () => this.renderNothing())}
                </div>
                
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
        return html `<div class="text" .innerHTML=${this.description || ""}></div>`;
    }

    private renderNothing(): TemplateResult { return html ``;}

    private renderSubsection(): TemplateResult {
        return html `
            <div class="subsection text">${this.subsection}</div>
        `;
    }

    private renderBody(): TemplateResult {
        return html `
            <div class="body background">
                ${when(this.headline, () => this.renderHeadline(), () => this.renderNothing())}
                ${when(this.description, () => this.renderDescription(), () => this.renderNothing())}
                <ul class="text">
                    ${map(this.items, (item: string) => html `<li>${item}</li>`)}
                </ul>
                ${when(this.subsection, () => this.renderSubsection(), () => this.renderNothing())}
            </div>
        `;
    }

    render() {
        if (this.isBigTile) {
            this.hideFooter = true;
        }

        return html `
        <div class="container ${this.isBigTile ? "bigTileContainer" : ""}">
            ${this.renderHeader()}
            ${this.renderBody()}
            ${when(!this.hideFooter, () => this.renderFooter(), () => this.renderNothing())}
        </div>`;
    }
}