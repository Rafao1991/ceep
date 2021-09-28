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

    unsubscribe(callback) {
        this._subscribers = this._subscribers.filter(c => c !== callback);
    }
}

export default Categories;