import { Component } from "react";
import './FaceBook.css';

class FaceBook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            people: this.props.people
        }
    }
    render () {
        console.log("this.state :", this.state.people)
        const people = this.state.people.map((person) => 
            <div className="card FaceBook" key={person.firstName}>
                <img src={person.img} alt={person.firstName} />
                <div className="FaceBook-person-data">
                    <p><strong>First name: </strong> {person.firstName}</p>
                    <p><strong>Last name: </strong> {person.lastName}</p>
                    <p><strong>Country: </strong> {person.country}</p>
                    <p><strong>Type: </strong> {(person.isStudent) ? 'Student' : 'Teacher'}</p>
                </div>
            </div>
        );
        return(
            <div>
                {people}
            </div>
        )
    }
}

export default FaceBook;