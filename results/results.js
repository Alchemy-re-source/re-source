import { renderDisplayPage } from '../results/render-display.js';
import resourcesArray from '../data/api.js';
import { getResults, saveResults } from '../common/utils.js';


const list = document.getElementById('resource-list');
export const displayResults = getResults();

function resultsDisplayer(resultsArray) {
    list.innerHTML = '';
    for (let i = 0; i < resultsArray.length; i++) {
        const resource = resultsArray[i];
        const listItem = renderDisplayPage(resource);
        list.appendChild(listItem);
    }
}

resultsDisplayer(displayResults);

const checkBoxes = document.querySelectorAll('input[name=neighborhood]');

checkBoxes.forEach(checkBox => {
    checkBox.addEventListener('change', () => {
        const checkedBoxes = document.querySelectorAll('input[name=neighborhood]:checked');
        const neighborhoods = [];
        checkedBoxes.forEach(checkedBox => {
            neighborhoods.push(checkedBox.value);
        });
        const filteredResults = displayResults.filter((result) => neighborhoods.includes(result.neighborhood));
        resultsDisplayer(filteredResults);
    });
});

const nodeListOfButtons = document.querySelectorAll('input[name=resource]');

let harrayForResults = [];
nodeListOfButtons.forEach((buttonValue) => {
    buttonValue.addEventListener('click', (event) => {
        harrayForResults = [];
        const query = event.target.value;
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