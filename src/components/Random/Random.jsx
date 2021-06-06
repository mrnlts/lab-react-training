const Random = ( props ) => {
    let { min, max } = props;
    const result = ( x, y ) => Math.round(Math.random() * ( y - x ) + x);

    return (
        <h2 className="card">{`Random value between ${ min } and ${ max } => ${ result( min, max ) }`}</h2>
    )
}

export default Random;