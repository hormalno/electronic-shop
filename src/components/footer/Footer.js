import styled from "styled-components";
import BottomFooter from "./bottomFooter/BottomFooter";
import TopFooter from "./topFooter/TopFooter";

function Footer() {
    return (
        <FooterStyle>
			<TopFooter />
            <BottomFooter />
		</FooterStyle>
    )
}

export default Footer;

const FooterStyle = styled.footer `
	background: #15161D;
	color: #B9BABC;
`