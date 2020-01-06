function renderGallery(root) {
  if (!root) {
    throw new Error('root element is not specified');
  }
  if (gallery()) {
    root.innerHTML = imageListHTML();
  } else {
    root.innerHTML = errorMessageHTML();
  }
  function imageListHTML() {
    return gallery().images.map(item => {
      return `<div style="margin-bottom: 30px;">
        <img
          src="${item.url}"
          alt="${item.alt}"
          style="max-height: 300px; display: block;"
        />
        <div>${item.name}</div>
        <div>${item.credit}</div>
      </div>`
    }).join('');
  }
  function errorMessageHTML() {
    return '<p style="color: red">Gallery is not defined</p>';
  }
}

renderGallery(document.body);