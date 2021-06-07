import { Component } from "react";
import FaceBookProfile from '../FaceBookProfile/FaceBookProfile';
import './FaceBook.css';

class FaceBook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            people: this.props.people
        }
    }
        
    markBlue = (target) => {
        console.log("PRE: ", this.state.people[0])
        this.setState({
            people: this.state.people.flatMap((person) => (person.country === target) ? person.color = 'blue' : person)
        }) 
        console.log("POST: ", this.state.people[0])
    }

    render () {
        const people = this.state.people.map((person) => 
            <FaceBookProfile person={person} />
        );

        const countries = () => {
            const countriesToDisplay = [];
            this.state.people.forEach(person => (countriesToDisplay.indexOf(person.country) < 0) ? countriesToDisplay.push(person.country) : null)
            return countriesToDisplay.map(country => <button key={country} onClick={() => this.markBlue(country)}> {country} </button>)
        };
        
        return(
            <div>
                {countries()}
                {people}
            </div>
        )
    }
}

export default FaceBook;