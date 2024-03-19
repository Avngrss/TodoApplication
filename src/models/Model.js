export class Model extends EventTarget {
    constructor(initialState) {
        super();
        this.state = initialState;
    }

    getState() {
        return this.state
    }

    setState(state) {
        this.state = state;
        this.dispatchEvent(new Event('model:change'))
    }
}