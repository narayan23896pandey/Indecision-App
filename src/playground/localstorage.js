
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    };
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options: options }));
            }
        } catch (e) {
            //do nothing
        }

    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }

    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => (
            {
                options: prevState.options.filter((option) => optionToRemove !== option

                )
            }
        ));
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option) {
        if (!option) {
            return "Enter valid value to add option";
        } else if (this.state.options.indexOf(option) > -1) {

            return "This option is already taken";
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));


    }
    render() {
        const title = 'Indecision APP';
        const subTitle = 'Put your life in Hand of computer!';

        return (
            <div>
                <Header subTitle={subTitle} />
                <Action hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <Addoption handleAddOption={this.handleAddOption} />
            </div>

        );
    }
};
IndecisionApp.defaultProps = {
    options: []
}
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
        </div>
    );
}
Header.defaultProps = {
    title: "Indecision app"
}

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handlePick}>
                what should I do ?
             </button>
        </div>

    );
};
const Options = (props) => {
    return (
        <div>
            <button
                onClick={props.handleDeleteOptions}>
                RemoveALL
            </button>
            {props.options.length == 0 && <p>Pease add options</p>}
            {
                // this.props.options.map((option) => <p key={option}>{option}</p>)
                props.options.map((option) => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))

            }

        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
            >
                Remove
            </button>
        </div>
    );
};

class Addoption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error }));
        if (!error) {
            e.target.elements.option.value = '';
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button >addOption</button>
                </form>

            </div>
        );
    }
};
/*const User = (props) => {
    return (
        <div>
            <p> Name:{props.name}</p>
            <p> Age:{props.age}</p>
        </div>
    );

};*/
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));