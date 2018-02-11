if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(registration => {
        // Registration was successful
        // eslint-disable-next-line no-console
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch(err => {
        // registration failed :(
        // eslint-disable-next-line no-console
        console.log('ServiceWorker registration failed: ', err);
      });
  });
}
