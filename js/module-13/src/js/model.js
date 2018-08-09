export default class Model {
    constructor (items = []) {
        this.items = items;
    }

    addItem(text) {
        const item = {
            id: Date.now(),
            text,
        }

        this.items.push(item);

        return item;
    }

    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id);
    }

    updateItem(id, props) {
        const item = this.items.find(item => item.id === id);
        const keys = Object.keys(props);
        keys.forEach(key => item[key] === props[key]);
    }
}