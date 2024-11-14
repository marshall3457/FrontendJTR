import { Button } from "@mui/material";
import styled from "styled-components";



const Position = styled.div`
    

`

const Suggestion = styled.div`
    



`


const ImgProduct = styled.img`
    width: 200px;
`
const Title = styled.h2`
    



`
const Description = styled.h4`
    
   
`
const SuggestionAdd = styled.div`
    

`


const Home = () => {
    return(
        <Position>
            <Suggestion>
                <ImgProduct src="taco.jpg" alt="Imagen del producto"></ImgProduct>
                <Title>Tacos al pastor</Title>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequaA</Description>
            </Suggestion>
            <SuggestionAdd>
                <Title>Sugerencia del chef</Title>
                <Button variant="contained">Agregar al carrito</Button>
            </SuggestionAdd>

        </Position>
    )






}


export default Home;