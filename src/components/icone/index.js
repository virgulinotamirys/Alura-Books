import perfil from '../../images/perfil.svg'
import bag from '../../images/sacola.svg'
import './style.css'

const icons = [perfil, bag]

function Icon() {
    return (
        <ul className='icons'>
            { icons.map( (icon) => (
            <li>
                <img 
                    src={icon}
                    alt='icone'>
                </img>
            </li>
            ) ) }
        </ul>
    )
}

export default Icon