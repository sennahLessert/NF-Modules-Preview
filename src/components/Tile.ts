import {customElement, property} from "lit/decorators.js"
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


    static styles?: CSSResultGroup = css `
        :host {
            .container {
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
                    font-size: 1rem
                }

                .footer {
                    background: rgba(116, 181, 110, 0.5);
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    padding: 1rem;

                    button {
                        border: solid 1px black;
                        border-radius: 4px;
                        padding: 16px 20px;
                        font-size: 1rem;
                        color: black;
                    }

                    .secondBtn {
                        background: #44A12C;
                        color: white;
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
            <div class="footer">
                <button>${this.firstButtonText}</button>
                <button class="secondBtn">${this.secondButtonText}</button>
            </div>
        `;
    }

    render() {
        return html `
        <div class="container">
            ${this.renderHeader()}
            ${this.renderFooter()}
        </div>`;
    }

}