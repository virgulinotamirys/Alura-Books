import styled from 'styled-components'
import perfil from '../../images/perfil.svg'
import bag from '../../images/sacola.svg'

const icons = [perfil, bag]
const IconComponent = styled.ul`
    display: flex;
    align-items: center;
}
`
const IconItemComponent = styled.li`
    margin-right: 30px;
    width: 25px;
}
`

function Icon() {
    return (
        <IconComponent>
            { icons.map( (icon) => (
            <IconItemComponent>
                <img 
                    src={icon}
                    alt='icone'>
                </img>
            </IconItemComponent>
            ) ) }
        </IconComponent>
    )
}

export default Icon