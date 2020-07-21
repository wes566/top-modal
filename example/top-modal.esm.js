var css_248z = ":host {\n  background-color: #ffffff;\n  width: 100vw;\n  max-width: 800px;\n\n  max-height: 40vh;\n\n  visibility: hidden;\n  transition: visibility 0.5s;\n}\n\n:host([open]) {\n  visibility: visible;\n}\n\n::slotted(div) {\n  box-sizing: border-box;\n}\n\n#d {\n  position: fixed;\n  z-index: 101;\n\n  background-color: inherit;\n  -webkit-overflow-scrolling: touch;\n  overflow: auto;\n  -ms-scroll-chaining: none;\n      overscroll-behavior: contain;\n  -webkit-backdrop-filter: var(--top-modal-backdrop-filter, none);\n          backdrop-filter: var(--top-modal-backdrop-filter, none);\n\n  top: 0;\n  left: 50%;\n  box-sizing: border-box;\n  transform: translate(-50%, -100%);\n  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n  width: inherit;\n  max-width: inherit;\n  max-height: inherit;\n  border-bottom-left-radius: inherit;\n  border-bottom-right-radius: inherit;\n}\n\n:host([open]) #d {\n  transform: translate(-50%, 0%);\n  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.5);\n}\n\n#fs {\n  position: fixed;\n  z-index: 100;\n  background-color: #000000;\n  -webkit-backdrop-filter: var(--top-modal-backdrop-filter, none);\n          backdrop-filter: var(--top-modal-backdrop-filter, none);\n\n  top: 0;\n  bottom: 0;\n  right: -30px; /* hide scrollbar until overscroll bug is fixed */\n  height: 100vh;\n  transition: var(\n    --top-modal-overlay-transition,\n    opacity 0.25s ease-in-out 0.25s\n  );\n  width: calc(\n    100vw + 30px\n  ); /* put back to just 100vw once overscroll bug fixed */\n  opacity: 0;\n  visibility: hidden;\n\n  overflow: auto;\n  -ms-scroll-chaining: none;\n      overscroll-behavior: contain;\n}\n\n:host([open]) #fs {\n  opacity: var(--top-modal-overlay-opacity, 0.7);\n  visibility: visible;\n}\n\n/*\n * Workaround for bug https://bugs.chromium.org/p/chromium/issues/detail?id=813094\n * Once bug is fixed and in the wild we can remove this element and make #if overflow:hidden\n * and set \"right: 0; width: 100vw\" for #fs\n */\n#ifs {\n  height: calc(100vh + 1px);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCOztFQUVoQixnQkFBZ0I7O0VBRWhCLGtCQUFrQjtFQUNsQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTs7RUFFWix5QkFBeUI7RUFDekIsaUNBQWlDO0VBQ2pDLGNBQWM7RUFDZCx5QkFBNEI7TUFBNUIsNEJBQTRCO0VBQzVCLCtEQUF1RDtVQUF2RCx1REFBdUQ7O0VBRXZELE1BQU07RUFDTixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQyx1REFBdUQ7RUFDdkQsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QiwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QiwrREFBdUQ7VUFBdkQsdURBQXVEOztFQUV2RCxNQUFNO0VBQ04sU0FBUztFQUNULFlBQVksRUFBRSxpREFBaUQ7RUFDL0QsYUFBYTtFQUNiOzs7R0FHQztFQUNEOztHQUVDLEVBQUUscURBQXFEO0VBQ3hELFVBQVU7RUFDVixrQkFBa0I7O0VBRWxCLGNBQWM7RUFDZCx5QkFBNEI7TUFBNUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsOENBQThDO0VBQzlDLG1CQUFtQjtBQUNyQjs7QUFFQTs7OztFQUlFO0FBQ0Y7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3R5bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogMTAwdnc7XG4gIG1heC13aWR0aDogODAwcHg7XG5cbiAgbWF4LWhlaWdodDogNDB2aDtcblxuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC41cztcbn1cblxuOmhvc3QoW29wZW5dKSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbjo6c2xvdHRlZChkaXYpIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuI2Qge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBjb250YWluO1xuICBiYWNrZHJvcC1maWx0ZXI6IHZhcigtLXRvcC1tb2RhbC1iYWNrZHJvcC1maWx0ZXIsIG5vbmUpO1xuXG4gIHRvcDogMDtcbiAgbGVmdDogNTAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTAwJSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIG1heC1oZWlnaHQ6IGluaGVyaXQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IGluaGVyaXQ7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiBpbmhlcml0O1xufVxuXG46aG9zdChbb3Blbl0pICNkIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDI1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuI2ZzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIGJhY2tkcm9wLWZpbHRlcjogdmFyKC0tdG9wLW1vZGFsLWJhY2tkcm9wLWZpbHRlciwgbm9uZSk7XG5cbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAtMzBweDsgLyogaGlkZSBzY3JvbGxiYXIgdW50aWwgb3ZlcnNjcm9sbCBidWcgaXMgZml4ZWQgKi9cbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdHJhbnNpdGlvbjogdmFyKFxuICAgIC0tdG9wLW1vZGFsLW92ZXJsYXktdHJhbnNpdGlvbixcbiAgICBvcGFjaXR5IDAuMjVzIGVhc2UtaW4tb3V0IDAuMjVzXG4gICk7XG4gIHdpZHRoOiBjYWxjKFxuICAgIDEwMHZ3ICsgMzBweFxuICApOyAvKiBwdXQgYmFjayB0byBqdXN0IDEwMHZ3IG9uY2Ugb3ZlcnNjcm9sbCBidWcgZml4ZWQgKi9cbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuXG4gIG92ZXJmbG93OiBhdXRvO1xuICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBjb250YWluO1xufVxuXG46aG9zdChbb3Blbl0pICNmcyB7XG4gIG9wYWNpdHk6IHZhcigtLXRvcC1tb2RhbC1vdmVybGF5LW9wYWNpdHksIDAuNyk7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi8qXG4gKiBXb3JrYXJvdW5kIGZvciBidWcgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9ODEzMDk0XG4gKiBPbmNlIGJ1ZyBpcyBmaXhlZCBhbmQgaW4gdGhlIHdpbGQgd2UgY2FuIHJlbW92ZSB0aGlzIGVsZW1lbnQgYW5kIG1ha2UgI2lmIG92ZXJmbG93OmhpZGRlblxuICogYW5kIHNldCBcInJpZ2h0OiAwOyB3aWR0aDogMTAwdndcIiBmb3IgI2ZzXG4gKi9cbiNpZnMge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggKyAxcHgpO1xufVxuIl19 */";

var template = "<div id=\"d\"><slot></slot></div>\n<div id=\"fs\"><div id=\"ifs\"></div></div>\n";

// @ts-ignore
// using a template so it only needs to be parsed once, whereas setting
// innerHTML directly in the custom element ctor means the HTML would get parsed
// for every custom element on the page
const tmpl = document.createElement("template");
tmpl.innerHTML = `<style>${css_248z}</style>${template}`;
var KEYCODE;
(function (KEYCODE) {
    KEYCODE[KEYCODE["ESC"] = 27] = "ESC";
})(KEYCODE || (KEYCODE = {}));
class TopModal extends HTMLElement {
    constructor() {
        super();
        // from https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
        this.upgradeProperty = (prop) => {
            if (this.hasOwnProperty(prop)) {
                let value = this[prop];
                delete this[prop];
                this[prop] = value;
            }
        };
        this.handleKeyUp = (e) => {
            if (e.altKey) {
                return;
            }
            switch (e.keyCode) {
                case KEYCODE.ESC:
                    e.preventDefault();
                    this.open = false;
                    break;
            }
        };
        this.handleFreeSpaceDivClick = (_e) => {
            this.open = false;
        };
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
        this._freeSpaceDiv = shadowRoot.getElementById("fs");
    }
    connectedCallback() {
        if (this._freeSpaceDiv) {
            this._freeSpaceDiv.addEventListener("click", this.handleFreeSpaceDivClick);
        }
        this.upgradeProperty("open");
    }
    disconnectedCallback() {
        document.removeEventListener("keyup", this.handleKeyUp);
    }
    get open() {
        return this.hasAttribute("open");
    }
    set open(isOpen) {
        if (isOpen) {
            if (!this.hasAttribute("open")) {
                this.setAttribute("open", "");
            }
        }
        else {
            if (this.hasAttribute("open")) {
                this.removeAttribute("open");
            }
        }
    }
    static get observedAttributes() {
        return ["open"];
    }
    // private _bodyOverflow: string | null | undefined;
    // private _bodyPosition: string | null | undefined;
    attributeChangedCallback(_name, _oldValue, _newValue) {
        if (_name === "open") {
            // When the modal is closed, update keyboard/screen reader behavior.
            if (!this.open) {
                this.setAttribute("tabindex", "-1");
                this.setAttribute("aria-disabled", "true");
                document.removeEventListener("keyup", this.handleKeyUp);
                // if (this._bodyOverflow !== undefined) {
                //   document.body.style.overflow = this._bodyOverflow;
                // }
                // if (this._bodyPosition !== undefined) {
                //   document.body.style.position = this._bodyPosition;
                // }
                this.dispatchEvent(new CustomEvent("close", {
                    bubbles: true,
                }));
            }
            else {
                this.setAttribute("tabindex", "0");
                this.setAttribute("aria-disabled", "false");
                this.focus({
                    preventScroll: true,
                });
                document.addEventListener("keyup", this.handleKeyUp);
                // to prevent body behind modal from scrolling you need
                // to set overflow to hidden and position to fixed (for iOS)
                // TODO: this is too buggy
                // this._bodyOverflow = document.body.style.overflow;
                // document.body.style.overflow = "hidden";
                // this._bodyPosition = document.body.style.position;
                // document.body.style.position = "fixed";
                this.dispatchEvent(new CustomEvent("open", {
                    bubbles: true,
                }));
            }
        }
    }
}
customElements.define("top-modal", TopModal);

export { TopModal };
/* @preserve v3.1.0 */
