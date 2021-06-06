import './DriverCard.css';
import Rating from '../Rating/Rating';

const DriverCard = (props) => {
    const {name, img, rating, car } = props;
    return(
        <div className="card driver">
            <img src={img} alt="driver"/>
            <div className="driver-data">
                <h2>{name}</h2>
                <div className="driver-rating">
                    <Rating>{rating}</Rating>
                </div>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard;