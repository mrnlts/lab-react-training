import { Component } from 'react';
import './SignupPage.css';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      nationality: '',
      greeting: '',
      emailCheck: false,
    };
  }

  emailCheck = (email) => {
    let emailArr = email.split('@');
    if (emailArr.length === 2) {
      emailArr[1] = emailArr[1].split('.');
      if (
        emailArr[1][1] &&
        emailArr[1][1].length > 1 &&
        email === emailArr[0] + '@' + emailArr[1][0] + '.' + emailArr[1][1]
      ) {
        this.setState({ emailCheck: true });
      } else {
        this.setState({ emailCheck: false });
      }
    }
  };

  handleChange = (e) => {
    switch (e.target.name) {
      case 'Email':
        this.setState({ email: e.target.value });
        this.emailCheck(e.target.value);
        break;
      case 'Password':
        this.setState({ password: e.target.value });
        break;
      default:
        this.setState({ nationality: e.target.value });
        break;
    }
  };

  greeting = () => {
    const { email, password, nationality } = this.state;
    let greeting =
      nationality === 'en'
        ? 'Hello'
        : nationality === 'de'
        ? 'Hallo'
        : 'Bonjour';

    !nationality || !email || !password
      ? this.setState({
          greeting: 'Please fill all the fields, something is missing',
        })
      : this.setState({
          greeting: greeting,
        });
  };

  render() {
    const { email, password, nationality, greeting, emailCheck } = this.state;
    return (
      <div className="signup">
        <form>
          <label htmlFor="Email">Email</label>
          <br />
          <input
            name="Email"
            value={email}
            placeholder="Enter your e-mail adress"
            type="email"
            onChange={this.handleChange}
            className={emailCheck ? 'green' : 'red'}
          />
          <br />
          <label htmlFor="Password">Password</label>
          <br />
          <input
            name="Password"
            value={password}
            placeholder="***************"
            type="password"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="Nationality">Nationality</label>
          <br />
          <select
            required
            name="Nationality"
            value={nationality}
            onChange={this.handleChange}
          >
            <option> </option>
            <option selected="selected" value="en">
              English
            </option>
            <option value="de">German</option>
            <option value="fr">French</option>
          </select>
          <br />
          <button type="button" onClick={this.greeting}>
            Sign up
          </button>
        </form>

        <div className={greeting.length < 1 && 'hide'}>
          <p>{greeting}</p>
          <p
            className={
              greeting === 'Please fill all the fields, something is missing'
                ? 'hide'
                : ''
            }
          >
            Your email address is {email}
          </p>
          <p
            className={
              greeting === 'Please fill all the fields, something is missing'
                ? 'hide'
                : ''
            }
          >
            Your email is {emailCheck ? 'correct' : 'incorrect'}
          </p>
        </div>
      </div>
    );
  }
}

export default SignupPage;
