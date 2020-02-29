class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your Life in hands of computer!</h2>
            </div>
        );
    }

};
class Action extends React.Component {
    render() {
        return (
            <div>
                <button>what should I do ?</button>
            </div>

        );

    }
};
class Options extends React.Component {
    render() {
        return (
            <div>
                <h3>Choose your Options</h3>
            </div>
        );
    }
};
class Addoption extends React.Component {
    render() {
        return (
            <div>
                <input type="text"></input>
                <button>addOption</button>
            </div>
        );
    }
};
const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <Addoption />
    </div>
);
ReactDOM.render(jsx, document.getElementById('app'));