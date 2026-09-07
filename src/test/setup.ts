import '@testing-library/jest-dom/vitest'

// Tests render directly into jsdom's document, which never loads index.html,
// so the #modal-root Modal portals into doesn't exist unless we add it here.
if (!document.getElementById('modal-root')) {
  const modalRoot = document.createElement('div')
  modalRoot.id = 'modal-root'
  document.body.appendChild(modalRoot)
}

// jsdom doesn't implement the <dialog> element's imperative API
// (https://github.com/jsdom/jsdom/issues/3294), so Modal's dialog.showModal()/
// close() calls would otherwise throw in tests. Real browsers always support
// these natively — this polyfill only exists for the test environment.
if (!HTMLDialogElement.prototype.showModal) {
  HTMLDialogElement.prototype.showModal = function (this: HTMLDialogElement) {
    this.setAttribute('open', '')
  }
}

if (!HTMLDialogElement.prototype.close) {
  HTMLDialogElement.prototype.close = function (this: HTMLDialogElement) {
    this.removeAttribute('open')
    this.dispatchEvent(new Event('close'))
  }
}
