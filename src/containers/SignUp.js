import React, { Component } from 'react'

const initalState = {fullName: '', email: '', password: '', type: 'admin'}
export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = initalState;
    }

    inputHandler = e => {
        e.preventDefault();
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    formHandler = e => {
        e.preventDefault();
        console.log('Form submitted');
    }

    resetHandler = () => {
        this.setState(initalState)
    }

    render() {

        const { fullName, email, password, type } = this.state;

        return (
            <div>
                <h2>Sign Up Now!</h2>
                <form action="" onSubmit={this.formHandler}>
                    <p>
                        <label htmlFor="">Full name</label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Your name"
                            value={fullName}
                            onChange={this.inputHandler}
                        />
                    </p>
                    <h4>{fullName}</h4>
                    <p>
                        <label htmlFor="">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Your email" 
                            value={email}
                            onChange={this.inputHandler} 
                        />
                    </p>
                    <h4>{email}</h4>
                    <p>
                        <label htmlFor="">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            value={password}
                            onChange={this.inputHandler} 
                        />
                    </p>
                    <h4>{password}</h4>
                    <p>
                        <select name="type" onChange={this.inputHandler} value={type}>
                            <option value="customer">Customer</option>
                            <option value="seller">Seller</option>
                            <option value="admin">Admin</option>
                        </select>
                    </p>
                    <button type="submit">Sign Up</button>
                    <button type="reset" onClick={this.resetHandler}>X</button>
                </form>
            </div>
        )
    }
}
