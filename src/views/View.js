export class View {
    constructor(el, models = {}) {
        this.el = el;
        this.models = models;
        this.prepareRender = this.prepareRender.bind(this);
        
        this.prepareRender();
        this.subscribe();

    }

    destroy() {
        this.unsubscribe();
        this.el.innerHTML = ''
    }

    render() {
        throw new Error('This method should be overridden!')
    }

    prepareRender() {
        const modelsData = Object.keys(this.models).reduce((acc, key) => {
            acc[key] = this.models[key].getState();
            return acc;
        }, {});

        this.el.innerHTML = this.render(modelsData)
    }


    subscribe() {
        Object.values(this.models).forEach((model) => {
            model.addEventListener('model:change', this.prepareRender)
        })
    }

    unsubscribe() {
         Object.values(this.models).forEach((model) => {
            model.removeEventListener('model:change', this.prepareRender)
        })
    }
}