![Build](https://github.com/wes566/top-modal/workflows/Build/badge.svg) [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg?style=flat-square)](https://www.webcomponents.org/element/top-modal) [![npm](https://img.shields.io/npm/v/top-modal.svg)](https://npmjs.org/package/top-modal) [![Dependencies Status](https://david-dm.org/wes566/top-modal/status.svg)](https://david-dm.org/wes566/top-modal)

# top-modal

A simple, top-of-page modal built as a Web Component

## [Demo](https://top-modal.netlify.com/)

## Installation

You can integrate top-modal via `<script>` tag or via NPM.

### Via `<script>` tag

In the `<head>` of your index.html put a script tag like this:

```html
<script type="module" src="https://cdn.skypack.dev/top-modal"></script>
```

Now you can use the `top-modal` element anywhere in your html, JSX, template, etc.

### Via NPM

```bash
npm install top-modal --save
```

And then you need to import the module before you can use it in your html/jsx/template:

```js
import "top-modal";
```

## Web Component Browser Support

This web component uses [HTML templates](https://caniuse.com/#feat=template), the [shadow DOM](https://caniuse.com/#feat=shadowdomv1), and [custom elements](https://caniuse.com/#feat=custom-elementsv1). If you need to polyfill for any of these standards then [take a look at the web components polyfill](https://github.com/webcomponents/webcomponentsjs).

## API and Customization

### Attributes/Properties

- `open`
  - Add this attribute to open the modal.
    - Example: `<top-modal open></top-modal>`
  - Set the property in Javascript to imperatively toggle the modal
    - Example: `modal.open = true`
  - In (p)react you might need to set undefined in your JSX (since false !== undefined for html attribute existence)
    - Example: `<top-modal open={this.state.isModalOpen || undefined}></top-modal>`

### Events

- `open`
  - Raised when the modal is opened.
  - Example: `modal.addEventListener("open", handleOpen())`
  - When subscribing in html listen for `onopen`
    - Ex: `<top-modal onopen="handleOpen()">`
- `close`
  -Raised when the modal is closed.
  - Example: `modal.addEventListener("close", handleClose())`
  - When subscribing in html listen for `onclose`
    - Ex: `<top-modal onclose="handleClose()">`

### Styling

You can style the top-modal element as you would any regular element, in CSS. A list of supported CSS properties are below, along with the default values.

```css
top-modal {
  background-color: #ffffff;
  color: inherit;
  width: 100vw;
  max-width: 800px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
```

You can set a backdrop filter using the following CSS variable.

- `--top-modal-backdrop-filter`
  - Sets the backdrop-filter for both the modal and the overlay that appears to the bottom of the modal (when it's open).
  - Default is `none`

You can customize the overlay that appears to the bottom of the modal (when it's open) by setting one of the following CSS variables.

- `--top-modal-overlay-transition`
  - Sets the transition
  - Default is `opacity 0.25s ease-in-out 0.25s`
- `--top-modal-overlay-opacity`
  - Sets the opacity of the overlay
  - Default is `0.7`

## Contribute

This project is built with standard HTML/CSS/TS, no frameworks or special web-component compilers here (for maximum simplicity and minimum size). If you want to learn more about writing custom elements see [MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) or [this web fundamentals page](https://developers.google.com/web/fundamentals/web-components/).

```bash
npm install
npm start
```

This will start a live-server on port localhost:8080. Any changes you make to files in lib/ or any changes to example/index.html should get live reloaded.
