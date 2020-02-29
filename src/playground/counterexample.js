/*console.log('App.js is running');
let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();

}
const minusOne = () => {
    count--;
    renderCounterApp();
}
const reset = () => {
    count = 0;
    renderCounterApp();
}

const appRoot = document.getElementById("app");
const renderCounterApp = () => {
    const templatetwo = (
        <div>
            <h1>Count:{count}</h1>
            <button id="myId" onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>

    );
    ReactDOM.render(templatetwo, appRoot);
}
renderCounterApp();*/
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handelAddOne = this.handelAddOne.bind(this);
        this.handelMinusOne = this.handelMinusOne.bind(this);
        this.handelReset = this.handelReset.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);
        if (!isNaN(count)) {
            this.setState(() => ({ count }));
        }


    }


    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }

    }
    handelAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handelMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    handelReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.handelAddOne}>+1</button>
                <button onClick={this.handelMinusOne}>-1</button>
                <button onClick={this.handelReset}>Reset</button>
            </div>
        );
    }

}
ReactDOM.render(<Counter count={-10} />, document.getElementById('app'));
