const loadItem = key => {
    try {
        const serialized_item = localStorage.getItem(key);
        if (serialized_item === null) {
            return {};
        }

        return JSON.parse(serialized_item);
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(`Could not retrieve from localStorage: ${err}`);
        return {};
    }
};

const saveItem = (key, item) => {
    try {
        const serialized_item = JSON.stringify(item);
        localStorage.setItem(key, serialized_item);
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(`Cound not save on localStorage: ${err}`);
    }
};

export const loadState = () => loadItem('state');

export const saveState = state => saveItem('state', state);
