export function renderFavorites(favorite) {

    const favoritesListItem = document.createElement('li');
    favoritesListItem.classList = favorite.id;
    const headingDiv = document.createElement('div');
    headingDiv.classList = 'heading-div';
    favoritesListItem.appendChild(headingDiv);
    
    if (favorite.website === 'false') {
        const favoriteName = document.createElement('h2');
        favoriteName.textContent = favorite.name;
        headingDiv.appendChild(favoriteName);
    } else {
        const a = document.createElement('a');               
        a.textContent = favorite.name;  
        a.href = favorite.website;           
        headingDiv.appendChild(a);
    }


    const favoritePhone = document.createElement('p');
    favoritePhone.classList = 'phone';
    favoritePhone.textContent = favorite.phone;
    favoritesListItem.appendChild(favoritePhone);

    const favoriteHours = document.createElement('p');
    favoriteHours.classList = 'hours';
    favoriteHours.textContent = 'Hours: ' + favorite.hours;
    favoritesListItem.appendChild(favoriteHours);

    return favoritesListItem;
}