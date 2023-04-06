import styled from "styled-components";

export const ProductTabStyle = styled.div `
    margin-top: 60px;
    .tab-nav {
        position: relative;
        text-align: center;
        padding: 15px 0px;
        margin-bottom: 30px;
        :after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 50%;
            height: 1px;
            background-color: #E4E7ED;
            z-index: -1;
        }
        li {
            display: inline-block;
            background: #FFF;
            padding: 0px 15px;
            +li {
                margin-left: 15px;
            }
            a {
                display: block;
                font-weight: 700;
                color: #8D99AE;
                :after {
                    content: "";
                    display: block;
                    width: 0%;
                    height: 2px;
                    background-color: #D10024;
                    -webkit-transition: 0.2s all;
                    transition: 0.2s all;
                }
                :hover:after, :focus:after {
                    width: 100%;
                }
                :focus:after
            }
            &.active a {
                color: #D10024;
                :after {
                    width: 100%;
                }
            }
        }
    }

`