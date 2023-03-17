function RatingView(props) {
    let redStars = Math.floor(props.rating);

    let ratingStars = [];
    for (let index = 0; index < redStars; index++) {
        ratingStars.push(<i className="fa fa-star"></i>);        
    }
    for (let index = 0; index < 5-redStars; index++) {
        ratingStars.push(<i className="fa fa-star-o empty"></i>);        
    }    

    return (
        <>
            {ratingStars}
        </>        
    )
};

export default RatingView;