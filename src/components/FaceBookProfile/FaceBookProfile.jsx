import { Component } from "react";

class FaceBookProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            person: props.person
        }
    }

    render() {
        const {person} = this.state;
        return(
            <div className="card FaceBook" key={person.firstName}>
                <img src={person.img} alt={person.firstName} />
                <div className="FaceBook-person-data">
                    <p><strong>First name: </strong> {person.firstName}</p>
                    <p><strong>Last name: </strong> {person.lastName}</p>
                    <p><strong>Country: </strong> {person.country}</p>
                    <p><strong>Type: </strong> {(person.isStudent) ? 'Student' : 'Teacher'}</p>
                </div>
            </div>
        )
    }
}

export default FaceBookProfile;