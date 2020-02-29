/*let visibility = false;
const toggleVisibility = () => {
    visibility = !visibility;
    render();
};
const appRoot = document.getElementById("app");
const render = () => {
    const jsx = [
        <div key="1">
            <h2>Toggle visibility</h2>
            <button onClick={toggleVisibility}>
                {visibility ? 'HideDetails' : 'ShowDetails'}
            </button>

            {visibility && (
                <div>
                    <h2>Hi here is some details you can see !</h2>
                </div>
            )}
        </div>

    ];
    ReactDOM.render(jsx, appRoot);

};
render();*/
class ToggleVisibility extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility: false
        };


    }
    toggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h2>Toggle visibility</h2>
                <button onClick={this.toggleVisibility}>
                    {this.state.visibility ? 'HideDetails' : 'ShowDetails'}
                </button>

                {this.state.visibility && (
                    <div>
                        <h2>Hi here is some details you can see !</h2>
                    </div>
                )}
            </div>
        );

    }
}
ReactDOM.render(<ToggleVisibility />, document.getElementById('app'));