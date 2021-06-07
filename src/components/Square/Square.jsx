import './Square.css';

const Square = (props) => {
    const squareNum = (props.index % 2 === 0) ? 'isEven' : 'isOdd';
    return <div key={props.index} className={"square " + squareNum}>{props.index}</div>
}

export default Square;