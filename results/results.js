import { renderDisplayPage } from '../results/render-display.js';
import { addUserFavorites } from '../results/makeFavesArray.js';
import resourcesArray from '../data/api.js';
import { getResults, saveResults } from '../common/utils.js';


const list = document.getElementById('resource-list');
export const displayResults = getResults();

function resultsDisplayer(resultsArray) {
    list.innerHTML = '';
    // looks like this oculd have been a forEach array method
    for (let i = 0; i < resultsArray.length; i++) {
        const resource = resultsArray[i];
        const listItem = renderDisplayPage(resource);
        list.appendChild(listItem);
    }
}

resultsDisplayer(displayResults);

const checkBoxes = document.querySelectorAll('input[name=neighborhood]');

// this block is really concise, awesome code
checkBoxes.forEach(checkBox => {
    checkBox.addEventListener('change', () => {
        const checkedBoxes = document.querySelectorAll('input[name=neighborhood]:checked');
        const neighborhoods = [];
        // nice inner loop!
        checkedBoxes.forEach(checkedBox => {
            neighborhoods.push(checkedBox.value);
        });
        const filteredResults = displayResults.filter((result) => neighborhoods.includes(result.neighborhood));
        resultsDisplayer(filteredResults);
    });
});

const submitButton = document.getElementById('submit-favorites-button');

submitButton.addEventListener('click', () => {
    const nodeListOfCheckBoxes = document.querySelectorAll('#resource-list input:checked');
    for (let i = 0; i < nodeListOfCheckBoxes.length; i++) {
        addUserFavorites(nodeListOfCheckBoxes[i].value);
    }
});

const nodeListOfButtons = document.querySelectorAll('input[name=resource]');

// fun name, but it's usually better to have readable, descriptive variable names
let harrayForResults = [];
nodeListOfButtons.forEach((buttonValue) => {
    buttonValue.addEventListener('click', (event) => {
        harrayForResults = [];
        const query = event.target.value;
        // could have been a forEach
        for (let i = 0; i < resourcesArray.length; i++) {
            const filterResults = resourcesArray[i].type.includes(query);
            if (filterResults) {
                harrayForResults.push(resourcesArray[i]);
            }
        }
        saveResults(harrayForResults);
        resultsDisplayer(harrayForResults);
    });
});

export { resultsDisplayer };