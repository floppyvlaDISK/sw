// FIXME: Is waiting for service worker to install necessary?
registerServiceWorker()
  .then(renderPage)
  .catch(renderPage);

function registerServiceWorker() {
  return new Promise((resolve, reject) => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js')
        .then(() => {
          console.log('sw registration completed');
          resolve();
        })
        .catch(err => {
          console.warn('sw registration failed with', err);
          reject();
        });
    } else {
      console.warn('sw is unsupported');
      reject();
    }
  });
}

function renderPage() {
  renderGallery(document.body);
}