var TopModal = (function (exports) {
  'use strict';

  var css_248z = ":host {\n  background-color: #ffffff;\n  width: 100vw;\n  max-width: 800px;\n\n  max-height: 40vh;\n\n  visibility: hidden;\n  transition: visibility 0.5s;\n}\n\n:host([open]) {\n  visibility: visible;\n}\n\n::slotted(div) {\n  box-sizing: border-box;\n}\n\n#d {\n  position: fixed;\n  z-index: 101;\n  background-color: inherit;\n  -webkit-overflow-scrolling: touch;\n  overflow: auto;\n  -ms-scroll-chaining: none;\n      overscroll-behavior: contain;\n  -webkit-backdrop-filter: var(--top-modal-backdrop-filter, none);\n          backdrop-filter: var(--top-modal-backdrop-filter, none);\n\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  transform: translateY(-100%);\n  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n  width: inherit;\n  max-width: inherit;\n  border-bottom-left-radius: inherit;\n  border-bottom-right-radius: inherit;\n}\n\n:host([open]) #d {\n  transform: none;\n  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.5);\n}\n\n#fs {\n  position: fixed;\n  z-index: 100;\n  background-color: #000000;\n  -webkit-backdrop-filter: var(--top-modal-backdrop-filter, none);\n          backdrop-filter: var(--top-modal-backdrop-filter, none);\n\n  top: 0;\n  bottom: 0;\n  right: -30px; /* hide scrollbar until overscroll bug is fixed */\n  height: 100vh;\n  transition: var(\n    --top-modal-overlay-transition,\n    opacity 0.25s ease-in-out 0.25s\n  );\n  width: calc(\n    100vw + 30px\n  ); /* put back to just 100vw once overscroll bug fixed */\n  opacity: 0;\n  visibility: hidden;\n\n  overflow: auto;\n  -ms-scroll-chaining: none;\n      overscroll-behavior: contain;\n}\n\n:host([open]) #fs {\n  opacity: var(--top-modal-overlay-opacity, 0.7);\n  visibility: visible;\n}\n\n/*\n * Workaround for bug https://bugs.chromium.org/p/chromium/issues/detail?id=813094\n * Once bug is fixed and in the wild we can remove this element and make #if overflow:hidden\n * and set \"right: 0; width: 100vw\" for #fs\n */\n#ifs {\n  height: calc(100vh + 1px);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCOztFQUVoQixnQkFBZ0I7O0VBRWhCLGtCQUFrQjtFQUNsQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixpQ0FBaUM7RUFDakMsY0FBYztFQUNkLHlCQUE0QjtNQUE1Qiw0QkFBNEI7RUFDNUIsK0RBQXVEO1VBQXZELHVEQUF1RDs7RUFFdkQsTUFBTTtFQUNOLE9BQU87RUFDUCxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLHVEQUF1RDtFQUN2RCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtDQUFrQztFQUNsQyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsK0RBQXVEO1VBQXZELHVEQUF1RDs7RUFFdkQsTUFBTTtFQUNOLFNBQVM7RUFDVCxZQUFZLEVBQUUsaURBQWlEO0VBQy9ELGFBQWE7RUFDYjs7O0dBR0M7RUFDRDs7R0FFQyxFQUFFLHFEQUFxRDtFQUN4RCxVQUFVO0VBQ1Ysa0JBQWtCOztFQUVsQixjQUFjO0VBQ2QseUJBQTRCO01BQTVCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDhDQUE4QztFQUM5QyxtQkFBbUI7QUFDckI7O0FBRUE7Ozs7RUFJRTtBQUNGO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InN0eWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuXG4gIG1heC1oZWlnaHQ6IDQwdmg7XG5cbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuNXM7XG59XG5cbjpob3N0KFtvcGVuXSkge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG46OnNsb3R0ZWQoZGl2KSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiNkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDE7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG92ZXJzY3JvbGwtYmVoYXZpb3I6IGNvbnRhaW47XG4gIGJhY2tkcm9wLWZpbHRlcjogdmFyKC0tdG9wLW1vZGFsLWJhY2tkcm9wLWZpbHRlciwgbm9uZSk7XG5cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB3aWR0aDogaW5oZXJpdDtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiBpbmhlcml0O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogaW5oZXJpdDtcbn1cblxuOmhvc3QoW29wZW5dKSAjZCB7XG4gIHRyYW5zZm9ybTogbm9uZTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbiNmcyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBiYWNrZHJvcC1maWx0ZXI6IHZhcigtLXRvcC1tb2RhbC1iYWNrZHJvcC1maWx0ZXIsIG5vbmUpO1xuXG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogLTMwcHg7IC8qIGhpZGUgc2Nyb2xsYmFyIHVudGlsIG92ZXJzY3JvbGwgYnVnIGlzIGZpeGVkICovXG4gIGhlaWdodDogMTAwdmg7XG4gIHRyYW5zaXRpb246IHZhcihcbiAgICAtLXRvcC1tb2RhbC1vdmVybGF5LXRyYW5zaXRpb24sXG4gICAgb3BhY2l0eSAwLjI1cyBlYXNlLWluLW91dCAwLjI1c1xuICApO1xuICB3aWR0aDogY2FsYyhcbiAgICAxMDB2dyArIDMwcHhcbiAgKTsgLyogcHV0IGJhY2sgdG8ganVzdCAxMDB2dyBvbmNlIG92ZXJzY3JvbGwgYnVnIGZpeGVkICovXG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcblxuICBvdmVyZmxvdzogYXV0bztcbiAgb3ZlcnNjcm9sbC1iZWhhdmlvcjogY29udGFpbjtcbn1cblxuOmhvc3QoW29wZW5dKSAjZnMge1xuICBvcGFjaXR5OiB2YXIoLS10b3AtbW9kYWwtb3ZlcmxheS1vcGFjaXR5LCAwLjcpO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4vKlxuICogV29ya2Fyb3VuZCBmb3IgYnVnIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTgxMzA5NFxuICogT25jZSBidWcgaXMgZml4ZWQgYW5kIGluIHRoZSB3aWxkIHdlIGNhbiByZW1vdmUgdGhpcyBlbGVtZW50IGFuZCBtYWtlICNpZiBvdmVyZmxvdzpoaWRkZW5cbiAqIGFuZCBzZXQgXCJyaWdodDogMDsgd2lkdGg6IDEwMHZ3XCIgZm9yICNmc1xuICovXG4jaWZzIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoICsgMXB4KTtcbn1cbiJdfQ== */";

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
              // When the drawer is closed, update keyboard/screen reader behavior.
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
                  // to prevent body behind drawer from scrolling you need
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

  exports.TopModal = TopModal;

  return exports;

}({}));
/* @preserve v3.1.0 */
