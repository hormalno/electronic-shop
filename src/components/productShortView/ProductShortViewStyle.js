import styled from 'styled-components';

export const ProductShortViewClass = styled.div `
    position: relative;
    margin: 15px;
    -webkit-box-shadow: 0px 0px 0px 0px #E4E7ED, 0px 0px 0px 1px #E4E7ED;
    box-shadow: 0px 0px 0px 0px #E4E7ED, 0px 0px 0px 1px #E4E7ED;
    -webkit-transition: 0.2s all;
    transition: 0.2s all;
    :hover {
        -webkit-box-shadow: 0px 0px 6px 0px #E4E7ED, 0px 0px 0px 2px #D10024;
        box-shadow: 0px 0px 6px 0px #E4E7ED, 0px 0px 0px 2px #D10024;
    }
    :hover .add-to-cart {
        -webkit-transform: translateY(100%);
        -ms-transform: translateY(100%);
        transform: translateY(100%);
    }
`
export const ProductShortViewImgClass = styled.div ` 
    position: relative;
    >img {
        width: 100%;
    }
`

export const ProductShortViewLabelClass = styled.div ` 
    position: absolute;
    top: 15px;
    right: 15px;
`
export const ProductShortViewLabelSpanClass = styled.span `
    border: 2px solid;
    padding: 2px 10px;
    font-size: 12px;
    background-color: ${props => props.sale ? '#FFF;' : '#D10024;'}
    border-color:: ${props => props.sale ? '#D10024;' : '#D10024;'}
    color: ${props => props.sale ? '#D10024;' : '#FFF;'}
`
export const ProductShortViewBodyClass = styled.div `
    position: relative;
    padding: 15px;
    background-color: #FFF;
    text-align: center;
    z-index: 20;
`
export const ProductShortViewCategoryClass = styled.p `
    text-transform: uppercase;
    font-size: 12px;
    color: #8D99AE;
`
export const ProductShortViewNameClass = styled.h3 `
    text-transform: uppercase;
    font-size: 14px;
    >a {
        font-weight: 700;
        a:hover, a:focus {
            color: #D10024;
        }
    }
`
export const ProductShortViewPriceClass = styled.h4 `
    color: #D10024;
    font-size: 18px;
    .product-old-price {
        font-size: 70%;
        font-weight: 400;
        color: #8D99AE;
      }
`
export const ProductShortViewRatingClass = styled.div `
    position: relative;
    margin: 15px 0px 10px;
    height: 20px;
    >i {
        position: relative;
        width: 14px;
        margin-right: -4px;
        background: #FFF;
        color: #E4E7ED;
        z-index: 10;
    }
    >i.fa-star {
            color: #ef233c;
        }
    }
    :after {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        height: 1px;
        background-color: #E4E7ED;
    }
`
export const ProductShortViewButtonClass = styled.button `
    position: relative;
    width: 40px;
    height: 40px;
    line-height: 40px;
    background: transparent;
    border: none;
    -webkit-transition: 0.2s all;
    transition: 0.2s all;
    :hover {
        background-color: #E4E7ED;
        color: #D10024;
        border-radius: 50%;
        .tooltipp {
            opacity: 1;
            visibility: visible;
            -webkit-transform: translate(-50%, -5px);
            -ms-transform: translate(-50%, -5px);
            transform: translate(-50%, -5px);
        }
    }
    .fa-heart {
        color: #D10024;
    }
    .tooltipp {
        position: absolute;
        bottom: 100%;
        left: 50%;
        -webkit-transform: translate(-50%, -15px);
        -ms-transform: translate(-50%, -15px);
        transform: translate(-50%, -15px);
        width: 150px;
        padding: 10px;
        font-size: 12px;
        line-height: 10px;
        background: #1e1f29;
        color: #FFF;
        text-transform: uppercase;
        z-index: 10;
        opacity: 0;
        visibility: hidden;
        -webkit-transition: 0.2s all;
        transition: 0.2s all;
    }
`
export const AddToCartClass = styled.div `
    position: absolute;
    left: 1px;
    right: 1px;
    bottom: 1px;
    padding: 15px;
    background: #1e1f29;
    text-align: center;
    -webkit-transform: translateY(0%);
    -ms-transform: translateY(0%);
    transform: translateY(0%);
    -webkit-transition: 0.2s all;
    transition: 0.2s all;
    z-index: 2;
    .add-to-cart-btn {
        position: relative;
        border: 2px solid transparent;
        height: 40px;
        padding: 0 30px;
        background-color: #ef233c;
        color: #fff;
        text-transform: uppercase;
        font-weight: 700;
        border-radius: 40px;
        -webkit-transition: 0.2s all;
        transition: 0.2s all;
        :hover {
            background-color: #FFF;
            color: #D10024;
            border-color: #D10024;
            padding: 0px 30px 0px 50px;
            >i {
                opacity: 1;
                visibility: visible;
            }
        }
        :disabled {
            background-color: #FFF;
            color: #D10024;
            border-color: #D10024;
            padding: 0px 30px 0px 50px;
            >i {
                opacity: 1;
                visibility: visible;
            }
        }
    }
    .add-to-cart-btn>i {
        position: absolute;
        left: 0;
        top: 0;
        width: 40px;
        height: 40px;
        line-height: 38px;
        color: #D10024;
        opacity: 0;
        visibility: hidden;
    }
`