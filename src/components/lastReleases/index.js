import { livros } from './dadosLastReleases'
import { Title } from  '../title'
import imgBook from '../../images/livro2.png'
import CardRecommend from '../cardRecommends'
import styled from 'styled-components'

const LastReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`
const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`
function LastReleases() {
    return (
        <LastReleasesContainer>
            <Title 
                cor='#EB9B00' 
                fontsize="36px">
                Últimos lançamentos
            </Title>
            <NewBooksContainer>
                { livros.map( livro => (
                    <img src={livro.src}/>
                )) }
            </NewBooksContainer>
            <CardRecommend
                title="Talvez você se interesse por"
                subtitle="Angular"
                description="Construindo uma aplicação com a plataforma Google"
                img={imgBook}
            />
        </LastReleasesContainer>
    )
}

export default LastReleases