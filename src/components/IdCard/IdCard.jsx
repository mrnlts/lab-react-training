import './IdCard.css';

const IdCard = (props) => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return (
        <div className="card IdCard">
            <img src={props.picture} alt="card"/>
            <p><strong>First name: </strong> {props.firstName}</p>
            <p><strong>Last name: </strong> {props.lastName}</p>
            <p><strong>Gender: </strong> {props.gender}</p>
            <p><strong>Height: </strong> {props.height/100}m</p>
            <p><strong>Birth: </strong> {days[props.birth.getDay()-1]} {months[props.birth.getMonth()]} {props.birth.getDate()} {props.birth.getFullYear()}</p>
        </div>
    )
}

export default IdCard;