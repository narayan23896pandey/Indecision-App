class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision APP';
        const subTitle = 'Put your life in Hand of computer!';
        const options = ['Thing One', 'Things Two', 'Thing Five'];
        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action />
                <Options options={options} />
                <Addoption />
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
    handlePick() {
        alert("handlePick");
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}> what should I do ?</button>
            </div>

        );

    }
};
class Options extends React.Component {
    handleRemoveAll() {
        alert("handleRemoveALl");
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>RemoveALL</button>
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
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value;
        if (option) {
            alert(option);
        }
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text"></input>
                    <button >addOption</button>
                </form>

            </div>
        );
    }
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));