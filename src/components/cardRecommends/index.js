import styled from "styled-components"
import { Title } from "../title"

const Card = styled.div`
   align-items: center;
   background-color: #FFF;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 10px;
   margin: 0 auto;
   max-width: 600px;
   padding: 25px;
   width: 100%; 
   display: inline-grid;
   justify-content: center;
`
const Button = styled.button`
   background-color: #EB9B00;
   color: #FFF;
   padding: 10px 0px;
   font-size: 16px;
   border: none;
   font-weight: 900;
   display: block;
   text-align: center;
   width: 150px;
   &:hover {
       cursor: pointer;
   }
`
const Description = styled.p`
   max-width: 300px;
`
const Subtitle = styled.h4`
   color: #002F52;
   font-size: 18px;
   font-weight: bold;
   margin: 15px 0;
`
const ImgBook = styled.img`
   width: 150px;
`

function CardRecommend({title, subtitle, description, img}){
    return (
        <Card>
            <Title fontsize="16px" cor="#EB9B00" align="left">{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <Description>{description}</Description>
            <ImgBook src={img}/>
            <Button>Saiba mais</Button>
        </Card>
    )
}

export default CardRecommend