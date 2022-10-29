import Logo from '../logo'
import Option from '../menu'
import Icon from '../icone'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo/>
            <Option/>
            <Icon/>
        </HeaderContainer>
    )
}

export default Header