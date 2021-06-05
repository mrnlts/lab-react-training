import './Greetings.css';

const Greetings = (props) => {
    let greeting = '';
    switch (props.lang) {
        case 'de': 
            greeting = 'Hallo';
            break;
        case 'es': 
            greeting = 'Hola';
            break;
        case 'fr': 
            greeting = 'Bonjour';
            break;
        default:
            greeting = 'Hello';
            break;
    }

    return (
        <h2 className="greeting">{greeting} {props.children}</h2>
    )
}

export default Greetings;