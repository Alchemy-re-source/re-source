import { renderFavorites } from './render-favorites.js';

// nice use of the || fallback!
let favoritesArray = JSON.parse(localStorage.getItem('favoritesArray') || '[]');

const grabbed = document.getElementById('favorites-list');

for (let i = 0; i < favoritesArray.length; i++) {
    const favorite = favoritesArray[i];
    const favoriteItem = renderFavorites(favorite);
    grabbed.appendChild(favoriteItem);
}


