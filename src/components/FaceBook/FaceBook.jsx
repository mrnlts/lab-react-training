import { Component } from 'react';
import FaceBookProfile from '../FaceBookProfile/FaceBookProfile';
import './FaceBook.css';

class FaceBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: this.props.people,
      countries: '',
      blueCountry: '',
    };
  }

  markBlue = (event) => {
    const oldPeople = [...this.state.people];
    oldPeople.map((person) =>
      person.country === event.target.name
        ? (person.isBlue = true)
        : (person.isBlue = false)
    );
    this.setState({
      people: oldPeople,
      blueCountry: event.target.innerHTML,
    });
  };

  countries = () => {
    const countriesToDisplay = [];
    this.state.people.forEach((person) => {
      return countriesToDisplay.indexOf(person.country) < 0
        ? countriesToDisplay.push(person.country)
        : null;
    });
    this.setState({ countries: countriesToDisplay });
  };

  componentDidMount = () => this.countries();

  render() {
    const { countries, people, blueCountry } = this.state;
    return (
      <div>
        {countries
          ? countries.map((country) => (
              <button
                key={country}
                name={country}
                onClick={this.markBlue}
                className={blueCountry === country && 'blue'}
              >
                {country}
              </button>
            ))
          : ''}
        {people.map((person, index) => (
          <FaceBookProfile person={person} key={index} isBlue={person.isBlue} />
        ))}
      </div>
    );
  }
}

export default FaceBook;
