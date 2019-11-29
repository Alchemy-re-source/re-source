import { addUserFavorites } from './makeFavesArray.js';

export function renderDisplayPage(resource) {
  
    const resourceListItem = document.createElement('li');
    resourceListItem.className = resource.id;

    const headingDiv = document.createElement('div');
    headingDiv.classList = 'heading-div';
    resourceListItem.appendChild(headingDiv);
    
    if (resource.website === 'false') {
        const resourceName = document.createElement('h2');
        resourceName.textContent = resource.name;
        headingDiv.appendChild(resourceName);
     
    } else {
        const a = document.createElement('a');               
        a.textContent = resource.name;  
        a.href = resource.website;
        a.target = '_blank';          
        headingDiv.appendChild(a);
    }

    const resourceCheckBox = document.createElement('input');
    resourceCheckBox.type = 'checkbox';
    resourceCheckBox.classList = 'checkbox';
    resourceCheckBox.value = resource.id;
    resourceCheckBox.id = resource.id;
    
    let favoritesArray = JSON.parse(localStorage.getItem('favoritesArray') || '[]');
    
    for (let i = 0; i < favoritesArray.length; i++) {
        const favorite = favoritesArray[i];
        
        if (favorite.id === resourceCheckBox.value) {
            resourceCheckBox.checked = true; 
        } else {
            resourceCheckBox.checked = false;
        }
    }

    resourceCheckBox.addEventListener('change', (event) => {
        addUserFavorites(event.target.value);
    });

    headingDiv.appendChild(resourceCheckBox);
    
    // const checkedImageLabel = document.createElement('label');
    // checkedImageLabel.setAttribute('for', resource.id);
    // headingDiv.appendChild(checkedImageLabel);
    

    const contactDiv = document.createElement('div');
    contactDiv.classList = 'contact-div';
    resourceListItem.appendChild(contactDiv);

    const resourcePhone = document.createElement('p');
    resourcePhone.classList = 'phone';
    resourcePhone.textContent = resource.phone;
    contactDiv.appendChild(resourcePhone);

    const resourceAddress = document.createElement('p');
    resourceAddress.classList = 'address';
    resourceAddress.textContent = resource.address;
    contactDiv.appendChild(resourceAddress);

    const resourceDescription = document.createElement('p');
    resourceDescription.classList = 'description';
    resourceDescription.textContent = resource.description;
    resourceListItem.appendChild(resourceDescription);
    
    const resourceHours = document.createElement('p');
    resourceHours.classList = 'hours';
    resourceHours.textContent = 'Hours: ' + resource.hours;
    resourceListItem.appendChild(resourceHours);

    const directionsDiv = document.createElement('div');
    directionsDiv.classList = 'directions-div';
    resourceListItem.appendChild(directionsDiv);

    const resourceTransit = document.createElement('p');
    resourceTransit.classList = 'transit';
    resourceTransit.textContent = resource.transit;
    directionsDiv.appendChild(resourceTransit);

    
    
    if (resource && resource.filter) {

        if (resource.filter.includes('lgbt')) {
            const imgLgbt = document.createElement('img');               
            imgLgbt.src = '../assets/rainbow-icon.png';             
            resourceListItem.appendChild(imgLgbt);
        } if (resource.filter.includes('onlyMen')){
            const imgMen = document.createElement('img');               
            imgMen.src = '../assets/men-icon.png';             
            resourceListItem.appendChild(imgMen);
        } if (resource.filter.includes('onlyWomen')){
            const imgWomen = document.createElement('img');               
            imgWomen.src = '../assets/women-icon.png';             
            resourceListItem.appendChild(imgWomen);
        } if (resource.filter.includes('religious')){
            const imgReligious = document.createElement('img');               
            imgReligious.src = '../assets/cross-icon.png';             
            resourceListItem.appendChild(imgReligious);
        } 
    }
    return resourceListItem;
}

export default renderDisplayPage;