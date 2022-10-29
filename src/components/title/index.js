import styled from "styled-components"

export const Title = styled.h2`
    width: 100%;
    padding: 30px 0;
    color: ${ props => props.cor || '#000'};
    font-size: ${ props => props.fontsize || '18px'};
    text-align: ${ props => props.align || 'center' };
    text-transform: uppercase;
    margin: 0;
`