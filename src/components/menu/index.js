import styled from 'styled-components'
const textOptions = ['Categoria', 'Favoritos', 'Minha Estante']
const OptionContainer = styled.ul`
    display: flex;
`
const OptionItemContainer = styled.li`
    min-width: 120px;
    height: 100%;
    cursor: pointer;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
`

function Option() {
    return (
        <OptionContainer>
            { textOptions.map( (text) => (
            <OptionItemContainer><p>{text}</p></OptionItemContainer>
            ) ) }
        </OptionContainer>
    )
}

export default Option