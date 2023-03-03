import styled from "styled-components";

export const ProductsSlickNavStyle = styled.div `
    position: absolute;
    right: 15px;
    z-index: 10;
    .slick-prev, .slick-next {
        position: static;
        -webkit-transform: none;
        -ms-transform: none;
        transform: none;
        width: 20px;
        height: 20px;
        display: inline-block !important;
        margin: 0px 2px;
        border: 1px solid #E4E7ED;
        background-color: #FFF;
        border-radius: 50%;
        z-index: 22;
        -webkit-transition: 0.2s all;
        transition: 0.2s all;
        :before {
            font-size: 14px;
            font-family: FontAwesome;
            color: #2B2D42;
        }
        :hover, :focus {
            background-color: #D10024;
            border-color: #D10024;
            :before {
                color: #FFF;
            }
        }
    }
    .slick-prev {
        left: -20px;
        :before {
            content: "\f104";
        }
    }
    .slick-next {
        right: -20px;
        :before {
            content: "\f105";
        }
    }
`