import pxToRem from './utils/pxToRem.js'

const rootSelector = '[data-js-expandeble-content]'

class ExpandebleContent {
  selectors = {
    root: rootSelector,
    button: '[data-js-expandeble-content-button]'
  }

  stateClasses = {
    isExpanded: 'is-expanded'
  }

  animationParams = {
    duration: 500,
    easing: 'easy'
  }

  constructor(rootElement) {
    this.rootElement = rootElement;
    this.buttonElement = this.rootElement.querySelector(this.selectors.button)
    this.bindEvents()
  }

  expand() {
    const { offsetHeight, scrollHeight } = this.rootElement

    this.rootElement.classList.add(this.stateClasses.isExpanded)
    this.rootElement.animate([
      {
        maxHeight: `${pxToRem(offsetHeight)}rem`,
      },
      {
        maxHeight: `${pxToRem(scrollHeight)}rem`,
      }
    ], this.animationParams)
  }

  onButtonClick = () => {
    this.expand()
  }

  bindEvents() {
    this.buttonElement.addEventListener('click', this.onButtonClick)
  }


}

class ExpandebleContentCollection {

  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new ExpandebleContent(element);
    })
  }
}

export default ExpandebleContentCollection;
