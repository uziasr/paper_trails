import react from "react"
import axios from "axios"
import styled from 'styled-components';

class OnBoard extends react.Component {
    constructor(props) {
        super(props)
        this.state = {
            credentials: {
                email: '',
                password: ''
            },
            loggingIn: true,
            submissionError: null
        }
        this.onFormChange = this.onFormChange.bind(this)
    }

    onFormChange(e) {
        this.setState({
            ...this.state, credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    toggleLoggingIn(bool) {
        this.setState({
            ...this.state,
            loggingIn: bool
        })
    }

    submitHandler() {
        axios.post(`https://papertrail1.herokuapp.com/api/users/${this.state.loggingIn ? 'login' : 'register'}`, this.state.credentials)
            .then(res => {
                localStorage.setItem("token", res.data.token)
                // navigate to home page here
                this.props.history.push({
                    pathname: '/',
                })
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
            password: this.state.credentials.password.length > 4
        }

        return { valid : validity.email && validity.password, errors: validity}


    }



    render() {
        
        const isValid = this.validCredentials()
        
        const LoginButton = styled.div`
            width: 50%;
            margin: 0 auto;
            border-radius: 15px;
            background: ${isValid.valid ? "mediumseagreen" : "grey"};

            p {
                margin: 15px 10px !important;
                font-size: 20px;
              }
          
            }
            :hover{
                transition: .8s;
                cursor: pointer;
                background: ${ isValid.valid ? "rgb(43, 134, 84) !important" : "grey"};
            }
        `
        return (
            <div className="onboardingRoot">
                <div className="onboardingTitleWrap">
                    <p onClick={() => this.toggleLoggingIn(false)} style={{ color: this.state.loggingIn ? "white" : "mediumseagreen", transition: ".35s" }}>REGISTER</p>
                    <p onClick={() => this.toggleLoggingIn(true)} style={{ color: this.state.loggingIn ? "mediumseagreen" : "white", transition: ".35s" }}>LOGIN</p>
                </div>
                <div className="onboardingFormWrap">
                    <label style={{ textAlign: "left", fontSize: "14px" }}>Email {isValid.errors.email? <span style={{color:"mediumseagreen", fontSize:"14px"}}>✔</span>: null}</label>
                    <input
                        name="email"
                        placeholder="enter email"
                        value={this.state.credentials.email}
                        onChange={(e) => this.onFormChange(e)}>
                    </input>
                    <label style={{ textAlign: "left", fontSize: "14px" }}>Password must be at least 4 characters {isValid.errors.password? <span style={{color:"mediumseagreen", fontSize:"14px"}}>✔</span>: null}</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="enter password"
                        value={this.state.credentials.password}
                        onChange={(e) => this.onFormChange(e)}>
                    </input>
                    <LoginButton condition={true} disabled={true} onClick={() => this.submitHandler()} className="onboardingButton">
                        <p>{this.state.loggingIn ? "Login" : "Register"}</p>
                    </LoginButton>
                </div>
            </div>
        )
    }
}

export default OnBoard