import { Component } from "react";
import './SignupPage.css';

class SignupPage extends Component {
    constructor (props) { 
        super(props);
        this.state = {
            email: '', 
            password: '', 
            nationality: ''
        }
    }

    greeting =  () => {
        const email = document.getElementById("Email").value;
        const password = document.getElementById("Password").value;
        const nationality = document.getElementById("Nationality").value;
        
        this.setState({
            email: email,
            password: password,
            nationality: nationality
        })
        
        let greeting;

        if (nationality === 'en') {
            greeting = 'Hello';
        } else if (nationality === 'de') {
            greeting = 'Hallo';
        } else {
            greeting = 'Bonjour'
        }
        
        if (!nationality || !email || !password) {
            return document.getElementById("greeting").innerHTML = `<p>Please fill all the fields, something is missing</p>`;
        } else {
            return (
                document.getElementById("greeting").innerHTML = `<p>${greeting}</p> <br /> <p>Your email address is: ${email}</p> <br /> <p>Your email address is correct</p>`
            )
        }
    }

    render () {
        return (
            <div className="signup">
                <form>
                    <label htmlFor="Email">Email</label>
                    <br />
                    <input required name="Email" id="Email" placeholder="Enter your e-mail adress" type="email"/>
                    <br />
                    <label htmlFor="Password">Password</label>
                    <br />
                    <input required name="Password" id="Password" placeholder="***************" type="password"/>
                    <br />
                    <label htmlFor="Nationality">Nationality</label>
                    <br />
                        <select required name="Nationality" id="Nationality">
                            <option> </option>
                            <option selected="selected" value="en">English</option>
                            <option value="de">German</option>
                            <option value="fr">French</option>
                        </select>
                    <br />
                    <button type="button" onClick={this.greeting}>Sign up</button>
                </form>

                <div id="greeting"></div>
            </div>
        )
    }
}

export default SignupPage;