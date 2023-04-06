import styled from "styled-components";

export const ReviewsPaginationStyle = styled.ul `
    text-align: center;
    li {
        display: inline-block;
        width: 35px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        background-color: #FFF;
        border: 1px solid #E4E7ED;
        -webkit-transition: 0.2s all;
        transition: 0.2s all;
        :hover {
            background-color: #E4E7ED;
            color: #D10024;
        }
        a {
            display: block;
        }
        &.active {
            background-color: #D10024;
            border-color: #D10024;            
            cursor: default;
            a {
                color: #FFF;
            } 
        }
    }
`
