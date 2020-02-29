import React from 'react';
export default class Addoption extends React.Component {
    state = {
        error: undefined
    };

    handleAddOption = (e) => {
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
                {this.state.error && <p className="add-option__error">{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <div className="add-option">
                        <input className="add-option__input" type="text" name="option"></input>
                        <button className="button" >addOption</button>
                    </div>

                </form>

            </div>
        );
    }
};