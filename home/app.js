import resourcesArray from '../data/api.js';
import { saveResults } from '../common/utils.js';

let harrayForResults = [];
const nodeListOfButtons = document.querySelectorAll('input');

nodeListOfButtons.forEach((buttonValue) => {
    buttonValue.addEventListener('click', (event) => {
        harrayForResults = [];
        const query = event.target.value;

        // this looks like very similar logic to your event listeners in results.js. I wonder if this could have been a function for code reuse
        for (let i = 0; i < resourcesArray.length; i++) {
            const filterResults = resourcesArray[i].type.includes(query);
            if (filterResults) {
                harrayForResults.push(resourcesArray[i]);
            }
        }
        saveResults(harrayForResults);
        window.location = 'results';
    });
});