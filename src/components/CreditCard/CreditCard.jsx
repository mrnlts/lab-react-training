import './CreditCard.css';

const CreditCard = (props) => {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;
    const mastercardLogo = "./img/master-card.svg";
    const visaLogo = "./img/visa.png";
    const logo = (type === 'Visa') ? visaLogo : mastercardLogo ;
    const cardNum = String(number).slice(number.length-4);
    return (
        <div className="creditcard" style={{backgroundColor: `${bgColor}`, color: `${color}`}}>
            <img src={logo} alt ="card-logo"/>
            <h1><span> ···· ···· ···· </span> {cardNum}</h1>
            <div className="creditcard-text">
                <div>
                    <p className="expires">Expires {expirationMonth}/{expirationYear}</p>
                    <p>{bank}</p>
                </div>
                <p className="owner">{owner}</p>
            </div>
        </div>
    )
}

export default CreditCard;