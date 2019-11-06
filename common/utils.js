function findById(array, id) {
    // this will eventually be a .find array method
    for (let index = 0; index < array.length; index++) {
        const item = array[index];
        if (item.id === id) {
            return item;
        }
    }
    return null;
}

export function getResults() {
    const json = localStorage.getItem('resourceArray');
    if (!json) {
        return null;
    } else {
        const resource = JSON.parse(json);
        return resource;
    }
}

export function saveResults(resourceArray) {
    const json = JSON.stringify(resourceArray);
    localStorage.setItem('resourceArray', json);
}

export default findById;