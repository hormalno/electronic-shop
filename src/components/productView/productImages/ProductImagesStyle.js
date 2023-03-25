import styled from "styled-components";

export const ProductMainImg = styled.div `
    #product-main-img {
        .slick-prev {
            -webkit-transform: translateX(-15px);
            -ms-transform: translateX(-15px);
            transform: translateX(-15px);
            left: 15px;
            opacity: 0;
            visibility: hidden;
            -webkit-transition: 0.2s all;
            transition: 0.2s all;
        }
        .slick-next {
            -webkit-transform: translateX(15px);
            -ms-transform: translateX(15px);
            transform: translateX(15px);
            right: 15px;
            opacity: 0;
            visibility: hidden;
            -webkit-transition: 0.2s all;
            transition: 0.2s all;
        }
        :hover .slick-prev {
            -webkit-transform: translateX(0%);
            -ms-transform: translateX(0%);
            transform: translateX(0%);
            opacity: 1;
            visibility: visible;
        }
        :hover .slick-next {
            -webkit-transform: translateX(0%);
            -ms-transform: translateX(0%);
            transform: translateX(0%);
            opacity: 1;
            visibility: visible;
        }
        .zoomImg {
            background-color: #FFF;
        }
    }
`

export const ProductPreview = styled.div `
    margin: 0px 5px;
    border: 1px solid #E4E7ED;
    &.slick-current {
        border-color: #D10024;
    }
    img {
        width: 100%;
    }
`

export const ProductImgs = styled.div `
    #product-imgs {
        .slick-prev {
            top: -20px;
            left: 50%;
            -webkit-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            transform: translateX(-50%);
            :before {
                content: "\f106";
            }
        }
        .slick-next {
            top: calc(100% - 20px);
            left: 50%;
            -webkit-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            transform: translateX(-50%);
            :before {
                content: "\f107";
            }
        }
    }
`