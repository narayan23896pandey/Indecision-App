console.log('App.js is running');

//jsx stand for javascript-XML

const app = {
    title: "Indecision App",
    subtitle: "Put your life in hands of computer",
    options: []
};
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};
const onRemoveAll = () => {
    app.options = [];
    render();
};
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById("app");

const render = () => {
    const template = [
        <div key="1">
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <h2>{app.options.length > 0 ? "Here are your options" : "No options"}</h2>
            <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should i do?</button>
            <h3>{app.options.length}</h3>
            <button onClick={onRemoveAll}>RemoveAll</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key='option'> {option}</li>;
                    })
                }
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>AddOptions</button>
            </form>
        </div>

    ];
    ReactDOM.render(template, appRoot);

}
render();