import styled from "styled-components";

function Main(props) {
    return (
        <HeaderCenter>{props.title}</HeaderCenter>
    )
}

export default Main;

const HeaderCenter = styled.h1 `
    text-align:center;
`