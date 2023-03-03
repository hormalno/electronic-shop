import styled from 'styled-components';

export const SectionTitleClass = styled.div `
	position: relative;
	margin-bottom: 30px;
	margin-top: 15px;
	.title {
		display: inline-block;
		text-transform: uppercase;
		margin: 0px;
	}
`
export const SectionNavClass = styled.div `
	float: right;
`
export const SectionTabNavClass = styled.ul `
  	display: inline-block;
	li {
		display: inline-block;
		margin-right: 15px;
		:last-child {
			margin-right: 0px;
		}
		a {
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
		}
	}
	li.active a {
		color: #D10024;
		:after {
			width: 100%;
		}		
	} 
`
export const ProductsTabsClass = styled.div `
	>.tab-pane {
		display: block;
		height: 0;
		opacity: 0;
		visibility: hidden;
		overflow-y: hidden;
		padding-bottom: 60px;
		margin-bottom: -60px;
	}
	>.tab-pane.active {
		opacity: 1;
		visibility: visible;
		height: auto;
	}
	.products-slick .slick-list {
		padding-bottom: 60px;
		margin-bottom: -60px;
		z-index: 2;
	}
`
export const ProductsSlickNavClass = styled.div `
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