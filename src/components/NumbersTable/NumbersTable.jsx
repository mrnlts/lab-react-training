import './NumbersTable.css';
import Square from '../Square/Square';

const NumbersTable = (props) => {
    let tableArr = [];
    
    function handleTable () {
        for (let i = 1; i <= props.limit; i++) {
            tableArr.push(<Square index={i}/>)
        }
        return tableArr;
    }

    return <div className="numbersTable">{handleTable()}</div>
}

export default NumbersTable;