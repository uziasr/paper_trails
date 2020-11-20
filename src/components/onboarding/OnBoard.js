import react from "react"
import Login from "./Login"
import Register from "./Register"
import axios from "axios"

class OnBoard extends react.Component {
    constructor(props) {
        super(props)
        this.state = {
            credentials: {
                email: '',
                password: ''
            },
            loggingIn: false,
            error: null
        }
        this.onFormChange = this.onFormChange.bind(this)
    }

    onFormChange(e) {
        console.log(e.target.value)
        this.setState({
            ...this.state, credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    toggleLoggingIn() {
        this.setState({
            ...this.state,
            loggingIn: !this.state.loggingIn
        })
    }

    submitHandler() {
        axios.post(`https://papertrail1.herokuapp.com/api/user/${this.state.loggingIn ? 'login' : 'register'}`, this.state.credentials)
            .then(res => {
                localStorage.setItem("token", res.data.token)
                // navigate to home page here
            })
            .catch(err => {
                console.log(err)
                // render error on screen
            })
    }

    validCredentials() {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const validity = {
            email: re.test(String(this.state.credentials.email).toLowerCase()),
            password: this.state.credentials.password.length < 4
        }
        this.setState({
            ...this.state,
            errors: validity.email && validity.password ? "invalid email and password needs to be longer than 4 characters"
                : validity.email===false && validity.password ? "invalid email" :
                validity.email && validity.password===false ? "passwords need to be longer than 4 character": null
        })

    }

    render() {
        return (
            <>
                {this.state.loggingIn ?
                    <Login credentials={this.state.credentials} onFormChange={this.onFormChange} />
                    :
                    <Register credentials={this.state.credentials} onFormChange={this.onFormChange} />}
            </>
        )
    }
}

export default OnBoard