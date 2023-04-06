import styled from "styled-components";

export const RatingAvgStyle = styled.div `
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 15px;
`

export const RatingStarsStyle = styled.div `
    margin-left: 10px;
    display: inline-block;
    >i {
        color: #E4E7ED;
        &.fa-star {
            color: #D10024;
        }
    }
`