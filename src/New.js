import React from 'react';

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tagline: 'We rank what people are talking about.',
            year: new Date().getFullYear()
        };

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(e) {
        console.log('onFormSubmit', e)
        console.log('this.state', this.state);
    };

    render() {
        return (<div className="app">
            <div className="welcome">
                <header>
                    <div className="wikitags-logo">
                        <img src="imgs/wikitags-logo.png"/>
                    </div>
                    <h2>Admin Portal</h2>
                    <p>{ this.state.tagline }</p>
                </header>
                <section className="login-form">
                    <form onSubmit={ this.onFormSubmit }>
                        <div className="fl w100">
                            <div className="mdl-textfield mdl-js-textfield">
                                <input className="mdl-textfield__input" type="text" id="email" value={ this.state.email }/>
                                <label className="mdl-textfield__label" htmlFor="email">Email</label>
                            </div>
                        </div>

                        <div className="fl w100">
                            <div className="mdl-textfield mdl-js-textfield">
                                <input className="mdl-textfield__input" type="password" id="password" value={ this.state.password }/>
                                <label className="mdl-textfield__label" htmlFor="password">Password</label>
                            </div>
                        </div>

                        <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                            Login
                        </button>
                    </form>
                </section>

                <footer>
                    &copy; { this.state.year } WikiTags
                </footer>
            </div>
        </div>);
    }
}

export default Login;
