import { Component } from "react";
import FaceBookProfile from '../FaceBookProfile/FaceBookProfile';
// import Countries from '../Countries/Countries';
import './FaceBook.css';

class FaceBook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            people: this.props.people
        }
    }
 
    countries = () => {
        const countriesToDisplay = [];
        this.state.people.forEach(person => {
            // console.log(person);
            return (countriesToDisplay.indexOf(person.country) < 0) ? countriesToDisplay.push(person.country) : null
        })
        return countriesToDisplay.map(country => <button key={country} id={`btn${country}`} onClick={()=>this.markBlue(country)}> {country} </button>)
    }

    markBlue = (target) => {
        let paintedCards = document.getElementsByClassName('blue');
        while(paintedCards.length > 0 ) { paintedCards[0].classList.remove('blue')};
        const blueCountries = document.querySelector("#" + target);
        const blueBtn = document.querySelector("#btn" + target)
        blueCountries.classList.add('blue');
        blueBtn.classList.add('blue');
    }

    render () {
        const people = this.state.people.map((person, index) => 
            <FaceBookProfile person={person} key={index}/>
        );
        
        return(
            <div>
                {this.countries()}
                {people}
            </div>
        )
    }
}

export default FaceBook;