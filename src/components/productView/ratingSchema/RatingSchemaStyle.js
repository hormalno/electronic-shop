import styled from "styled-components"


export const RatingStyle = styled.ul `
    li {
        margin: 5px 0px;
    }
`

export const RatingStars = styled.div `
    display: inline-block;
    >i {
        color: #E4E7ED;
        &.fa-star {
            color: #D10024;
        }
    }    
`

export const RatingProgress = styled.div `
    position: relative;
    display: inline-block;
    height: 9px;
    background-color: #E4E7ED;
    width: 120px;
    margin: 0px 10px;
    border-radius: 5px;
    >div {
        background-color: #D10024;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        border-radius: 5px;
    }
`

export const RatingSum = styled.span `
    display: inline-block;
    font-size: 12px;
    color: #8D99AE;
`