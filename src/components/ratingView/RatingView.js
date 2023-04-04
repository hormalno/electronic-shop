function RatingView(props) {
    let redStars = Math.floor(props.rating);

    let ratingStars = [];
    for (let index = 0; index < redStars; index++) {
        ratingStars.push(<i className="fa fa-star" key={index}></i>);        
    }
    for (let index = redStars; index < 5; index++) {
        ratingStars.push(<i className="fa fa-star-o empty" key={index}></i>);        
    }    

    return (
        <>
            {ratingStars}
        </>        
    )
};

export default RatingView;