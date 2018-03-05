"use strict";
import { LitElement, html } from "../@polymer/lit-element/lit-element.js";

class HTDrawerLogo extends LitElement {
  render({ company, app, imageSrc, href }) {
    return html`<style>
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
            flex-direction: row;
            justify-content: center;
            margin-top: 8px;
            font-size: 22px;
        }
        
        #company {
            font-weight: 500;
        }
        
        #app{
            margin-left:2px;
            font-weight: 300;
            color: var(--accent-color);
        }
      </style>
      <div id="container">
            <a href="${href}">
                <img src="${imageSrc}" alt="${company} ${app}">
                <div id="text-container">
                    <div id="company">${company}</div>  
                    <div id="app">${app}</div>
                </div>
            </a>
        </div>`;
  }

  static get is() {
    return "ht-drawer-logo";
  }

  static get properties() {
    return {
      company: String,
      app: String,
      imageSrc: String,
      href: String
    };
  }
}

customElements.define(HTDrawerLogo.is, HTDrawerLogo);
