import './style.css'
const textOptions = ['Categoria', 'Favoritos', 'Minha Estante']

function Option() {
    return (
        <ul className='options'>
            { textOptions.map( (text) => (
            <li><p>{text}</p></li>
            ) ) }
        </ul>
    )
}

export default Option