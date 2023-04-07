import styled from "styled-components";

export const ProductWidget = styled.div `
    position: relative;
    margin: 30px 0px;
`
export const ProductWidgetImg = styled.div `
    position: absolute;
    left: 0px;
    top: 0px;
    width: 60px;
    >img {
        width: 100%;
    }
`
export const ProductWidgetBody = styled.div `
    padding-left: 75px;
    min-height: 60px;
`
export const ProductWidgetCategory = styled.p `
    text-transform: uppercase;
    font-size: 10px;
    color: #8D99AE;
`
export const ProducgWidgetName = styled.h3 `
    text-transform: uppercase;
    font-size: 12px;
    >a {
        font-weight: 700;
        :hover, :focus {
          color: #D10024;
        }
    }
`
export const ProductWidgetPrice = styled.h4 `
  font-size: 14px;
  color: #D10024;
  .product-old-price {
    font-size: 70%;
    font-weight: 400;
    color: #8D99AE;
  }
  .qty {
    font-weight: 400;
    margin-right: 10px;
  }
`
  
  // .product-widget .delete {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   height: 14px;
  //   width: 14px;
  //   text-align: center;
  //   font-size: 10px;
  //   padding: 0;
  //   background: #1e1f29;
  //   border: none;
  //   color: #FFF;
  // }