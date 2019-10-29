import { displayResults } from '../results/results.js';
import findById from '../common/utils.js';

export function addUserFavorites(resourceId) {
    let favoritesArray = JSON.parse(localStorage.getItem('favoritesArray') || '[]');

    const favorited = findById(displayResults, resourceId);
    const found = findById(favoritesArray, favorited.id);
    if (!found) {
        favoritesArray.push(favorited);
    } else {
        return;
    }

    const json = JSON.stringify(favoritesArray);
    localStorage.setItem('favoritesArray', json);
}