import './CreditCard.css';

const CreditCard = (props) => {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;
    const mastercardLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png";
    const visaLogo = "https://logodownload.org/wp-content/uploads/2016/10/visa-logo.png";
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