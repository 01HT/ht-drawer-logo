"use strict";
import { LitElement, html } from "@polymer/lit-element";

class HTDrawerLogo extends LitElement {
  render() {
    const { app, company, beta, imageSrc, href } = this;
    return html`
    <style>
        :host {
            display: block;
            position: relative;
            box-sizing: border-box;
            pointer-events: all;
            height: 192px;
        }
        
        #container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
        }
        
        a {
            display: flex;
            flex-direction: column;
            cursor: pointer;
            align-items: center;
            text-decoration: none;
            color: inherit;
            outline: none;
        }
        
        img {
            width: 72px;
            height: 72px;
        }
        
        #text-container {
            display: flex;
            line-height:1;
            align-items:flex-end;
            margin-top: 16px;
            position:relative;
            line-height: 0.7;
        }
        
        #company {
          font-size: 12px;
          color: var(--secondary-text-color);
          font-weight: 400;
          margin-left:4px;
          line-height: 0.7;
        }
        
        #app{
            font-size: 22px;
            font-weight: 300;
            letter-spacing: -0.6px;
            color: #414549;
        }

        #beta {
            background: var(--secondary-text-color);
            color: #fff;
            font-size: 10px;
            border-radius: 4px;
            position: absolute;
            top: -12px;
            line-height: 1;
            right: -16px;
            font-weight: 400;
            padding: 2px 4px;
        }
      </style>
      <div id="container">
            <a href=${href}>
                <img src=${imageSrc} alt="${app} ${company}">
                <div id="text-container">
                    <div id="app">${app}</div>
                    <div id="company">by ${company}</div>
                    <div id="beta" ?hidden=${beta !== ""}>beta</div>
                </div>
            </a>
        </div>`;
  }

  static get is() {
    return "ht-drawer-logo";
  }

  static get properties() {
    return {
      company: { type: String },
      app: { type: String },
      imageSrc: { type: String },
      href: { type: String },
      beta: { type: Boolean }
    };
  }
}

customElements.define(HTDrawerLogo.is, HTDrawerLogo);
