class Notes {
    constructor() {
        this._value = [];
        this._subscribers = [];
    }

    getNotes() {
        return this._value;
    }

    createNote(title, text, category) {
        this._value.push({ title, text, category });
        this.notify();
    }

    deleteNote(index) {
        this._value.splice(index, 1);
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

export default Notes;