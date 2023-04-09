import styled from "styled-components";

export const ReviewsStyle = styled.li `
    position: relative;
    padding-left: 145px;
    margin-bottom: 30px;
`

export const ReviewHeading = styled.div `
    position: absolute;
    width: 130px;
    left: 0;
    top: 0;
    height: 70px;
    .name {
        margin-bottom: 5px;
        margin-top: 0px;
    }
    .date {
        color: #8D99AE;
        font-size: 10px;
        margin: 0;
    }
`

export const ReviewRating = styled.div `
    margin-top: 5px;
    >i {
        color: #E4E7ED;
    }
    >i.fa-star {
        color: #D10024;
    }
`

export const ReviewBody = styled.div `
    min-height: 70px;
`