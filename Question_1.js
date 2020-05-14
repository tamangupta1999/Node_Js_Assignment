class Observable {
    constructor() {
        this.observers = [];
        this.state = {
            x: null
        }
    }

    subscribe(observer) {
        this.observers.push(observer);
        observer(this.state);
    }

    publish() {
        this.observers.forEach(observer => observer(this.state));
    }

    changeState(x) {
        this.state.x = x;
        this.publish();
    }
}

const customObservable = new Observable();

console.log("initial state");
customObservable.subscribe(state => {
    console.log("observer 1 received new state", state);
});

customObservable.subscribe(state => {
    console.log("observer 2 received new state", state);
});

customObservable.subscribe(state => {
    console.log("observer 3 received new state", state);
});

console.log('\n');
console.log("changing state");
customObservable.changeState(20);