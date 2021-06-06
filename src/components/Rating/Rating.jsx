import './Rating.css';

const Rating = (props) => {
    const emptyStar = <i className="far fa-star"></i>;
    const fullStar = <i className="fas fa-star"></i>;
    const rating = () => {
        let arr = [];
        for (let i = 0; i < Math.round(props.children); i++) {
            arr.push(fullStar);
        }
        if (arr.length < 5) {
            for (let i = 0; i < 5-Math.round(props.children); i++) {
                arr.push(emptyStar);
            }
        }
        return arr;
    }
    
    return (
        <div className="card">
            <span class="star">
                {rating()}
            </span>
        </div>
    )
}

export default Rating;