const header = document.querySelector('[data-header');

header.addEventListener('click', evt => {
  if (evt.target.matches('[data-open-btn]') || evt.target.matches('[data-close-btn]') || evt.target.matches('[data-header-overlay]')) {
    return toggleHeaderActiveClass();
  }

  if (evt.target.matches('[data-dropdown-btn]')) {
    return toggleItemActiveClass(evt);
  }
});

function toggleHeaderActiveClass() {
  header.classList.toggle('header--active');
}

function toggleItemActiveClass(evt) {
  const itemContainer = evt.target.parentElement;
  itemContainer.classList.toggle('header__item--active');
}
