const header = document.querySelector('[data-header');

header.addEventListener('click', evt => {
  if (evt.target.matches('[data-open-btn]') || evt.target.matches('[data-close-btn]') || evt.target.matches('[data-header-overlay]')) {
    return toggleActiveClass(header);
  }

  if (evt.target.matches('[data-dropdown-btn]')) {
    return toggleDropdownMenu(evt);
  }
});

function toggleActiveClass(element) {
  element.classList.toggle('active');
}

function toggleDropdownMenu(evt) {
  const itemContainer = evt.target.parentElement;
  toggleActiveClass(itemContainer);
  
  if (itemContainer.classList.contains('active')) {
    evt.target.setAttribute('aria-expanded', 'true');
    return;
  }
  evt.target.setAttribute('aria-expanded', 'false');
}
