import styled from "styled-components"

const Container = styled.div`
    background-color: ${props => props.bgColour || 'white'};
    height: auto;
`

export {Container}