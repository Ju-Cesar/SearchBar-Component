let searchIcon = document.querySelector('.search-icon');
let searchBar = document.querySelector('.search-bar');
let searchInput = document.querySelector('input[type="search"]');

searchIcon.addEventListener('click', ()=> {
    searchBar.classList.toggle('active');
    searchInput.focus();
})