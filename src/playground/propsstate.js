
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        };
    };
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }

        });
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

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            };

        });


    }
    render() {
        const title = 'Indecision APP';
        const subTitle = 'Put your life in Hand of computer!';

        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <Addoption handleAddOption={this.handleAddOption} />
            </div>

        );
    }
};
class Header extends React.Component {
    render() {
        //console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    }

}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>
                    what should I do ?
                 </button>
            </div>

        );

    }
};
class Options extends React.Component {
    render() {
        return (
            <div>
                <button
                    onClick={this.props.handleDeleteOptions}>
                    RemoveALL
                </button>
                {
                    // this.props.options.map((option) => <p key={option}>{option}</p>)
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }

            </div>
        );
    }
};
class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
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
        this.setState(() => {
            return { error };
        }

        )
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));