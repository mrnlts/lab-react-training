const BoxColor = (props) => {
    const { r, g, b } = props;
    const colour = `rgb(${r}, ${g}, ${b})`;
    const hexColour = (r,g,b)=> {
        const hexR = (r.toString(16) === '0') ? '00' : r.toString(16);
        const hexG = (g.toString(16) === '0') ? '00' : g.toString(16);
        const hexB = (b.toString(16) === '0') ? '00' : b.toString(16);
        return `#${hexR}${hexG}${hexB}`;
    }    
    return (
        <h2 className="card" style={{backgroundColor: `${colour}`}}>{colour} <br /> {hexColour(r, g, b)} </h2>
    );
}

export default BoxColor;