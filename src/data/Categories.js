class Categories {
    constructor() {
        this._value = [];
        this._subscribers = [];
    }

    getCategories() {
        return this._value;
    }

    addCategory(category) {
        this._value.push(category);
        this.notify();
    }

    subscribe(callback) {
        this._subscribers.push(callback);
    }

    notify() {
        this._subscribers.forEach(callback => {
            callback(this._value);
        });
    }
}

export default Categories;