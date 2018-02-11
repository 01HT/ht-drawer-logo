"use strict";
import { Element } from "../@polymer/polymer/polymer-element.js";

class HTDrawerLogo extends Element {
  static get template() {
    return `
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
            letter-spacing: 2px;
            flex-direction: column;
            cursor: pointer;
            text-transform: uppercase;
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
            font-size: 18px;
            
        }
        
        #company {
            font-weight: 500;
        }
        
        #service{
            color: var(--accent-color);
        }
      </style>
      <div id="container">
            <a href="[[href]]">
                <img src="[[imageSrc]]" alt="[[serviceText]][[companyText]]">
                <div id="text-container">
                  <div id="service">[[serviceText]]</div>
                  <div id="company">[[companyText]]</div>
                </div>
            </a>
        </div>
`;
  }
  static get is() {
    return "ht-drawer-logo";
  }

  static get properties() {
    return {
      companyText: String,
      
      serviceText: String,
      
      imageSrc: String,

      href: String
    };
  }
}

customElements.define(HTDrawerLogo.is, HTDrawerLogo);
